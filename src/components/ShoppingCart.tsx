import { useActions } from "../hooks/useActions"
import { useTypedSelector } from "../hooks/useTypedSelector"
import * as ItemActionCreators from '../store/actions/itemAction'
import { useEffect } from "react"
import { deleteFromCart, addToCart, deleteOneItemQty } from "../store/actions/itemAction"

function ShoppingCart() {
    const {shoppingCart, loading, error, totalCost} = useTypedSelector(state => state.item)
    const {deleteFromCart} = useActions(ItemActionCreators)
    const {addToCart} = useActions(ItemActionCreators)
    const {deleteOneItemQty} = useActions(ItemActionCreators)

    const submitOrder = (event: any) => {
        console.log('confirm click');    
    }

    function deleteItem(event: any) {
        const itemId = Number(event.target.dataset.id)
        deleteFromCart(itemId, shoppingCart)    
    }

    function reduceAmount(event: any) {
        const itemId = Number(event.target.dataset.id)
        // const item = shoppingCart.find(item => item.id === Number(itemId)) 
        deleteOneItemQty(itemId, shoppingCart)   
    }

    function increaseAmount(event: any) {
        const itemId = Number(event.target.dataset.id)
        const item = shoppingCart.find(item => item.id === Number(itemId)) 
        addToCart(item, shoppingCart, totalCost)
    }

    return (
            <div className="container cart-wrap">
                <h2 className="cart-title">Shopping cart:</h2>
                {shoppingCart.map(item => 
                    <div key={item.id} className="item-container">
                        <h3>{item.title}</h3>
                        <div className="flex-wrap">
                            <div className="flex-wrap price-container">
                                <p className="text">Price: {item.price}</p>
                                <p className="text">x</p>
                                <div className="flex-wrap">
                                    <button className="button" data-id={item.id}
                                        onClick={reduceAmount}>
                                            -
                                    </button>
                                    <span className="qty-input">{item.qty}</span>
                                    <button className="button"  data-id={item.id} onClick={increaseAmount}>+</button>
                                    <span className={`warning`}>
                                        Quantity limit
                                    </span>
                                </div>
                            </div>
                            <button className="button" data-id={item.id} onClick={deleteItem}>Delete</button>
                        </div>
                    </div>)
                }
                <h3>Total: {totalCost}</h3>
                <button className="button" onClick={submitOrder}>
                    Confirm
                </button>
            </div>
    )
}

export default ShoppingCart