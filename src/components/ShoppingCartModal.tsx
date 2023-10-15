import { useActions } from "../hooks/useActions"
import * as ProductActionCreators from '../store/actions/productAction'
import { useTypedSelector } from "../hooks/useTypedSelector"
import ShoppingCartItem from "./ShoppingCartItem"

function ShoppingCartModal() {
    const {setModal} = useActions(ProductActionCreators)
    const {shoppingCart} = useTypedSelector(state => state.product)

    const totalCost = shoppingCart.reduce((sum, {qty, price}) => sum + ((qty % 2 === 0 ? qty * (price / 100 * 90) : qty * price)), 0)
    

    return (
        <>
            <div className="backdrop" onClick={setModal}/>
            <div className="modal">
                <div className="container cart-wrap">
                    <h2 className="cart-title">Shopping cart:</h2>
                    {shoppingCart.map(product => 
                        <ShoppingCartItem product={product} key={product.id}/>
                    )}
                    <h3>Total: {totalCost}</h3>
                    <button className="button">
                        Confirm
                    </button>
                </div>
            </div>
        </>
    )
}

export default ShoppingCartModal