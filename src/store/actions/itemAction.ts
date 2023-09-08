import { Dispatch } from 'redux'
import axios from 'axios'
import { ItemActionTypes, ItemAction } from "../../types/item";

export const fetchItems = (): any => {
    return async (dispatch: Dispatch<ItemAction>) => {
        try {
            dispatch({type: ItemActionTypes.FETCH_ITEMLIST})
            const response = await axios.get('http://localhost:3004/items')
            dispatch({type: ItemActionTypes.FETCH_ITEMLIST_SUCCESS, payload: response.data})
        } catch (e) {
            dispatch({
                type: ItemActionTypes.FETCH_ITEMLIST_ERROR,
                payload: 'Fetch error'
            })
        }
    }
}