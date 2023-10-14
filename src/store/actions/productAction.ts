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
            const {id, title, price, qty, qtyLimit} = response.data[0]
            const singleProduct = {id, title, price, qty, qtyLimit}          
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

export const increaseQty = (productId: number) => {
    return {
        type: ProductActionTypes.INCREASE_QTY,
        payload: productId
    }
}

export const addProduct = (product: ISingleProduct) => {
    return {
        type: ProductActionTypes.ADD_PRODUCT,
        payload: product
    }
}

export const reduceQty = (productId: number) => {
    return {
        type: ProductActionTypes.REDUCE_QTY,
        payload: productId
    }
}

// export const removeProduct = (productId: number) => {
//     return {
//         type: ProductActionTypes.REMOVE_PRODUCT,
//         payload: productId
//     }
// }

export const changeQty = (productId: number, newQty: number) => {
    return {
        type: ProductActionTypes.CHANGE_QTY,
        payload: {
            productId: productId,
            newQty: newQty
        }
    }
}
