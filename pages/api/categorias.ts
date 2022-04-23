import { Categoria } from '@/shared/Interfaces'
import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
    const categories = (await fetch('https://api.zecatdifapro.com/family').then((res) => res.json())) as Categoria[]
    res.status(200).json(categories)
}

export default handler
