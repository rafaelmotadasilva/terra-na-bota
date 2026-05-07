import type { NextApiRequest, NextApiResponse } from 'next'
import { kv } from '@vercel/kv'
import fs from 'fs'
import path from 'path'

type Data = { count: number }

const KV_LEADS_KEY = 'leads'
const kvAvailable = !!(process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN)

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ count: 0 })
  }

  // Cache curto na CDN da Vercel — reduz hits no Redis sem perder precisão
  res.setHeader('Cache-Control', 'public, s-maxage=30, stale-while-revalidate=60')

  try {
    if (kvAvailable) {
      const count = await kv.scard(KV_LEADS_KEY)
      return res.status(200).json({ count: count ?? 0 })
    }

    const leadsFile = path.join(process.cwd(), 'data', 'leads.json')
    if (!fs.existsSync(leadsFile)) return res.status(200).json({ count: 0 })
    const leads = JSON.parse(fs.readFileSync(leadsFile, 'utf-8'))
    return res.status(200).json({ count: Array.isArray(leads) ? leads.length : 0 })
  } catch {
    return res.status(200).json({ count: 0 })
  }
}
