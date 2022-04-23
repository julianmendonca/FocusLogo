import { createStyles, makeStyles } from '@mui/styles'
import { Theme } from '@mui/material/styles'

export const useNavBarStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
        },
        top: {
            backgroundColor: theme.palette.primary.light,
            padding: '20px 0 20px 0',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            paddingLeft: '10vw',
            [theme.breakpoints.down('sm')]: {
                paddingLeft: '5vw',
            },
        },
        bottom: {
            backgroundColor: theme.palette.secondary.main,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            paddingLeft: '10vw',
            [theme.breakpoints.down('sm')]: {
                paddingLeft: '5vw',
            },
        },
        searchBar: {
            marginLeft: '3vw',
        },
    })
)

export default useNavBarStyles