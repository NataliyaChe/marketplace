import { useActions } from "../hooks/useActions"
import { useTypedSelector } from "../hooks/useTypedSelector"
import * as ItemActionCreators from '../store/actions/itemAction'
import { fetchShoppingCart } from '../store/actions/itemAction'
import { useEffect } from "react"

function ShoppingCart() {
    const {shoppingCart, loading, error,} = useTypedSelector(state => state.item)
    const {fetchShoppingCart} = useActions(ItemActionCreators)

    const submitOrder = (event: any) => {
        console.log('confirm click');
        
    }
    console.log('cart', shoppingCart);
    
    useEffect(() => {fetchShoppingCart()}, [])
    console.log('shop', shoppingCart);
    

    return (
            <div className="container">
                <h2 className="cart-title">Shopping cart:</h2>
                {shoppingCart.map(item => 
                    <div key={item.id}>
                        <h3>{item.title}</h3>
                    </div>)}
                <button className="button" onClick={submitOrder}>
                    Confirm
                </button>
            </div>
    )
}

export default ShoppingCart