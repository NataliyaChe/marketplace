import { useTypedSelector } from "../hooks/useTypedSelector"
import ProductInCart from "./ProductInCart"

function ShoppingCart() {
    const {shoppingCart, totalCost} = useTypedSelector(state => state.product)

    return (
            <div className="container cart-wrap">
                <h2 className="cart-title">Shopping cart:</h2>
                {shoppingCart.map(product => 
                    <ProductInCart product={product} key={product.id}/>
                )}
                <h3>Total: {totalCost}</h3>
                <button className="button">
                    Confirm
                </button>
            </div>
    )
}

export default ShoppingCart