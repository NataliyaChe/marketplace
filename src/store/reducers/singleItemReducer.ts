import { SingleItemActionTypes, SingleItemAction, SingleItemState } from "../../types/singleItem";

export const initialState: SingleItemState = {
    item: {},
    loading: false,
    error: null
}

export const singleItemReducer = (state = initialState, action: SingleItemAction) => {
    switch(action.type) {
        case SingleItemActionTypes.FETCH_ITEM:
            return { loading: true, error: null, item: [] }
        case SingleItemActionTypes.FETCH_ITEM_SUCCESS:
            return { loading: false, error: null, item: action.payload }
        case SingleItemActionTypes.FETCH_ITEM_ERROR:
            return { loading: false, error: action.payload, item: {} }
        default:
            return state
    }

}