import Box from '@mui/material/Box'

const StyledBox = (props) => {
    return (
        <Box {...props}>{props.children}</Box>
    )
}

export default StyledBox
