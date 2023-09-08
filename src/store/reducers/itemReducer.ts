import { ItemActionTypes, ItemAction } from "../../types/item";
import { initialState } from "./initialState";

export const itemReducer = (state = initialState, action: ItemAction) => {
    switch(action.type) {
        case ItemActionTypes.FETCH_ITEMLIST:
            return { loading: true, error: null, items: [] }
        case ItemActionTypes.FETCH_ITEMLIST_SUCCESS:
            return { loading: false, error: null, items: action.payload }
        case ItemActionTypes.FETCH_ITEMLIST_ERROR:
            return { loading: false, error: action.payload, items: [] }
        default:
            return state
    }

}