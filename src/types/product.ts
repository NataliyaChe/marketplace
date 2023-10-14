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
    UPDATE_SHOPPING_CART = 'UPDATE_SHOPPING_CART',
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

interface UpdateShoppingCartAction {
    type: ProductActionTypes.UPDATE_SHOPPING_CART;
    payload: {
        shoppingCart: ISingleProduct[];
        totalCost: number
    }
}

export type ProductAction = FetchAction | FetchProductsAction | FetchErrorAction | FetchCurrentProductAction | SetCurrentPageAction | SetModalAction | UpdateShoppingCartAction 
