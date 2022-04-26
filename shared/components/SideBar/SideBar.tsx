import {
    Accordion,
    AccordionSummary,
    Avatar,
    Box,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    SwipeableDrawer,
    SwipeableDrawerProps,
} from '@mui/material'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Categoria } from '@/shared/Interfaces'
import ListIcon from '@mui/icons-material/List'
import useStyles from './SideBar.styles'

interface SideBarProps {
    categories: Categoria[]
}
const SideBar = ({ categories, ...props }: SideBarProps & SwipeableDrawerProps) => {
    const styles = useStyles()

    return (
        <SwipeableDrawer {...props}>
            <Box>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <ListIcon className={styles.listIcon} />
                        <Typography>Categorias </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <List>
                            {categories?.map((category) => (
                                <ListItem button key={category.id}>
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
                                </ListItem>
                            ))}
                        </List>
                    </AccordionDetails>
                </Accordion>
            </Box>
        </SwipeableDrawer>
    )
}

export default SideBar
