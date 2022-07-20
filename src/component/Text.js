import Text from '@mui/material/TextField'

const StyledText = (props) => {
    return (
        <Text {...props}>{props.children}</Text>
    )
}

export default StyledText