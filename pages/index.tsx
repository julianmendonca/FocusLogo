import { Categoria } from '@/shared/Interfaces'
import NavBar from '@/components/NavBar/NavBar'
import { environment } from '@/shared/constants'

type HomeProps = {
    categories: Categoria[]
}

const Home = ({ categories }: HomeProps) => {
    return (
        <>
            <NavBar categories={categories || []} />
            FocusLogo
        </>
    )
}

export default Home

export async function getStaticProps() {
    try {
        const categories = (await fetch(environment.domain + '/api/categorias').then((res) =>
            res.json()
        )) as Categoria[]

        return {
            props: {
                categories,
            },
        }
    } catch {
        return {
            props: { categories: [] },
        }
    }
}
