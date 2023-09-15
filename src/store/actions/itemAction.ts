import { Dispatch } from 'redux'
import axios from 'axios'
import { ItemActionTypes, ItemAction } from "../../types/item";
import { Interface } from 'readline';

export const fetchItems = (currentPage: number, firstItem: number): any => {
    return async (dispatch: Dispatch<ItemAction>) => {
        try {
            dispatch({type: ItemActionTypes.FETCH_ITEMLIST})
            const response = await axios.get(`http://localhost:3004/items?limit=4&page=${currentPage}`)
            dispatch({type: ItemActionTypes.FETCH_ITEMLIST_SUCCESS, payload: response.data})
            
        } catch (e) {
            dispatch({
                type: ItemActionTypes.FETCH_ITEMLIST_ERROR,
                payload: 'Fetch error'
            })
        }
    }
}

export const fetchItem = (itemId: number): any => {
    return async (dispatch: Dispatch<ItemAction>) => {
        try {
            dispatch({type: ItemActionTypes.FETCH_ITEMLIST})
            const response = await axios.get(`http://localhost:3004/items?id=${itemId}`)
            const singleItem = response.data
            localStorage.setItem('item', JSON.stringify(singleItem[0]));
            // const targetItem = JSON.parse(localStorage.getItem('item') || "")
            // console.log('targetItem', targetItem);
            dispatch({type: ItemActionTypes.FETCH_ITEM, payload: singleItem[0]})  
        } catch (e) {
            dispatch({
                type: ItemActionTypes.FETCH_ITEMLIST_ERROR,
                payload: 'Fetch error'
            })
        }
    }
}

export interface PaginateParams {
    currentPage: number;
    firstItem: number;
    lastItem: number;
}

export const setCurrentPage = (paginateParams: PaginateParams): any => {
    console.log('currentPage', paginateParams);
    
    return {
        type: 'SET_CURRENT_PAGE',
        payload: paginateParams
    }
}