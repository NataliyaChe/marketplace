import { useEffect } from "react"
import { useTypedSelector } from "../hooks/useTypedSelector"
import { useActions } from "../hooks/useActions"
import * as ProductActionCreators from '../store/actions/productAction'
import { useParams } from 'react-router-dom'

function SingleProduct() {
    const params = useParams();
    const productId = Number(params.id);
    const {fetchCurrentProduct} = useActions(ProductActionCreators)
    const {product, shoppingCart, products} = useTypedSelector(state => state.product)
    const {setModal} = useActions(ProductActionCreators)
    const {addProduct} = useActions(ProductActionCreators)
    const {fetchProducts} = useActions(ProductActionCreators)

    useEffect(() => {
        fetchCurrentProduct(productId)
        fetchProducts()
    }, [])
    
    function addToCart(event: React.MouseEvent<HTMLButtonElement>) {
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