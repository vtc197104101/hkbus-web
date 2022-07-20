import Button from '@mui/material/Button'

const StyledButton = (props) => {
    return (
        <Button {...props}>{props.children}</Button>
    )
}

export default StyledButton
