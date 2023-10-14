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
    const {id, title, price, qty, qtyLimit} = product
    const {increaseQty} = useActions(ProductActionCreators)
    const {addProduct} = useActions(ProductActionCreators)

    useEffect(() => {
        fetchCurrentProduct(productId)
    }, [])
    
    function addToCart(event: React.MouseEvent<HTMLButtonElement>) {
        shoppingCart.map(product => {
            if(product.id !== id) {
                increaseQty(id)
            }
            console.log('add product');
            addProduct(product)
            
        })
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