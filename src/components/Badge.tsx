import { useTypedSelector } from "../hooks/useTypedSelector"

function Badge () {
    const {shoppingCart} = useTypedSelector(state => state.item)
    
    return (
        <div className="badge">
            <span className="badge-text">{shoppingCart.length}</span>
        </div>
    )
}

export default Badge