type InputProps = {
    onChange?: any
}
const Input: React.FC<InputProps> = (props) => {
    return (
        <input className="form-control" onChange={props.onChange} />
    )
}
export default Input