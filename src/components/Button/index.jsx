import "./index.css"

function Button({start}) {
    return (
    <button onClick={start} className="start__btn">Start</button>
    )
}

export default Button;