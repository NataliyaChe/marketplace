import { ISingleItem } from "../types/item"
import { useActions } from "../hooks/useActions"
import { useTypedSelector } from "../hooks/useTypedSelector"
import * as ItemActionCreators from '../store/actions/itemAction'
import { useState } from "react"
import { deleteFromCart, addToCart} from "../store/actions/itemAction"

interface IProductProps {
    product: ISingleItem,
}

const ItemInCart: React.FC<IProductProps> = (props: IProductProps) => {
    let {id, title, price, qty, qtyLimit} = props.product
    const {shoppingCart, totalCost} = useTypedSelector(state => state.item)
    const {deleteFromCart} = useActions(ItemActionCreators)
    const {addToCart} = useActions(ItemActionCreators)
    const [amount, setAmount] = useState(`${qty}`)
    const [warning, setWarning] = useState(false)

    function deleteItem(event: any) {
        const product = {
            id, title, price, qtyLimit,
            qty: 0,
        }
        setAmount(`${product.qty}`)
        console.log('delete', product.qty);
        deleteFromCart(product, shoppingCart)    
    }

    function reduceAmount(event: any) {
        const product = {
            id, title, price, qtyLimit,
            qty: --qty,
        }
        setAmount(`${product.qty}`)
        console.log('reduce', product.qty);
        deleteFromCart(product, shoppingCart)   
    }

    function increaseAmount(event: any) { 
        if(qty < qtyLimit) {
            const product = {
                id, title, price, qtyLimit,
                qty: ++qty,
            }  
            if(qty === qtyLimit) {
                setWarning(true) 
                setTimeout(() => setWarning(false), 5000);
            }
            setAmount(`${product.qty}`)
            console.log('increase', product.qty);
            addToCart(product, shoppingCart, totalCost)
        }
    }

    function changeAmount(event: any) {
        setAmount(event.target.value)
        const product = {
            id, title, price, qtyLimit,
            qty: event.target.value
        }
        console.log('change', product.qty);
        addToCart(product, shoppingCart, totalCost) 
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
                        {warning &&
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