import { ISingleProduct } from "../types/product"
import { useActions } from "../hooks/useActions"
import { useTypedSelector } from "../hooks/useTypedSelector"
import * as ProductActionCreators from '../store/actions/productAction'
import { useState } from "react"

interface IProductProps {
    product: ISingleProduct,
}

function ShoppingCartItem ({product}: IProductProps) {
    let {id, title, price, qty, qtyLimit} = product
    const {shoppingCart} = useTypedSelector(state => state.product)
    const {updateShoppingCart} = useActions(ProductActionCreators)
    const [amount, setAmount] = useState(`${qty}`)
    const [warning, setWarning] = useState(false)

    function deleteProduct(event: React.MouseEvent<HTMLButtonElement>) {
        const newProduct = {
            ...product,
            qty: 0,
        }
        setAmount(`${newProduct.qty}`)
        updateShoppingCart(newProduct, shoppingCart)    
    }

    function reduceAmount(event: React.MouseEvent<HTMLButtonElement>) {
        const newProduct = {
            ...product,
            qty: --qty,
        }
        setAmount(`${qty}`)
        updateShoppingCart(newProduct, shoppingCart)   
    }

    function increaseAmount(event: React.MouseEvent<HTMLButtonElement>) { 
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
            updateShoppingCart(newProduct, shoppingCart)
        }
    }

    function changeAmount(event: React.BaseSyntheticEvent) {
        const newQty = Number(event.target.value)
        setAmount(event.target.value)
        if(newQty < qtyLimit && newQty > 0) {
            const newProduct = {
                ...product,
                qty: newQty
            } 
            updateShoppingCart(newProduct, shoppingCart) 
        } else if (newQty === qtyLimit) {
            setAmount(`${newQty}`)
            setWarning(true) 
            setTimeout(() => setWarning(false), 5000);
        } else if(newQty > qtyLimit) {
            setAmount(`${qty}`)
            setWarning(true) 
            setTimeout(() => setWarning(false), 5000);
        }
        
    }
    
    // function changeAmount(event: React.BaseSyntheticEvent) {
    //     const newQty = Number(event.target.value)
    //     if(newQty < qtyLimit) {
    //         setAmount(`${newQty}`)
    //         const newProduct = {
    //             ...product,
    //             qty: newQty
    //         }
    //         updateShoppingCart(newProduct, shoppingCart) 
    //     } else {
    //         setAmount(`${qty}`)
    //         setWarning(true) 
    //         setTimeout(() => setWarning(false), 5000);
    //     }
        
    // }

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