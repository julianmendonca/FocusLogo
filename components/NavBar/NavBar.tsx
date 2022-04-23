import { Box } from '@mui/system'
import Image from 'next/image'
import SearchBar from '../Input/SearchBar/Searchbar'
import useStyles from './NavBar.styles'

const NavBar = () => {
    const styles = useStyles()

    return (
        <Box
            position="fixed"
            top={0}
            left={0}
            height={80}
            width="100%"
            display="flex"
            alignItems="center"
            justifyContent="space-around"
            className={styles.container}
        >
            <Image src="/images/logo.png" width="64" height="24" />
            <SearchBar elements={[]} placeholder="Buscá productos o categorías" />
        </Box>
    )
}

export default NavBar
