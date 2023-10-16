import { useEffect } from "react"
import { useActions } from "../hooks/useActions"
import { useTypedSelector } from "../hooks/useTypedSelector"
import * as ProductActionCreators from '../store/actions/productAction'
import { useNavigate } from 'react-router-dom'
import Button from "./Button"

function ProductList() {
    const {products, loading, error, currentPage, firstProduct, lastProduct} = useTypedSelector(state => state.product)
    const {fetchProducts, setModal, addProduct} = useActions(ProductActionCreators)
    let navigate = useNavigate()

    useEffect(() => {
        fetchProducts(currentPage)
    }, [currentPage])

    const paginatedProducts = (products.slice(firstProduct, lastProduct));
    console.log('paginatedProducts', paginatedProducts[1]);
    

    function getProduct(event: React.BaseSyntheticEvent) { 
        const productId = Number(event.target.dataset.id)
        console.log('productId', productId);
        
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
                        <Button onClick={getProduct} dataId={targetProduct.id}>
                            More
                        </Button>
                        <Button onClick={addToCart} dataId={targetProduct.id}>
                            Add to cart
                        </Button>            
                    </div>
                    
                </div>
            )}
        </div>
    )
}

export default ProductList