import { useEffect } from "react"
import { useAppDispatch } from "../hooks/useActions"
import { useAppSelector } from "../hooks/useTypedSelector"
import { useParams } from 'react-router-dom'
import Button from "./Button"
import { addProduct, fetchCurrentProduct, setModal, fetchProducts } from "../store/features/productSlice"

function SingleProduct() {
    const dispatch = useAppDispatch()
    const params = useParams();
    const productId = Number(params.id);
    const {product, currentPage} = useAppSelector(state => state.product)
    
    useEffect(() => {
        dispatch(fetchCurrentProduct(productId))
        dispatch(fetchProducts(currentPage))
    }, [])
    
    function addToCart() {
        dispatch(addProduct(productId))
        dispatch(setModal())     
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