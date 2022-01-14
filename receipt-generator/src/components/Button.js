
const Button = ({text,color}) => {
    return (
        <div>
            <button style={{backgroundColor:color}} className="btn">{text}</button>
        </div>
    )
}

export default Button
