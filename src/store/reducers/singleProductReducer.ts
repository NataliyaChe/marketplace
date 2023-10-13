import { SingleProductActionTypes, SingleProductAction, SingleProductState } from "../../types/singleProduct";

export const initialState: SingleProductState = {
    product: {},
    loading: false,
    error: null
}

export const singleProductReducer = (state = initialState, action: SingleProductAction) => {
    switch(action.type) {
        case SingleProductActionTypes.FETCH_PRODUCT:
            return { loading: true, error: null, product: [] }
        case SingleProductActionTypes.FETCH_PRODUCT_SUCCESS:
            return { loading: false, error: null, product: action.payload }
        case SingleProductActionTypes.FETCH_PRODUCT_ERROR:
            return { loading: false, error: action.payload, product: {} }
        default:
            return state
    }

}