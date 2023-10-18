import { useAppSelector } from "../hooks/useTypedSelector"

function Badge () {
    const {shoppingCart} = useAppSelector(state => state.product)
    
    return (
        <div className="badge">
            <span className="badge-text">{shoppingCart.length}</span>
        </div>
    )
}

export default Badge