import { ISingleProduct } from "../types/product"
import { useActions } from "../hooks/useActions"
import * as ProductActionCreators from '../store/actions/productAction'
import { useState, useEffect } from "react"
import Button from "./Button"

interface IProductProps {
    product: ISingleProduct,
}

function ShoppingCartItem ({product}: IProductProps) {
    const {id, title, price, qty, qtyLimit} = product
    const {addProduct, changeQty, reduceQty, removeProduct} = useActions(ProductActionCreators)
    const [amount, setAmount] = useState(qty)
    const [warning, setWarning] = useState(false)

    function deleteProduct() {
        removeProduct(id)   
    }

    useEffect(() => {
        if (qty >= qtyLimit) {
            setWarning(true) 
            setTimeout(() => setWarning(false), 5000)
        }
    }, [qty])

    function increaseAmount() { 
        addProduct(id)
        if(qty < qtyLimit) {
            setAmount(qty + 1)
        }
    }

    function reduceAmount() {
        if(qty > 1) {
            reduceQty(id)
            setAmount(qty - 1)
        } else {
            removeProduct(id)  
        }
    }

    function changeAmount(event: React.BaseSyntheticEvent) {
        setAmount(0)
        const newQty = Number(event.target.value)
        if(newQty <= qtyLimit && newQty > 0) {
            changeQty(id, newQty)
            setAmount(newQty)
        } else if (newQty > qtyLimit) {
            changeQty(id, qtyLimit)
            setAmount(qtyLimit)
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
                        <Button onClick={reduceAmount} dataId={id}>
                            -
                        </Button>   
                        <input 
                            type="text" 
                            className="qty-input"  
                            value={amount || undefined} 
                            data-id={id} 
                            onChange={changeAmount}/>
                        <Button onClick={increaseAmount} dataId={id}>
                            +
                        </Button>  
                        
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
                <Button onClick={deleteProduct} dataId={id}>
                    Delete
                </Button> 
            </div>
        </div>
    )
}

export default ShoppingCartItem