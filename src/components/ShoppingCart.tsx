import { useActions } from "../hooks/useActions"
import { useTypedSelector } from "../hooks/useTypedSelector"
import * as ItemActionCreators from '../store/actions/itemAction'
import { useEffect } from "react"
import { deleteFromCart } from "../store/actions/itemAction"

function ShoppingCart() {
    const {shoppingCart, loading, error} = useTypedSelector(state => state.item)
    const {deleteFromCart} = useActions(ItemActionCreators)

    const submitOrder = (event: any) => {
        console.log('confirm click');    
    }

    function deleteItem(event: any) {
        const itemId = Number(event.target.dataset.id)
        deleteFromCart(itemId, shoppingCart)    
    }

    function reduceAmount(event: any) {
        const itemId = Number(event.target.dataset.id)
       
    }

        const increaseAmount = () => {
            console.log('plus');
    }

    return (
            <div className="container cart-wrap">
                <h2 className="cart-title">Shopping cart:</h2>
                {shoppingCart.map(item => 
                    <div key={item.id} className="item-container">
                        <h3>{item.title}</h3>
                        <p>Price: {item.price}</p>
                        <div className="flex-wrap">
                            <div className="flex-wrap">
                                <button className="button" 
                                    onClick={reduceAmount}>
                                        -
                                </button>
                                <span className="qty-input">{item.qty}</span>
                                <button className="button" onClick={increaseAmount}>+</button>
                                <span className={`warning`}>
                                    Quantity limit
                                </span>
                            </div>
                            <button className="button" data-id={item.id} onClick={deleteItem}>Delete</button>
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