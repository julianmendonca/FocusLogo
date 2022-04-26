import { Box } from '@mui/system'
import Image from 'next/image'

import MenuButton from '../Button/MenuButton/MenuButton'
import SearchBar from '../Input/SearchBar/SearchBar'
import useStyles from './NavBar.styles'
import { useState } from 'react'
import SideBar from '../SideBar/SideBar'
import { Categoria } from '@/shared/Interfaces'

type NavBarProps = {
    categories: Categoria[]
}

const NavBar = ({ categories }: NavBarProps) => {
    const styles = useStyles()
    // const { data: categories } = useGetCategories()
    const [sidebarOpen, setSidebarOpen] = useState(true)
    const closeSidebar = () => setSidebarOpen(false)
    const openSidebar = () => setSidebarOpen(true)

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
                        categories?.map((category) => ({
                            label: category.description,
                            icon: category.icon_url,
                        })) || []
                    }
                />
            </Box>
            <SideBar open={sidebarOpen} onOpen={openSidebar} onClose={closeSidebar} categories={categories || []} />
        </Box>
    )
}

export default NavBar
