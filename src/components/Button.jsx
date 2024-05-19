
const Button = ({ label, buttonType, onClick }) => {
    return (
        <button onClick={onClick} className={`btn ${buttonType === "secondary" ? 'btn--secondary' : ''}`}>{label}</button>
    )
}

export default Button