import { Categoria } from '@/shared/Interfaces'
import NavBar from '@/components/NavBar/NavBar'
import { environment } from '@/shared/constants'

type HomeProps = {
    categories: Categoria[]
    error?: string
}

const Home = ({ categories, error }: HomeProps) => {
    return (
        <>
            <NavBar categories={categories || []} />
            FocusLogo
            {environment.domain}
            {error}
        </>
    )
}

export default Home

export async function getStaticProps() {
    try {
        const categories = (await fetch('/api/categorias').then((res) => res.json())) as Categoria[]

        return {
            props: {
                categories,
            },
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
        return {
            props: { categories: [], error: e.message },
        }
    }
}
