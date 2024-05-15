
const Button = ({ label, type }) => {
    return (
        <button className={`btn ${type === "secondary" ? 'btn--secondary' : ''}`}>{label}</button>
    )
}

export default Button