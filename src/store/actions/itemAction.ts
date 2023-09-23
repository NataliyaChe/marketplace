import { Dispatch } from 'redux'
import axios from 'axios'
import { ItemActionTypes, ItemAction, ISingleItem } from "../../types/item";

export const fetchItems = (currentPage: number): any => {
    return async (dispatch: Dispatch<ItemAction>) => {
        try {
            dispatch({type: ItemActionTypes.FETCH_START})
            const response = await axios.get(`http://localhost:3004/items?limit=4&page=${currentPage}`)
            dispatch({type: ItemActionTypes.FETCH_ITEMLIST, payload: response.data})
        } catch (e) {
            dispatch({
                type: ItemActionTypes.FETCH_ERROR,
                payload: 'Fetch error'
            })
        }
    }
}

export const getCurrentItem = (itemId: number | undefined): any => {
    return async (dispatch: Dispatch<ItemAction>) => {
        try {
            dispatch({type: ItemActionTypes.FETCH_START})
            const response = await axios.get(`http://localhost:3004/items?id=${itemId}`)
            const data = response.data
            const singleItem = {
                id: data[0].id,
                title: data[0].title,
                price: data[0].price,
                qty: data[0].qty
            }          
            dispatch({
                type: ItemActionTypes.GET_CURRENT_ITEM, 
                payload: singleItem
            })  
        } catch (e) {
            dispatch({
                type: ItemActionTypes.FETCH_ERROR,
                payload: 'Fetch error'
            })
        }
    }
}



export const setCurrentPage = (currentPage: number, firstItem: number, lastItem: number): any => {
    return {
        type: 'SET_CURRENT_PAGE',
        payload: {
            currentPage: currentPage,
            firstItem: firstItem,
            lastItem: lastItem
        }
    }
}
export const setModal = () => {
    return {
        type: 'SET_MODAL',
    }
}

export const addToCart = (item: ISingleItem, shoppingCart: ISingleItem[]): any => {
        const cartItem = {
            id: item.id,
            title: item.title,
            price: item.price,
            qty: 1
        }
        shoppingCart.push(cartItem)
        
    return {
        type: 'ADD_TO_CART',
        payload: shoppingCart
    }   
}

export const fetchShoppingCart = (): any => {
    return async (dispatch: Dispatch<ItemAction>) => {
        try {
            dispatch({type: ItemActionTypes.FETCH_START})
            const response = await axios.get(`http://localhost:3004/cart`)
            dispatch({type: ItemActionTypes.FETCH_SHOPPING_CART, payload: response.data})
        } catch (e) {
            dispatch({
                type: ItemActionTypes.FETCH_ERROR,
                payload: 'Fetch error'
            })
        }
    }
}