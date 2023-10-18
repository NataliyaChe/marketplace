import { useEffect } from "react"
import { useAppDispatch } from "../hooks/useActions"
import { useAppSelector } from "../hooks/useTypedSelector"
import { useParams } from 'react-router-dom'
import Button from "./Button"
import { addProduct, fetchCurrentProduct, setModal } from "../store/features/productSlice"

function SingleProduct() {
    const dispatch = useAppDispatch()
    const params = useParams();
    const productId = Number(params.id);
    const {product} = useAppSelector(state => state.product)
    
    useEffect(() => {
        dispatch(fetchCurrentProduct(productId))
    }, [])
    
    function addToCart() {
        dispatch(addProduct(productId))
        dispatch(setModal()) 
        console.log('addToCart', product);      
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