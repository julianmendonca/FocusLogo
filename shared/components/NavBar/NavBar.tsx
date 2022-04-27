import { Box } from '@mui/system'
import Image from 'next/image'

import MenuButton from '../Button/MenuButton/MenuButton'
import SearchBar from '../Input/SearchBar/SearchBar'
import useStyles from './NavBar.styles'
import { useState } from 'react'
import SideBar from '../SideBar/SideBar'
import { Categoria } from '@/shared/Interfaces'
import { Button } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
type NavBarProps = {
    categories: Categoria[]
}

const NavBar = ({ categories }: NavBarProps) => {
    const styles = useStyles()
    const [sidebarOpen, setSidebarOpen] = useState(false)
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
                    containerProps={{ className: styles.desktopMenu }}
                    label="Opciones"
                    options={
                        categories?.map((category) => ({
                            label: category.description,
                            icon: category.icon_url,
                        })) || []
                    }
                />
                <Button onClick={openSidebar} startIcon={<MenuIcon />} className={styles.mobileIcon}>
                    Menu
                </Button>
            </Box>
            <SideBar open={sidebarOpen} onOpen={openSidebar} onClose={closeSidebar} categories={categories || []} />
        </Box>
    )
}

export default NavBar
