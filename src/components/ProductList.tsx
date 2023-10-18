import { useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import Button from "./Button"
import { useAppDispatch } from "../hooks/useActions"
import { useAppSelector } from "../hooks/useTypedSelector"
import { fetchProducts, setModal } from "../store/features/productSlice"

function ProductList() {
    let navigate = useNavigate()
    const dispatch = useAppDispatch()
    const {products, loading, error, currentPage, firstProduct, lastProduct} = useAppSelector(state => state.product)

    useEffect(() => {
        dispatch(fetchProducts(currentPage))
    }, [currentPage])

    const paginatedProducts = (products.slice(firstProduct, lastProduct));

    function getProduct(event: React.BaseSyntheticEvent) { 
        const productId = Number(event.target.dataset.id)
        navigate(`/${productId}`)
    }
   
    function addToCart(event: React.BaseSyntheticEvent) {
        const productId = Number(event.target.dataset.id)
        console.log('addToCart');
        // addProduct(productId)
        dispatch(setModal())           
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