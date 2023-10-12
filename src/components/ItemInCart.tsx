import { ISingleItem } from "../types/item"
import { useActions } from "../hooks/useActions"
import { useTypedSelector } from "../hooks/useTypedSelector"
import * as ItemActionCreators from '../store/actions/itemAction'
import { useEffect, useState } from "react"
import { deleteFromCart, addToCart, deleteOneItemQty, changeQty } from "../store/actions/itemAction"

interface IProductProps {
    product: ISingleItem,
}

const ItemInCart: React.FC<IProductProps> = (props: IProductProps) => {
    const {id, title, price, qty, qtyLimit} = props.product
    const {shoppingCart, loading, error, totalCost} = useTypedSelector(state => state.item)
    const {deleteFromCart} = useActions(ItemActionCreators)
    const {addToCart} = useActions(ItemActionCreators)
    const {deleteOneItemQty} = useActions(ItemActionCreators)
    const {changeQty} = useActions(ItemActionCreators)
    const [amount, setAmount] = useState('')

    console.log('product', id);
    

    function deleteItem(event: any) {
        const itemId = Number(event.target.dataset.id)
        deleteFromCart(itemId, shoppingCart)    
    }

    function reduceAmount(event: any) {
        const itemId = Number(event.target.dataset.id)
        deleteOneItemQty(itemId, shoppingCart)   
    }

    function increaseAmount(event: any) {
        const itemId = Number(event.target.dataset.id)
        const item = shoppingCart.find(item => item.id === Number(itemId)) 
        addToCart(item, shoppingCart, totalCost)
    }

    function changeAmount(event: any) {
        console.log('target value', event.target.value);
        const itemId = Number(event.target.dataset.id)
        setAmount(event.target.value)
        // const inputValue = Number(event.target.value)
        // changeQty(inputValue, itemId, shoppingCart, totalCost)   
    }

    return (
        <div key={id} className="item-container">
            <h3>{title}</h3>
            <div className="flex-wrap">
                <div className="flex-wrap price-container">
                    <p className="text">Price: {price}</p>
                    <p className="text">x</p>
                    <div className="flex-wrap amount-container">
                        <button className="button" data-id={id}
                            onClick={reduceAmount}>
                                -
                        </button>
                    
                        <input type="text" className="qty-input"  value={amount} data-id={id} onChange={changeAmount}/>
                        <button className="button"  data-id={id} onClick={increaseAmount}>+</button>
                        
                    </div>
                    <div className="flex-wrap info-container">
                        {qty % 2 === 0 &&
                            <p className={`info`}>
                                Discount 10%
                            </p>
                        }
                        {qty === qtyLimit &&
                            <p className={`warning`}>
                                Quantity limit
                            </p>
                        }
                    </div>
                </div>
                <button className="button" data-id={id} onClick={deleteItem}>
                    Delete
                </button>
            </div>
        </div>
    )
}

export default ItemInCart