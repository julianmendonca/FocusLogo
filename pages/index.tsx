import { Categoria } from '@/shared/Interfaces'
import NavBar from '@/components/NavBar/NavBar'
import { environment } from '@/shared/constants'
import { ProductCard } from '@/shared/components/Cards/ProductCard/ProductCard'
import { Product } from '../shared/Interfaces'
import { Grid } from '@mui/material'

type HomeProps = {
    categories: Categoria[]
    products: Product[]
    error?: string
}

const Home = ({ categories, products }: HomeProps) => {
    return (
        <>
            <NavBar categories={categories || []} />
            FocusLogo
            <Grid container columns={12} spacing={5}>
                {products.map((product) => (
                    <Grid item md={4} key={product.id}>
                        <ProductCard
                            name={product.name}
                            image={product.images.find((i) => i.image_url)?.image_url || ''}
                            price={+product.price}
                            discountPrice={product.discount_price}
                            description={product.description}
                        />
                    </Grid>
                ))}
            </Grid>
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
