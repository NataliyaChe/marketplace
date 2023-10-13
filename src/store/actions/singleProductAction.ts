import { Dispatch } from 'redux'
import axios from 'axios'
import { SingleProductActionTypes, SingleProductAction } from "../../types/singleProduct";

export const fetchSingleProduct = (): any => {
    return async (dispatch: Dispatch<SingleProductAction>) => {
        try {
            dispatch({type: SingleProductActionTypes.FETCH_PRODUCT})
            const response = await axios.get('http://localhost:3004/items?id=1')
            dispatch({type: SingleProductActionTypes.FETCH_PRODUCT, payload: response.data})
        } catch (e) {
            dispatch({
                type: SingleProductActionTypes.FETCH_PRODUCT_ERROR,
                payload: 'Fetch error'
            })
        }
    }
}