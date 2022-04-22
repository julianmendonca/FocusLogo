import { Typography, TypographyProps } from '@mui/material';

const Title = ({ children, ...props }: TypographyProps) => {
    return (
        <Typography variant="h2" {...props}>
            {children}
        </Typography>
    );
};

export default Title;
