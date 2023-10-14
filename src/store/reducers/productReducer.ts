import { ProductActionTypes, ProductAction } from "../../types/product";
import { initialState } from "./initialState";
import { IProductState } from "../../types/product"

export const productReducer = (state = initialState, action: ProductAction): IProductState => {
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
        case ProductActionTypes.FETCH_CURRENT_PRODUCT:
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
        case ProductActionTypes.ADD_PRODUCT:
            let currentProduct = state.shoppingCart.find(product => product.id === action.payload)
            if(currentProduct) {
                return {
                    ...state,
                    shoppingCart: state.shoppingCart.map(product => {
                        if(product.id === action.payload && product.qty < product.qtyLimit) {
                            return {
                                ...product,
                                qty: ++product.qty
                            }  
                        } else {
                            return product  
                        }
                    })
                } 
            } else {
                currentProduct = state.products.find(product => product.id === action.payload) 
                if(currentProduct) {
                    return {
                        ...state,
                        shoppingCart: state.shoppingCart.concat({...currentProduct, qty: 1})
                    } 
                } else {
                    return {
                        ...state,
                        shoppingCart: state.shoppingCart
                    }
                }
            }
        case ProductActionTypes.REDUCE_QTY:  
            return {
                ...state,
                shoppingCart: (  
                    state.shoppingCart.map(product => {
                        if(product.id !== action.payload) {
                            return product
                        }
                        return {
                            ...product,
                            qty: --product.qty
                        }
                    })
                )
            }
        case ProductActionTypes.REMOVE_PRODUCT:
            return {
                ...state,
                shoppingCart: state.shoppingCart.filter(product => product.id !== action.payload)
            }
        case ProductActionTypes.CHANGE_QTY:
            return {
                ...state,
                shoppingCart: state.shoppingCart.map(product => {
                    if(product.id !== action.payload.id) {
                        return product
                    }
                    return {
                        ...product,
                        qty: action.payload.newQty
                    }
                })
            }
        default:
            return state
    }

}