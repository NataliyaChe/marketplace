import { ISingleProduct } from "../types/product"
import { useActions } from "../hooks/useActions"
import { useTypedSelector } from "../hooks/useTypedSelector"
import * as ProductActionCreators from '../store/actions/productAction'
import { useState } from "react"
import { changeProductQty} from "../store/actions/productAction"

interface IProductProps {
    product: ISingleProduct,
}

function ItemInCart ({product}: IProductProps) {
    let {id, title, price, qty, qtyLimit} = product
    const {shoppingCart, totalCost} = useTypedSelector(state => state.product)
    const {changeProductQty} = useActions(ProductActionCreators)
    const [amount, setAmount] = useState(`${qty}`)
    const [warning, setWarning] = useState(false)

    function deleteProduct(event: any) {
        const newProduct = {
            ...product,
            qty: 0,
        }
        setAmount(`${newProduct.qty}`)
        changeProductQty(newProduct, shoppingCart)    
    }

    function reduceAmount(event: any) {
        const newProduct = {
            ...product,
            qty: --qty,
        }
        setAmount(`${qty}`)
        changeProductQty(newProduct, shoppingCart)   
    }

    function increaseAmount(event: any) { 
        if(qty < qtyLimit) {
            const newProduct = {
                ...product,
                qty: ++qty,
            }  
            if(qty === qtyLimit) {
                setWarning(true) 
                setTimeout(() => setWarning(false), 5000);
            }
            setAmount(`${newProduct.qty}`)
            changeProductQty(newProduct, shoppingCart, totalCost)
        }
    }

    function changeAmount(event: any) {
        setAmount(event.target.value)
        const newProduct = {
            ...product,
            qty: event.target.value
        }
        changeProductQty(newProduct, shoppingCart, totalCost) 
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
                <button className="button" data-id={id} onClick={deleteProduct}>
                    Delete
                </button>
            </div>
        </div>
    )
}

export default ItemInCart