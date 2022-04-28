import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
    Button,
    Box,
    CardProps,
    IconButton,
    Popover,
} from '@mui/material'
import DescriptionIcon from '@mui/icons-material/Description'
import { useState } from 'react'
import useStyles from './ProductCard.styles'

export type ProductCard = {
    image: string
    name: string
    description: string
    price: number
    discountPrice: number
    onClick?: () => void
} & Omit<CardProps, 'onClick'>

export const ProductCard = ({ image, name, description, price, discountPrice, onClick, ...props }: ProductCard) => {
    const styles = useStyles()
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)

    const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handlePopoverClose = () => {
        setAnchorEl(null)
    }

    const open = Boolean(anchorEl)

    return (
        <Card sx={{ width: 345 }} onClick={onClick} {...props}>
            <CardActionArea>
                <CardMedia component="img" height="300" image={image} alt={name} />
            </CardActionArea>
            <CardContent>
                <Box mb={2} display="flex" alignItems="start" justifyContent="space-between">
                    <Typography
                        height={50}
                        variant="h5"
                        component="div"
                        maxWidth={345}
                        className={styles.multiLineEllipsis}
                    >
                        {name}
                    </Typography>
                    <IconButton
                        aria-label="delete"
                        size="small"
                        aria-owns={open ? 'mouse-over-popover' : undefined}
                        aria-haspopup="true"
                        onMouseEnter={handlePopoverOpen}
                        onMouseLeave={handlePopoverClose}
                        disabled={!description}
                    >
                        <DescriptionIcon fontSize="medium" />
                    </IconButton>
                </Box>
                <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
                    <Typography variant="h6" color="text.secondary">
                        ${discountPrice || price}
                    </Typography>
                    <Button variant="contained" onClick={onClick}>
                        Comprar
                    </Button>
                </Box>
            </CardContent>
            <Popover
                id="mouse-over-popover"
                sx={{
                    pointerEvents: 'none',
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
                PaperProps={{ style: { maxWidth: '300px' } }}
            >
                <Typography sx={{ p: 1 }}>{description}</Typography>
            </Popover>
        </Card>
    )
}
