import useSWR from 'swr'
import { Categoria } from './Interfaces'

export const useGetCategories = () => {
    const fetcher = (path: string) => fetch(path).then((res) => res.json()) as unknown as { families: Categoria[] }

    return useSWR('/api/categorias', fetcher)
}
