import { useAppDispatch } from "../hooks/useActions"
import { useAppSelector } from "../hooks/useTypedSelector"
import { setModal } from "../store/features/productSlice"
import ShoppingCartItem from "./ShoppingCartItem"

function ShoppingCartModal() {
    const dispatch = useAppDispatch()
    const {shoppingCart} = useAppSelector(state => state.product)

    function closeModal() {
        dispatch(setModal())
    }

    const totalCost = shoppingCart.reduce((sum, {qty, price}) => {
        const isDiscount = qty % 2 === 0 
        const discountPrice = price / 100 * 90
        return sum + ((isDiscount ? qty * discountPrice : qty * price))
    }, 0)
    
    return (
        <>
            <div className="backdrop" onClick={closeModal}/>
            <div className="modal">
                <div className="container cart-wrap">
                    <h2 className="cart-title">Shopping cart:</h2>
                    {shoppingCart.map(product => 
                        <ShoppingCartItem product={product} key={product.id}/>
                    )}
                    <h3>Total: {totalCost}</h3>
                    <button className="button">
                        Confirm
                    </button>
                </div>
            </div>
        </>
    )
}

export default ShoppingCartModal