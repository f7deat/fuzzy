type ButtonProps = {
    onClick?: any
}
const Button: React.FC<ButtonProps> = (props) => {
    return (
        <button className="btn btn-primary" onClick={props.onClick}>{props.children}</button>
    )
}
export default Button