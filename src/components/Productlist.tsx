import { useEffect } from "react"
import { useActions } from "../hooks/useActions"
import { useTypedSelector } from "../hooks/useTypedSelector"
import * as ProductActionCreators from '../store/actions/productAction'
import { useNavigate } from 'react-router-dom'

function ProductList() {
    const {products, loading, error, currentPage, firstProduct, lastProduct} = useTypedSelector(state => state.product)
    const {fetchProducts, setModal, addProduct} = useActions(ProductActionCreators)
    let navigate = useNavigate()

    useEffect(() => {
        fetchProducts(currentPage)
    }, [currentPage])

    const paginatedProducts = (products.slice(firstProduct, lastProduct));

    function getProduct(event: React.BaseSyntheticEvent) { 
        const productId = event.target.dataset.id
        navigate(`/${productId}`)
    }
   
    function addToCart(event: React.BaseSyntheticEvent) {
        const productId = Number(event.target.dataset.id)
        addProduct(productId)
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
                        <button data-id={targetProduct.id} className="button" onClick={addToCart}>
                            Add to cart
                        </button>
                    </div>
                    
                </div>
            )}
        </div>
    )
}

export default ProductList