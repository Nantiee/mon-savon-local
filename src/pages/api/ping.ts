import type { NextApiRequest, NextApiResponse } from 'next'

export default function i18n (req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json('pong')
  } else {
    res.status(405).json({ message: 'Method Not Allowed' })
  }
}
