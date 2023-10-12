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
                qty: data[0].qty,
                qtyLimit: data[0].qtyLimit
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
    let currentItem = shoppingCart.find(currentItem => currentItem.id === item.id)
    if(currentItem) {
        const newQty = item.qty
        currentItem.qty = newQty 
    } else if (!currentItem) {
        currentItem = {...item, qty: 1}
        shoppingCart.push(currentItem)
    }

    const newTotalCost = shoppingCart.reduce((sum, item) => sum + ((item.qty % 2 === 0 ? item.qty * (item.price / 100 * 90) : item.qty * item.price)), 0)

    return {
        type: 'ADD_TO_CART',
        payload: {
            shoppingCart: shoppingCart,
            totalCost: newTotalCost
        }
    }   
}

export const deleteFromCart = (product: ISingleItem, shoppingCart: ISingleItem[]): any => {
    shoppingCart.forEach((item, index) => {
        if( item.id === product.id && item.qty === 0) {
            shoppingCart.splice(index, 1)  
        } else if (item.id === product.id) {
            const newQty = product.qty   
            item.qty = newQty   
        }
    })
    
        const newTotalCost = shoppingCart.reduce((sum, item) => sum + ((item.qty % 2 === 0 ? item.qty * (item.price / 100 * 90) : item.qty * item.price)), 0)

    return {
        type: 'DELETE_FROM_CART',
        payload: {
            shoppingCart:  shoppingCart,
            totalCost: newTotalCost
        }
    }
}

