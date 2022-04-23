import { Box } from '@mui/system'
import { Typography } from '@mui/material'
import useStyles from './Footer.styles'

const Footer = () => {
    const styles = useStyles()

    return (
        <Box className={styles.container} width="100%" display="flex" alignItems="center" justifyContent="space-around">
            <Box>
                <Typography className={styles.text}>
                    <b>Dirección:</b> Patagones Nº 2435 CABA
                </Typography>
                <Typography className={styles.text}>
                    <b>Teléfono:</b> (5411) 4308-2881/3001
                </Typography>
                <Typography className={styles.text}>
                    <b>Email:</b> info@focuslogo.com.ar
                </Typography>
            </Box>
            <Box>
                <Typography className={styles.text}>Copyright © 2022 Focus Logo</Typography>
            </Box>
        </Box>
    )
}

export default Footer
