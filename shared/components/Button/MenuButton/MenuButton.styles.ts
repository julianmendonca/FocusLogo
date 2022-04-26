import { Theme } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'

export const useMenuButtonStyles = makeStyles((theme: Theme) =>
    createStyles({
        menu: {
            '& .MuiPaper-root': {
                borderRadius: 6,
                marginTop: theme.spacing(1),
                maxWidth: '800px',
                color: theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
                boxShadow:
                    'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
                '& .MuiMenu-list': {
                    padding: '4px 0',
                },
                '& .MuiMenuItem-root': {
                    height: 40,
                    '& .MuiSvgIcon-root': {
                        fontSize: 18,
                        color: theme.palette.text.secondary,
                        marginRight: theme.spacing(1.5),
                    },
                    '&:active': {
                        backgroundColor: 'alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity)',
                    },
                },
            },
        },
        icon: {
            objectFit: 'contain',
        },
    })
)

export default useMenuButtonStyles
