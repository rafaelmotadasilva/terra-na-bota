import type { NextApiRequest, NextApiResponse } from 'next'
import { kv } from '@vercel/kv'
import { Resend } from 'resend'
import fs from 'fs'
import path from 'path'

type Data = { message: string }

const KV_LEADS_KEY = 'leads'
const KV_MIGRATED_KEY = 'leads:migrated'
const kvAvailable = !!(process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN)

const CONFIRMATION_HTML = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Terra na Bota</title>
</head>
<body style="margin:0;padding:0;background:#FAF7F0;font-family:Georgia,serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#FAF7F0;padding:48px 0;">
    <tr>
      <td align="center">
        <table width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;">
          <tr>
            <td style="padding:0 32px 40px;">
              <p style="font-family:'Courier New',monospace;font-size:11px;font-weight:700;letter-spacing:0.3em;text-transform:uppercase;color:#82421B;margin:0 0 40px;">
                TERRA ★ NA BOTA
              </p>
              <h1 style="font-family:Georgia,serif;font-size:32px;font-weight:900;line-height:1.05;color:#3B2F26;margin:0 0 28px;letter-spacing:-0.02em;">
                O chão lembra quem pisa forte.
              </h1>
              <p style="font-family:Georgia,serif;font-size:17px;line-height:1.7;color:#3B2F26;margin:0 0 32px;">
                Você entrou na lista de espera da Terra na Bota.<br />
                Quando o lançamento abrir, você saberá antes de todo mundo
                e vai garantir o melhor preço.
              </p>
              <hr style="border:none;border-top:1px solid #B3A27B;margin:40px 0;" />
              <p style="font-family:'Courier New',monospace;font-size:10px;font-weight:700;letter-spacing:0.3em;text-transform:uppercase;color:#82421B;margin:0;">
                Estiloso na fazenda ★ Selvagem na cidade
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`

async function migrateLeadsIfNeeded() {
  const migrated = await kv.get(KV_MIGRATED_KEY)
  if (migrated) return

  const leadsFile = path.join(process.cwd(), 'data', 'leads.json')
  if (fs.existsSync(leadsFile)) {
    const existing: { email: string }[] = JSON.parse(fs.readFileSync(leadsFile, 'utf-8'))
    if (existing.length > 0) {
      await Promise.all(existing.map(({ email: e }) => kv.sadd(KV_LEADS_KEY, e)))
    }
  }
  await kv.set(KV_MIGRATED_KEY, '1')
}

function saveToFile(email: string) {
  const dataDir = path.join(process.cwd(), 'data')
  const leadsFile = path.join(dataDir, 'leads.json')

  if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true })

  const existing: { email: string; createdAt: string }[] = fs.existsSync(leadsFile)
    ? JSON.parse(fs.readFileSync(leadsFile, 'utf-8'))
    : []

  if (!existing.some((e) => e.email === email)) {
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
    let isNew = false

    if (kvAvailable) {
      await migrateLeadsIfNeeded()
      const added = await kv.sadd(KV_LEADS_KEY, email)
      isNew = added > 0
    } else {
      const leadsFile = path.join(process.cwd(), 'data', 'leads.json')
      const existing: { email: string }[] = fs.existsSync(leadsFile)
        ? JSON.parse(fs.readFileSync(leadsFile, 'utf-8'))
        : []
      isNew = !existing.some((e) => e.email === email)
      saveToFile(email)
    }

    if (isNew && process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY)

      await Promise.all([
        resend.emails.send({
          from: 'Terra na Bota <contato@terranabota.com.br>',
          to: email,
          subject: 'Você está dentro. ★',
          html: CONFIRMATION_HTML,
        }),
        process.env.NOTIFY_EMAIL
          ? resend.emails.send({
              from: 'Terra na Bota <contato@terranabota.com.br>',
              to: process.env.NOTIFY_EMAIL,
              subject: `Novo lead: ${email}`,
              html: `<p>Novo cadastro na lista de espera: <strong>${email}</strong></p>`,
            })
          : Promise.resolve(),
      ])
    }

    // Google Sheets (configurar SHEETS_WEBHOOK no .env.local para ativar)
    if (process.env.SHEETS_WEBHOOK) {
      await fetch(process.env.SHEETS_WEBHOOK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
    }

    return res.status(200).json({ message: 'Cadastrado com sucesso' })
  } catch (error) {
    console.error('Erro ao cadastrar lead:', error)
    return res.status(500).json({ message: 'Erro interno. Tente novamente.' })
  }
}
