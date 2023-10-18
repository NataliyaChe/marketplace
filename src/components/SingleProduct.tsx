import { useEffect } from "react"
import { useAppDispatch } from "../hooks/useActions"
import { useAppSelector } from "../hooks/useTypedSelector"
import { useParams } from 'react-router-dom'
import Button from "./Button"
import { fetchProducts, fetchCurrentProduct } from "../store/features/productSlice"

function SingleProduct() {
    const dispatch = useAppDispatch()
    const params = useParams();
    const productId = Number(params.id);
    const {product} = useAppSelector(state => state.product)
    
    useEffect(() => {
        dispatch(fetchCurrentProduct(productId))
        dispatch(fetchProducts())
    }, [])
    
    function addToCart() {
        // addProduct(productId)
        // setModal()   
    }
    
    return (
        <div className="container">
            <h2>{product.title}</h2>
            <Button onClick={addToCart} dataId={product.id}>
                Add to cart
            </Button> 
        </div>
    )
}

export default SingleProduct