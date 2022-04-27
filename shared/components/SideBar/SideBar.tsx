import {
    Avatar,
    Box,
    Collapse,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    SwipeableDrawer,
    SwipeableDrawerProps,
} from '@mui/material'
import { Categoria } from '@/shared/Interfaces'
import ListIcon from '@mui/icons-material/List'
import useStyles from './SideBar.styles'
import HomeIcon from '@mui/icons-material/Home'
import { ExpandLess, ExpandMore } from '@mui/icons-material'
import { useState } from 'react'

interface SideBarProps {
    categories: Categoria[]
}
const SideBar = ({ categories, ...props }: SideBarProps & SwipeableDrawerProps) => {
    const styles = useStyles()
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const handleSidebar = () => setSidebarOpen((open) => !open)

    return (
        <SwipeableDrawer {...props}>
            <Box>
                <List>
                    <ListItemButton>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Inicio" />
                    </ListItemButton>
                    <ListItemButton onClick={handleSidebar}>
                        <ListItemIcon>
                            <ListIcon />
                        </ListItemIcon>
                        <ListItemText primary="Categorias" className={styles.categories} />
                        {sidebarOpen ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>

                    <Collapse in={sidebarOpen} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            {categories?.map((category) => (
                                <ListItemButton key={category.id}>
                                    <ListItemIcon>
                                        <Avatar
                                            variant="square"
                                            alt={category.description}
                                            src={category.icon_url}
                                            sx={{ width: 25, height: 25, marginRight: 1 }}
                                            imgProps={{ style: { objectFit: 'contain' } }}
                                        />
                                    </ListItemIcon>
                                    <ListItemText primary={category.description} />
                                </ListItemButton>
                            ))}
                        </List>
                    </Collapse>
                </List>
            </Box>
        </SwipeableDrawer>
    )
}

export default SideBar
