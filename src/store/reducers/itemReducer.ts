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
                // totalPages: action.payload.length ,
                // currentPage: state.currentPage,
                // lastItem: state.firstItem + state.itemsPerPage
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
                currentPage: action.payload,
                firstItem: action.payload,
                lastItem: action.payload
                // totalPages: state.totalPages,
            }
        default:
            return state
    }

}