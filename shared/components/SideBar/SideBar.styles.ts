import { createStyles, makeStyles } from '@mui/styles'

export const useSideBarStyles = makeStyles(() =>
    createStyles({
        listIcon: {
            marginRight: '0.5rem',
        },
        categories: {
            paddingRight: '100px',
        },
    })
)

export default useSideBarStyles
