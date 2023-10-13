export interface ProductState {
    products: any[];
    product: {
        id: null | number,
        title: string,
        price: number,
        qty:  number,
        qtyLimit: number
    };
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
    GET_CURRENT_PRODUCT = 'GET_CURRENT_PRODUCT',
    SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
    SET_MODAL = 'SET_MODAL',
    CHANGE_PRODUCT_QTY = 'CHANGE_PRODUCT_QTY',
    // DELETE_FROM_CART = 'DELETE_FROM_CART',
    // DELETE_ONE_ITEM_QTY = 'DELETE_ONE_ITEM_QTY',
    // CHANGE_AMOUNT = 'CHANGE-AMOUNT'
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

interface GetCurrentProductAction {
    type: ProductActionTypes.GET_CURRENT_PRODUCT;
    payload: {
        id: null | number,
        title: string,
        price: number,
        qty: number,
        qtyLimit: number
    };
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

interface ChangeProductQtyAction {
    type: ProductActionTypes.CHANGE_PRODUCT_QTY;
    payload: {
        shoppingCart: any[];
        totalCost: number
    }
}

// interface DeleteFromCartAction {
//     type: ItemActionTypes.DELETE_FROM_CART;
//     payload: {
//         shoppingCart: any[],
//         totalCost: number
//     }
// }

// interface deleteOneItemQtyAction {
//     type: ItemActionTypes.DELETE_ONE_ITEM_QTY;
//     payload: {
//         shoppingCart: any[],
//         totalCost: number
//     }
// }

// interface changeAmountAction {
//     type: ItemActionTypes.CHANGE_AMOUNT;
//     payload: {
//         shoppingCart: any[],
//         totalCost: number
//     }
// }

export type ProductAction = FetchAction | FetchProductsAction | FetchErrorAction | GetCurrentProductAction | SetCurrentPageAction | SetModalAction | ChangeProductQtyAction 
