import * as React from 'react'
import Button from '@mui/material/Button'
import Menu, { MenuProps } from '@mui/material/Menu'
import MenuItem, { MenuItemProps } from '@mui/material/MenuItem'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import useStyles from './MenuButton.styles'
import clsx from 'clsx'
import { Avatar, Box, BoxProps, Grid } from '@mui/material'

interface MenuButtonProps {
    label: string
    options: ({
        icon?: string
        label?: string
    } & MenuItemProps)[]
    containerProps?: BoxProps
}

const MenuButton = ({ label, options, containerProps, ...props }: MenuButtonProps & Omit<MenuProps, 'open'>) => {
    const styles = useStyles()
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <Box {...containerProps}>
            <Button
                id="demo-customized-button"
                aria-controls={open ? 'demo-customized-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                variant="text"
                disableElevation
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon />}
                color="inherit"
            >
                {label}
            </Button>
            <Menu
                id="demo-customized-menu"
                elevation={0}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                MenuListProps={{
                    'aria-labelledby': 'demo-customized-button',
                }}
                anchorEl={anchorEl}
                onClose={handleClose}
                {...props}
                className={clsx(styles.menu, props.className)}
                open={open}
            >
                <Grid container spacing={1}>
                    {options.map(({ icon, label, onClick, ...itemProps }) => (
                        <Grid item key={label} lg={4}>
                            <MenuItem
                                {...itemProps}
                                onClick={(e) => {
                                    handleClose()
                                    onClick?.(e)
                                }}
                            >
                                {icon && (
                                    <Avatar
                                        variant="square"
                                        alt={label}
                                        src={icon}
                                        sx={{ width: 25, height: 25, marginRight: 1 }}
                                        imgProps={{ className: styles.icon }}
                                    />
                                )}
                                {label}
                            </MenuItem>
                        </Grid>
                    ))}
                </Grid>
            </Menu>
        </Box>
    )
}

export default MenuButton
