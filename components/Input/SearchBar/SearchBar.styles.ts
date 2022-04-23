import { createStyles, makeStyles } from '@mui/styles'
import { Theme } from '@mui/material/styles'

export const useSearchBarStyles = makeStyles((theme: Theme) =>
    createStyles({
        input: {
            backgroundColor: theme.palette.common.white,
            borderRadius: '5px',
            padding: '10px 20px 10px 40px',
        },
        searchIcon: {
            position: 'absolute',
            left: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
        },
    })
)

export default useSearchBarStyles
