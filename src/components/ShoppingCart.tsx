import { useTypedSelector } from "../hooks/useTypedSelector"
import ItemInCart from "./ItemInCart"

function ShoppingCart() {
    const {shoppingCart, loading, error, totalCost} = useTypedSelector(state => state.item)

    const submitOrder = (event: any) => {
        console.log('confirm click');    
    }

    return (
            <div className="container cart-wrap">
                <h2 className="cart-title">Shopping cart:</h2>
                {shoppingCart.map(item => 
                    <ItemInCart product={item} />
                )}
                <h3>Total: {totalCost}</h3>
                <button className="button" onClick={submitOrder}>
                    Confirm
                </button>
            </div>
    )
}

export default ShoppingCart