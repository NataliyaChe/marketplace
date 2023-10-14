export interface IProductState {
    products: ISingleProduct[];
    product: ISingleProduct;
    loading: boolean;
    error: null | string;
    productsPerPage: number;
    currentPage: number;
    firstProduct: number;
    lastProduct: number;
    modal: boolean;
    shoppingCart:  ISingleProduct[],
    totalCost: number,
}

export interface ISingleProduct {
    id: null | number,
    title: string,
    price: number,
    qty: number,
    qtyLimit: number
}

export enum ProductActionTypes {
    FETCH_START = 'FETCH_START',
    FETCH_PRODUCTLIST = 'FETCH_PRODUCTLIST',
    FETCH_ERROR = 'FETCH_ERROR',
    FETCH_CURRENT_PRODUCT = 'FETCH_CURRENT_PRODUCT',
    SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
    SET_MODAL = 'SET_MODAL',
    ADD_PRODUCT = 'ADD_PRODUCT',
    INCREASE_QTY = 'INCREASE_QTY',
    REDUCE_QTY = 'REDUCE_QTY',
    REMOVE_PRODUCT = 'REMOVE_PRODUCT',
    CHANGE_QTY = 'CHANGE_QTY'
}

interface FetchAction {
    type: ProductActionTypes.FETCH_START;
}

interface FetchProductsAction {
    type: ProductActionTypes.FETCH_PRODUCTLIST;
    payload: any[];
}

interface FetchErrorAction {
    type: ProductActionTypes.FETCH_ERROR;
    payload: string;
}

interface FetchCurrentProductAction {
    type: ProductActionTypes.FETCH_CURRENT_PRODUCT;
    payload: ISingleProduct;
}

interface SetCurrentPageAction {
    type: ProductActionTypes.SET_CURRENT_PAGE;
    payload: {
        currentPage: number;
        firstProduct: number;
        lastProduct: number;
    }
}

interface SetModalAction {
    type: ProductActionTypes.SET_MODAL;
    payload: boolean;
}

interface AddProductAction {
    type: ProductActionTypes.ADD_PRODUCT;
    payload: ISingleProduct
}

interface IncreaseQtyAction {
    type: ProductActionTypes.INCREASE_QTY;
    payload: number | null
}

interface ReduceQtyAction {
    type: ProductActionTypes.REDUCE_QTY;
    payload: number | null
}

interface RemoveProductAction {
    type: ProductActionTypes.REMOVE_PRODUCT;
    payload: ISingleProduct[]
}

interface ChangeQtyAction {
    type: ProductActionTypes.CHANGE_QTY;
    payload: {
        id: number;
        newQty: number;
    }
}

export type ProductAction = FetchAction | FetchProductsAction | FetchErrorAction | FetchCurrentProductAction | SetCurrentPageAction | SetModalAction | AddProductAction | IncreaseQtyAction | ReduceQtyAction | RemoveProductAction | ChangeQtyAction
