import { useEffect } from "react"
import { useTypedSelector } from "../hooks/useTypedSelector"
import { useActions } from "../hooks/useActions"
import * as ProductActionCreators from '../store/actions/productAction'
import { useParams } from 'react-router-dom'

function SingleProduct() {
    const params = useParams();
    const productId = Number(params.id);
    const {fetchCurrentProduct} = useActions(ProductActionCreators)
    const {product, shoppingCart} = useTypedSelector(state => state.product)
    const {setModal} = useActions(ProductActionCreators)
    const {addProduct} = useActions(ProductActionCreators)

    useEffect(() => {
        console.log('shoppingCart',  productId);
        fetchCurrentProduct(productId)
    }, [])
    console.log('shoppingCart', shoppingCart, productId);
    
    function addToCart(event: React.MouseEvent<HTMLButtonElement>) {
        addProduct(productId)
        setModal() 
        console.log('shoppingCart add', shoppingCart);      
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