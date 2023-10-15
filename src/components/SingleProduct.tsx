import { useEffect } from "react"
import { useTypedSelector } from "../hooks/useTypedSelector"
import { useActions } from "../hooks/useActions"
import * as ProductActionCreators from '../store/actions/productAction'
import { useParams } from 'react-router-dom'

function SingleProduct() {
    const params = useParams();
    const productId = Number(params.id);
    const {product} = useTypedSelector(state => state.product)
    const {fetchCurrentProduct, setModal, addProduct, fetchProducts} = useActions(ProductActionCreators)

    useEffect(() => {
        fetchCurrentProduct(productId)
        fetchProducts()
    }, [])
    
    function addToCart() {
        addProduct(productId)
        setModal()   
    }
    
    return (
        <div className="container">
            <h2>{product.title}</h2>
            <button data-id={product.id} className="button" onClick={addToCart}>
                Add to cart
            </button>
        </div>
    )
}

export default SingleProduct