import { useActions } from "../hooks/useActions"
import { useTypedSelector } from "../hooks/useTypedSelector"
import * as ItemActionCreators from '../store/actions/itemAction'
import { fetchShoppingCart } from '../store/actions/itemAction'
import { useEffect } from "react"

function ShoppingCart() {
    const {shoppingCart, loading, error} = useTypedSelector(state => state.item)
    const {fetchShoppingCart} = useActions(ItemActionCreators)

    const submitOrder = (event: any) => {
        console.log('confirm click');    
    }
    console.log('shoppingCart', shoppingCart);
    
    
    useEffect(() => {
        fetchShoppingCart()
    }, [])
    

    return (
            <div className="container cart-wrap">
                <h2 className="cart-title">Shopping cart:</h2>
                {shoppingCart.map(item => 
                    <div key={item.id} className="item-container">
                        <h3>{item.title}</h3>
                        <p>Price: {item.price}</p>
                        <div className="flex-wrap">
                            <div className="flex-wrap">
                                <button className="button">+</button>
                                <span className="qty-input">1</span>
                                <button className="button">-</button>
                            </div>
                            <button className="button">Delete</button>
                        </div>
                    </div>)
                }
                <h3>Total:</h3>
                <button className="button" onClick={submitOrder}>
                    Confirm
                </button>
            </div>
    )
}

export default ShoppingCart