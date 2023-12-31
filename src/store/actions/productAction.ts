import { Dispatch } from 'redux'
import axios from 'axios'
import { ProductActionTypes, ProductAction, ISingleProduct } from "../../types/product";

export const fetchProducts = (currentPage: number): any => {
    return async (dispatch: Dispatch<ProductAction>) => {
        try {
            dispatch({type: ProductActionTypes.FETCH_START})
            const response = await axios.get(`http://localhost:3004/products?limit=4&page=${currentPage}`)
            dispatch({type: ProductActionTypes.FETCH_PRODUCT_LIST, payload: response.data})
        } catch (e) {
            dispatch({
                type: ProductActionTypes.FETCH_ERROR,
                payload: 'Fetch error'
            })
        }
    }
}

export const fetchCurrentProduct = (productId: number): any => {
    return async (dispatch: Dispatch<ProductAction>) => {
        try {
            dispatch({type: ProductActionTypes.FETCH_START})
            const response = await axios.get(`http://localhost:3004/products?id=${productId}`)
            const [data] = response.data       
            dispatch({
                type: ProductActionTypes.FETCH_CURRENT_PRODUCT, 
                payload: data
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
            currentPage,
            firstProduct,
            lastProduct
        }
    }
}

export const setModal = () => {
    return {
        type: ProductActionTypes.SET_MODAL,
    }
}

export const addProduct = (productId: number) => {
    return {
        type: ProductActionTypes.ADD_PRODUCT,
        payload: productId
    }
}

export const reduceQty = (productId: number) => {
    return {
        type: ProductActionTypes.REDUCE_QTY,
        payload: productId
    }
}

export const removeProduct = (productId: number) => {
    return {
        type: ProductActionTypes.REMOVE_PRODUCT,
        payload: productId
    }
}

export const changeQty = (productId: number, newQty: number) => {
    
    return {
        type: ProductActionTypes.CHANGE_QTY,
        payload: {
            id: productId,
            newQty: newQty
        }
    }
}
