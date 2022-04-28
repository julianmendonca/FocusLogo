import { NextApiRequest, NextApiResponse } from 'next'
import { Product } from '@/shared/Interfaces'

export interface ProductResponse {
    totalPages: number
    count: number
    generic_products: Product[]
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    let url = 'https://api.zecatdifapro.com/generic_product'
    const params = Object.keys(req.query).map((key) => {
        return '&' + key + '=' + req.query[key]
    })
    if (params.length) url += '?' + params.join('')

    const response = (await fetch(url).then((res) => res.json())) as ProductResponse
    res.status(200).json(response)
}

export default handler
