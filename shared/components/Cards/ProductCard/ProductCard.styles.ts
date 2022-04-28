import { createStyles, makeStyles } from '@mui/styles'

export const useProductCardStyles = makeStyles(() =>
    createStyles({
        multiLineEllipsis: {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            '-webkit-line-clamp': 2,
            '-webkit-box-orient': 'vertical',
        },
    })
)

export default useProductCardStyles
