import styles from "./Button.module.css"

const Button = ({ onClickHandler }) => {
    return (
        <button onClick={onClickHandler} type="button" class="btn btn-secondary">Add to wallet</button>
    )
}
export default Button