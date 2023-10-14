import { Dispatch } from 'redux'
import axios from 'axios'
import { ProductActionTypes, ProductAction, ISingleProduct } from "../../types/product";

export const fetchProducts = (currentPage: number): any => {
    return async (dispatch: Dispatch<ProductAction>) => {
        try {
            dispatch({type: ProductActionTypes.FETCH_START})
            const response = await axios.get(`http://localhost:3004/items?limit=4&page=${currentPage}`)
            dispatch({type: ProductActionTypes.FETCH_PRODUCTLIST, payload: response.data})
        } catch (e) {
            dispatch({
                type: ProductActionTypes.FETCH_ERROR,
                payload: 'Fetch error'
            })
        }
    }
}

export const fetchCurrentProduct = (productId: number | undefined): any => {
    return async (dispatch: Dispatch<ProductAction>) => {
        try {
            dispatch({type: ProductActionTypes.FETCH_START})
            const response = await axios.get(`http://localhost:3004/items?id=${productId}`)
            const data = response.data
            const singleProduct = {
                id: data[0].id,
                title: data[0].title,
                price: data[0].price,
                qty: data[0].qty,
                qtyLimit: data[0].qtyLimit
            }          
            dispatch({
                type: ProductActionTypes.FETCH_CURRENT_PRODUCT, 
                payload: singleProduct
            })  
        } catch (e) {
            dispatch({
                type: ProductActionTypes.FETCH_ERROR,
                payload: 'Fetch error'
            })
        }
    }
}

export const setCurrentPage = (currentPage: number, firstProduct: number, lastProduct: number): any => {
    return {
        type: ProductActionTypes.SET_CURRENT_PAGE,
        payload: {
            currentPage: currentPage,
            firstProduct: firstProduct,
            lastProduct: lastProduct
        }
    }
}

export const setModal = () => {
    return {
        type: ProductActionTypes.SET_MODAL,
    }
}

export const updateShoppingCart = (product: ISingleProduct, shoppingCart: ISingleProduct[]): any => {
    let currentProduct = shoppingCart.find(currentProduct => currentProduct.id === product.id)
    if(currentProduct) {
        const newQty = product.qty
        if( newQty === 0) {
            shoppingCart.forEach((item, index) => {
                if(item.id === currentProduct?.id){
                    shoppingCart.splice(index, 1)  
                }
            })
        } else {
            currentProduct.qty = newQty 
        } 
    } else if (!currentProduct) {
        currentProduct = {...product, qty: 1}
        shoppingCart.push(currentProduct)
    }

    const newTotalCost = shoppingCart.reduce((sum, {qty, price}) => sum + (qty % 2 === 0 ? qty * (price / 100 * 90) : qty * price), 0)

    return {
        type: ProductActionTypes.UPDATE_SHOPPING_CART,
        payload: {
            shoppingCart: shoppingCart,
            totalCost: newTotalCost
        }
    }   
}

