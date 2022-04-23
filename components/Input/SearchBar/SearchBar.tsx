import { TextField, TextFieldProps } from '@mui/material'
import { Box } from '@mui/system'
import SearchIcon from '@mui/icons-material/Search'
import useStyles from './SearchBar.styles'

interface SearchBarProps {
    elements: React.ReactNode
}

const SearchBar = ({ elements, ...props }: SearchBarProps & TextFieldProps) => {
    const styles = useStyles()

    return (
        <Box width="70%" maxWidth={400} position="relative">
            <TextField fullWidth {...props} inputProps={{ className: styles.input }} variant="outlined" />
            <SearchIcon className={styles.searchIcon} />

            <Box>{elements}</Box>
        </Box>
    )
}

export default SearchBar
