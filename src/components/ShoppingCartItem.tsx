import { ISingleProduct } from "../types/product"
import { useActions } from "../hooks/useActions"
import * as ProductActionCreators from '../store/actions/productAction'
import { useState } from "react"

interface IProductProps {
    product: ISingleProduct,
}

function ShoppingCartItem ({product}: IProductProps) {
    let {id, title, price, qty, qtyLimit} = product
    const {addProduct, changeQty, reduceQty, removeProduct} = useActions(ProductActionCreators)
    const [amount, setAmount] = useState(`${qty}`)
    const [warning, setWarning] = useState(false)

    function deleteProduct() {
        removeProduct(id)   
    }

    function increaseAmount() { 
        addProduct(id)
        if(qty < qtyLimit) {
            setAmount(`${++qty}`)
        }
        if(qty === qtyLimit) {
            setWarning(true) 
            setTimeout(() => setWarning(false), 5000);
        }
    }

    function reduceAmount() {
        if(qty > 1) {
            reduceQty(id)
            setAmount(`${--qty}`)
        } else {
            removeProduct(id)  
        }
    }

    function changeAmount(event: React.BaseSyntheticEvent) {
        setAmount('')
        const newQty = Number(event.target.value)
        if(newQty <= qtyLimit && newQty > 0) {
            changeQty(id, newQty)
            setAmount(`${newQty}`)
            if(newQty === qtyLimit) {
                setWarning(true) 
                setTimeout(() => setWarning(false), 5000);
            }
        } else if (newQty > qtyLimit) {
            changeQty(id, qtyLimit)
            setAmount(`${qtyLimit}`)
            setWarning(true) 
            setTimeout(() => setWarning(false), 5000);
        } 
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

export default ShoppingCartItem