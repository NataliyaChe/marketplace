import { useEffect } from "react"
import { useTypedSelector } from "../hooks/useTypedSelector"
import { useActions } from "../hooks/useActions"
import * as ProductActionCreators from '../store/actions/productAction'
import { useParams } from 'react-router-dom'

const SingleProduct = () => {
    const params = useParams();
    const productId = Number(params.id);
    const {getCurrentProduct} = useActions(ProductActionCreators)
    const {product, shoppingCart} = useTypedSelector(state => state.product)
    const {changeProductQty} = useActions(ProductActionCreators)
    const {setModal} = useActions(ProductActionCreators)

    useEffect(() => {
        getCurrentProduct(productId)
    }, [])
    
    function addProduct(event: React.MouseEvent<HTMLButtonElement>) {
        let currentProduct = shoppingCart.find(currentProduct => currentProduct.id === product.id)
        if(currentProduct) {
            product.qty = ++currentProduct.qty 
        }
        changeProductQty(product, shoppingCart)
        setModal()       
    }

    return (
        <div className="container">
            <h2>{product.title}</h2>
            <button data-id={product.id} className="button" onClick={addProduct}>
                Add to cart
            </button>
        </div>
    )
}

export default SingleProduct