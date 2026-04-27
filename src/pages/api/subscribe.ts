import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'

type Data = { message: string }

function saveToFile(email: string) {
  const dataDir = path.join(process.cwd(), 'data')
  const leadsFile = path.join(dataDir, 'leads.json')

  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true })
  }

  const existing: { email: string; createdAt: string }[] = fs.existsSync(leadsFile)
    ? JSON.parse(fs.readFileSync(leadsFile, 'utf-8'))
    : []

  const alreadyExists = existing.some((entry) => entry.email === email)
  if (!alreadyExists) {
    existing.push({ email, createdAt: new Date().toISOString() })
    fs.writeFileSync(leadsFile, JSON.stringify(existing, null, 2), 'utf-8')
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método não permitido' })
  }

  const { email } = req.body

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ message: 'E-mail inválido' })
  }

  try {
    // Arquivo local — funciona sem nenhuma conta externa
    saveToFile(email)

    // Google Sheets (configurar SHEETS_WEBHOOK no .env.local para ativar)
    if (process.env.SHEETS_WEBHOOK) {
      await fetch(process.env.SHEETS_WEBHOOK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
    }

    // Mailchimp (configurar MAILCHIMP_API_KEY, MAILCHIMP_LIST_ID, MAILCHIMP_SERVER)
    if (process.env.MAILCHIMP_API_KEY) {
      const { MAILCHIMP_API_KEY, MAILCHIMP_LIST_ID, MAILCHIMP_SERVER } = process.env
      await fetch(
        `https://${MAILCHIMP_SERVER}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members`,
        {
          method: 'POST',
          headers: {
            Authorization: `apikey ${MAILCHIMP_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email_address: email, status: 'subscribed' }),
        }
      )
    }

    // ConvertKit (configurar CONVERTKIT_API_KEY e CONVERTKIT_FORM_ID)
    if (process.env.CONVERTKIT_API_KEY) {
      const { CONVERTKIT_API_KEY, CONVERTKIT_FORM_ID } = process.env
      await fetch(
        `https://api.convertkit.com/v3/forms/${CONVERTKIT_FORM_ID}/subscribe`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ api_key: CONVERTKIT_API_KEY, email }),
        }
      )
    }

    // Brevo (configurar BREVO_API_KEY e BREVO_LIST_ID)
    if (process.env.BREVO_API_KEY) {
      const { BREVO_API_KEY, BREVO_LIST_ID } = process.env
      await fetch('https://api.brevo.com/v3/contacts', {
        method: 'POST',
        headers: {
          'api-key': BREVO_API_KEY,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          listIds: [Number(BREVO_LIST_ID)],
          updateEnabled: true,
        }),
      })
    }

    return res.status(200).json({ message: 'Cadastrado com sucesso' })

  } catch (error) {
    console.error('Erro ao cadastrar lead:', error)
    return res.status(500).json({ message: 'Erro interno. Tente novamente.' })
  }
}
