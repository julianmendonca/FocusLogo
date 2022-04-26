import useSWR from 'swr'
import { Categoria } from './Interfaces'
import { environment } from './constants'

export const useGetCategories = () => {
    const fetcher = (path: string) => fetch(path).then((res) => res.json()) as unknown as Categoria[]

    return useSWR(environment.domain + '/api/categorias', fetcher)
}
