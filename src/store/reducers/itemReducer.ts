import { ItemActionTypes, ItemAction } from "../../types/item";
import { initialState } from "./initialState";
import { ItemState } from "../../types/item"

export const itemReducer = (state = initialState, action: ItemAction): ItemState => {
    switch(action.type) {
        case ItemActionTypes.FETCH_ITEMLIST:
            return { 
                ...state, 
                loading: true, 
                error: null,
            }
        case ItemActionTypes.FETCH_ITEMLIST_SUCCESS:
            return { 
                ...state, 
                loading: false, 
                error: null, 
                items: action.payload, 
            }
        case ItemActionTypes.FETCH_ITEMLIST_ERROR:
            return { 
                ...state, 
                loading: false, 
                error: action.payload, 
                items: [] 
            }
        case ItemActionTypes.FETCH_ITEM:
            return { 
                ...state, 
                loading: false, 
                error: null, 
                item: action.payload 
            }
        case ItemActionTypes.SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload.currentPage,
                firstItem: action.payload.firstItem,
                lastItem: action.payload.lastItem
            }
        case ItemActionTypes.SET_MODAL:
            return {
                ...state,
                modal: !state.modal
            }
        default:
            return state
    }

}