import { Box, BoxProps, TextField, TextFieldProps } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import useStyles from './SearchBar.styles'

interface SearchBarProps {
    elements: React.ReactNode
    containerProps?: BoxProps
}

const SearchBar = ({ elements, containerProps, ...props }: SearchBarProps & TextFieldProps) => {
    const styles = useStyles()

    return (
        <Box width="70%" maxWidth={400} position="relative" {...containerProps}>
            <TextField fullWidth {...props} inputProps={{ className: styles.input }} variant="outlined" />
            <SearchIcon className={styles.searchIcon} />

            <Box>{elements}</Box>
        </Box>
    )
}

export default SearchBar
