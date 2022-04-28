import { NextApiRequest, NextApiResponse } from 'next'
import { ProductResponse } from '.'
import { environment } from '@/shared/constants'

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
    const url = environment.domain + '/api/productos?stock=250&page=1&limit=10&order[random]'
    const response = (await fetch(url).then((res) => res.json())) as ProductResponse
    res.status(200).json(response?.generic_products || [])
}

export default handler
