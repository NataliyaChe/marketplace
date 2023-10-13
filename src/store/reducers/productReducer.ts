import { ProductActionTypes, ProductAction } from "../../types/product";
import { initialState } from "./initialState";
import { ProductState } from "../../types/product"

export const productReducer = (state = initialState, action: ProductAction): ProductState => {
    switch(action.type) {
        case ProductActionTypes.FETCH_START:
            return { 
                ...state, 
                loading: true, 
                error: null,
            }
        case ProductActionTypes.FETCH_PRODUCTLIST:
            return { 
                ...state, 
                loading: false, 
                error: null, 
                products: action.payload, 
            }
        case ProductActionTypes.FETCH_ERROR:
            return { 
                ...state, 
                loading: false, 
                error: action.payload, 
                products: [] 
            }
        case ProductActionTypes.GET_CURRENT_PRODUCT:
            return { 
                ...state, 
                loading: false, 
                error: null, 
                product: {
                    id: action.payload.id,
                    title: action.payload.title, 
                    price: action.payload.price,
                    qty: action.payload.qty,
                    qtyLimit: action.payload.qtyLimit
                } 
            }
        case ProductActionTypes.SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload.currentPage,
                firstProduct: action.payload.firstProduct,
                lastProduct: action.payload.lastProduct,
            }
        case ProductActionTypes.SET_MODAL:
            return {
                ...state,
                modal: !state.modal
            }
        case ProductActionTypes.CHANGE_PRODUCT_QTY:
            return {
                ...state,
                shoppingCart: action.payload.shoppingCart,
                totalCost: action.payload.totalCost
            }
        default:
            return state
    }

}