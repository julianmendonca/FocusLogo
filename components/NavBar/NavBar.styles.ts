import { createStyles, makeStyles } from '@mui/styles'
import { Theme } from '@mui/material/styles'

export const useNavBarStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            backgroundColor: theme.palette.primary.light,
            position: 'fixed',
            top: 0,
            left: 0,
            height: 80,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
        },
    })
)

export default useNavBarStyles
