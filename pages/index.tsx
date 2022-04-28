import { Categoria } from '@/shared/Interfaces'
import NavBar from '@/components/NavBar/NavBar'
import { environment } from '@/shared/constants'
import { ProductCard } from '@/shared/components/Cards/ProductCard/ProductCard'
import { Product } from '../shared/Interfaces'

type HomeProps = {
    categories: Categoria[]
    products: Product[]
    error?: string
}

const Home = ({ categories }: HomeProps) => {
    return (
        <>
            <NavBar categories={categories || []} />
            FocusLogo
            <ProductCard
                name="Spray Sanitizante 250 Ml con Gatillo"
                image="https://zecat-user-images-prod.s3.amazonaws.com/generic_products/FOTOS%20CON%20SELLOS-06%2Cjpg-1589901085.jpg"
                price={195.99}
                discountPrice={0}
            />
        </>
    )
}

export default Home

export async function getStaticProps() {
    const categories = (await fetch(environment.domain + '/api/categorias')
        .then((res) => res.json())
        .catch(() => [])) as Categoria[]
    const products = (await fetch(environment.domain + '/api/productos/random')
        .then((res) => res.json())
        .catch(() => [])) as Product[]
    return {
        props: {
            categories,
            products,
        },
        revalidate: 7200,
    }
}
