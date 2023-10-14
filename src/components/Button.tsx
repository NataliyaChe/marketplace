export interface IButtonProps {
    title: string,
}

function Button({title}: IButtonProps) {
    <button className="button cart-button">{title}</button>
}

export default Button