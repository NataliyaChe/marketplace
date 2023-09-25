export interface ItemState {
    items: any[];
    item: {
        id: null | number,
        title: string,
        price: number,
        qty:  number,
        qtyLimit: number
    };
    loading: boolean;
    error: null | string;
    itemsPerPage: number;
    currentPage: number;
    firstItem: number;
    lastItem: number;
    modal: boolean;
    shoppingCart:  ISingleItem[],
    totalCost: number
}

export interface ISingleItem {
    id: null | number,
    title: string,
    price: number,
    qty: number,
    qtyLimit: number
}

export enum ItemActionTypes {
    FETCH_START = 'FETCH_START',
    FETCH_ITEMLIST = 'FETCH_ITEMLIST',
    FETCH_ERROR = 'FETCH_ERROR',
    GET_CURRENT_ITEM = 'GET_CURRENT_ITEM',
    SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
    SET_MODAL = 'SET_MODAL',
    ADD_TO_CART = 'ADD_TO_CART',
    DELETE_FROM_CART = 'DELETE_FROM_CART'
}

interface FetchAction {
    type: ItemActionTypes.FETCH_START;
}

interface FetchItemsAction {
    type: ItemActionTypes.FETCH_ITEMLIST;
    payload: any[];
}

interface FetchErrorAction {
    type: ItemActionTypes.FETCH_ERROR;
    payload: string;
}

interface GetCurrentItemAction {
    type: ItemActionTypes.GET_CURRENT_ITEM;
    payload: {
        id: null | number,
        title: string,
        price: number,
        qty: number,
        qtyLimit: number
    };
}

interface SetCurrentPageAction {
    type: ItemActionTypes.SET_CURRENT_PAGE;
    payload: {
        currentPage: number;
        firstItem: number;
        lastItem: number;
    }
}

interface SetModalAction {
    type: ItemActionTypes.SET_MODAL;
    payload: boolean;
}

interface AddToCartAction {
    type: ItemActionTypes.ADD_TO_CART;
    payload: {
        shoppingCart: any[];
        totalCost: number
    }
}

interface DeleteFromCartAction {
    type: ItemActionTypes.DELETE_FROM_CART;
    payload: any[]
}

export type ItemAction = FetchAction | FetchItemsAction | FetchErrorAction | GetCurrentItemAction | SetCurrentPageAction | SetModalAction | AddToCartAction | DeleteFromCartAction
