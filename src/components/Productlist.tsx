import { useEffect } from "react"
import { useActions } from "../hooks/useActions"
import { useTypedSelector } from "../hooks/useTypedSelector"
import * as ProductActionCreators from '../store/actions/productAction'
import { useNavigate } from 'react-router-dom'

const Productlist: React.FC = () => {
    const {products, loading, error, currentPage, firstProduct, lastProduct,  shoppingCart} = useTypedSelector(state => state.product)
    const {fetchProducts} = useActions(ProductActionCreators)
    let navigate = useNavigate()
    const {setModal} = useActions(ProductActionCreators)
    const {changeProductQty} = useActions(ProductActionCreators)

    useEffect(() => {
        fetchProducts(currentPage)
    }, [currentPage])

    const paginatedProducts = (products.slice(firstProduct, lastProduct));

    function getProduct(event: React.BaseSyntheticEvent) { 
        const productId = event.target.dataset.id
        navigate(`/${productId}`)
    }

    function addProduct(event: React.BaseSyntheticEvent) {
        const productId = event.target.dataset.id
        let product = shoppingCart.find(product => product.id === Number(productId))
        if(product) {
            product.qty = ++product.qty
            changeProductQty(product, shoppingCart)
        } else {
            product = products.find(product => product.id === Number(productId))
            changeProductQty(product, shoppingCart)
        }
        setModal()       
    }

    if(loading) {
        return <h1>Is loading...</h1>
    }

    if(error) {
        return <h1>{error}</h1>
    }
    
    return (
        <div className="itemlist">
            {paginatedProducts.map(targetProduct =>
                <div key={targetProduct.id} data-id={targetProduct.id}  className="item">
                    <p>{targetProduct.title}</p>
                    <div className="flex-wrap">
                        <button data-id={targetProduct.id} className="button" onClick={getProduct}>
                            More
                        </button>
                        <button data-id={targetProduct.id} className="button" onClick={addProduct}>
                            Add to cart
                        </button>
                    </div>
                    
                </div>
            )}
        </div>
    )
}

export default Productlist