import { ItemActionTypes, ItemAction } from "../../types/item";
import { initialState } from "./initialState";
import { ItemState } from "../../types/item"

export const itemReducer = (state = initialState, action: ItemAction): ItemState => {
    switch(action.type) {
        case ItemActionTypes.FETCH_START:
            return { 
                ...state, 
                loading: true, 
                error: null,
            }
        case ItemActionTypes.FETCH_ITEMLIST:
            return { 
                ...state, 
                loading: false, 
                error: null, 
                items: action.payload, 
            }
        case ItemActionTypes.FETCH_ERROR:
            return { 
                ...state, 
                loading: false, 
                error: action.payload, 
                items: [] 
            }
        case ItemActionTypes.GET_CURRENT_ITEM:
            return { 
                ...state, 
                loading: false, 
                error: null, 
                item: {
                    id: action.payload.id,
                    title: action.payload.title, 
                    price: action.payload.price,
                    qty: action.payload.qty
                } 
            }
        case ItemActionTypes.SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload.currentPage,
                firstItem: action.payload.firstItem,
                lastItem: action.payload.lastItem,
            }
        case ItemActionTypes.SET_MODAL:
            return {
                ...state,
                modal: !state.modal
            }
        case ItemActionTypes.ADD_TO_CART:
            return {
                ...state,
                shoppingCart: action.payload
            }
        case ItemActionTypes.DELETE_FROM_CART:
            return {
                ...state,
                shoppingCart: action.payload
            }
        default:
            return state
    }

}