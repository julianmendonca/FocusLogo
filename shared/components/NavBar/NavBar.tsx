import { Box } from '@mui/system'
import Image from 'next/image'

import MenuButton from '../Button/MenuButton/MenuButton'
import SearchBar from '../Input/SearchBar/SearchBar'
import useStyles from './NavBar.styles'
import { useGetCategories } from '@/shared/requests'

const NavBar = () => {
    const styles = useStyles()
    const { data: categories } = useGetCategories()

    return (
        <Box className={styles.container}>
            <Box className={styles.top}>
                <Image src="/images/logo.png" width="80" height="30" />
                <SearchBar
                    elements={[]}
                    containerProps={{ className: styles.searchBar }}
                    placeholder="Buscá productos o categorías"
                />
            </Box>
            <Box className={styles.bottom}>
                <MenuButton
                    label="Opciones"
                    options={
                        categories?.families.map((category) => ({
                            label: category.description,
                            icon: category.icon_url,
                        })) || []
                    }
                />
            </Box>
        </Box>
    )
}

export default NavBar
