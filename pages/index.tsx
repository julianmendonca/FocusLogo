import Title from '@/components/Text/Title'
import { Categoria } from '@/shared/Interfaces'
import NavBar from '@/components/NavBar/NavBar'
import { useGetCategories } from '@/shared/requests'
import { environment } from '@/shared/constants'
const Home = () => {
    const { data: categories } = useGetCategories()
    return (
        <>
            <NavBar categories={categories?.families || []} />
            <Title></Title>
        </>
    )
}

export default Home

export async function getStaticProps() {
    // `getStaticProps` is executed on the server side.
    const categories = (await fetch('http://localhost:3000' + '/api/categorias').then((res) =>
        res.json()
    )) as Categoria[]

    return {
        props: {
            fallback: {
                '/api/categorias': categories,
            },
        },
    }
}
