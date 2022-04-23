import { Theme } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            backgroundColor: theme.palette.secondary.main,
            padding: 20,
        },
        text: {
            color: theme.palette.grey[600],
        },
    })
)

export default useStyles
