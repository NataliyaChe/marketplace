import { ISingleProduct } from "../types/product"
import { useAppDispatch } from "../hooks/useActions"
import { useAppSelector } from "../hooks/useTypedSelector"
import { useState, useEffect } from "react"
import Button from "./Button"
import { addProduct, changeQty, reduceQty, removeProduct } from "../store/features/productSlice"

interface IProductProps {
    product: ISingleProduct,
}

function ShoppingCartItem ({product}: IProductProps) {
    const {id, title, price, qty, qtyLimit} = product
    const [amount, setAmount] = useState(qty)
    const [warning, setWarning] = useState(false)
    const dispatch = useAppDispatch()
    
    useEffect(() => {
        if (qty >= qtyLimit) {
            setWarning(true) 
            setTimeout(() => setWarning(false), 5000)
        }
    }, [qty])

    function increaseAmount() {
        dispatch(addProduct(id))
        if(qty < qtyLimit) {
            setAmount(qty + 1)
        }
    }

    function reduceAmount() {
        if(qty > 1) {
            dispatch(reduceQty(id))  
            setAmount(qty - 1)
        } else {
            dispatch(removeProduct(id))  
        }
    }

    function changeAmount(event: React.BaseSyntheticEvent) {
        setAmount(0)
        const newQty = Number(event.target.value)
        dispatch(changeQty({id, newQty}))
        if(newQty <= qtyLimit && newQty > 0) {
            setAmount(newQty)
        } else if (newQty > qtyLimit) {
            // dispatch(changeQty({id, qtyLimit}))
            setAmount(qtyLimit)
        } 
    }

    function deleteProduct() {
        dispatch(removeProduct(id))  
    }

    return (
        <div  className="item-container">
            <h3>{title}</h3>
            <div className="flex-wrap">
                <div className="flex-wrap price-container">
                    <p className="text">Price: {price}</p>
                    <p className="text">x</p>
                    <div className="flex-wrap amount-container">
                        <Button onClick={reduceAmount} dataId={id}>
                            -
                        </Button>   
                        <input type="text" className="qty-input"  value={amount || undefined} data-id={id} onChange={changeAmount}/>
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