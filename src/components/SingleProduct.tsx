import { useEffect } from "react"
import { useAppDispatch } from "../hooks/useActions"
import { useAppSelector } from "../hooks/useTypedSelector"
import { useParams } from 'react-router-dom'
import Button from "./Button"

function SingleProduct() {
    const params = useParams();
    const productId = Number(params.id);
    // const {product} = useTypedSelector(state => state.product)
    // const {fetchCurrentProduct, setModal, addProduct, fetchProducts} = useActions(ProductActionCreators)

    // useEffect(() => {
    //     fetchCurrentProduct(productId)
    //     fetchProducts()
    // }, [])
    
    // function addToCart() {
    //     addProduct(productId)
    //     setModal()   
    // }
    
    return (
        <div className="container">
            <h2>{productId}</h2>
            {/* <Button onClick={addToCart} dataId={product.id}>
                Add to cart
            </Button>  */}
        </div>
    )
}

export default SingleProduct