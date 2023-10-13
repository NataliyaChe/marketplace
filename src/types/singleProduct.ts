export interface SingleProductState {
    product: {};
    loading: boolean;
    error: null | string;
}

export enum SingleProductActionTypes {
    FETCH_PRODUCT = 'FETCH_PRODUCT',
    FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCT_SUCCESS',
    FETCH_PRODUCT_ERROR = 'FETCH_PRODUCT_ERROR'
}

interface FetchSingleProductAction {
    type: SingleProductActionTypes.FETCH_PRODUCT;
}

interface FetchSingleProductSuccessAction {
    type: SingleProductActionTypes.FETCH_PRODUCT_SUCCESS;
    payload: any[];
}

interface FetchSingleProductErrorAction {
    type: SingleProductActionTypes.FETCH_PRODUCT_ERROR;
    payload: string;
}

export type SingleProductAction = FetchSingleProductAction | FetchSingleProductSuccessAction | FetchSingleProductErrorAction