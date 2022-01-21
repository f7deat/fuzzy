type LabelProps = {
    className?: any
}
const Label: React.FC<LabelProps> = (props) => {
    return (
        <label className="control-label">{props.children}</label>
    )
}
export default Label