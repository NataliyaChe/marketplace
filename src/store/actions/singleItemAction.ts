import { Dispatch } from 'redux'
import axios from 'axios'
import { SingleItemActionTypes, SingleItemAction } from "../../types/singleItem";

export const fetchSingleItem = (): any => {
    return async (dispatch: Dispatch<SingleItemAction>) => {
        try {
            dispatch({type: SingleItemActionTypes.FETCH_ITEM})
            const response = await axios.get('http://localhost:3004/items?id=1')
            dispatch({type: SingleItemActionTypes.FETCH_ITEM, payload: response.data})
        } catch (e) {
            dispatch({
                type: SingleItemActionTypes.FETCH_ITEM_ERROR,
                payload: 'Fetch error'
            })
        }
    }
}