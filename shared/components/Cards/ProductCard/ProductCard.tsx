import { Card, CardActionArea, CardContent, CardMedia, Typography, Button, Box, CardProps } from '@mui/material'

export type ProductCard = {
    image: string
    name: string
    price: number
    discountPrice: number
    onClick?: () => void
} & Omit<CardProps, 'onClick'>

export const ProductCard = ({ image, name, price, discountPrice, onClick, ...props }: ProductCard) => {
    return (
        <Card sx={{ maxWidth: 345 }} onClick={onClick} {...props}>
            <CardActionArea>
                <CardMedia component="img" height="300" image={image} alt={name} />
            </CardActionArea>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
                    <Typography variant="h6" color="text.secondary">
                        {price}
                        {discountPrice}
                    </Typography>
                    <Button variant="contained" onClick={onClick}>
                        Comprar
                    </Button>
                </Box>
            </CardContent>
        </Card>
    )
}
