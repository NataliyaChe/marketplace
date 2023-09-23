export interface ItemState {
    items: any[];
    item: {
        id: null | number,
        title: string,
        price: null | number,
        qty: null | number
    };
    loading: boolean;
    error: null | string;
    itemsPerPage: number;
    currentPage: number;
    firstItem: number;
    lastItem: number;
    modal: boolean;
    shoppingCart:  ISingleItem[]
}

export interface ISingleItem {
    id: null | number,
    title: string,
    price: null | number,
    qty: null | number
}

export enum ItemActionTypes {
    FETCH_ITEMLIST = 'FETCH_ITEMLIST',
    FETCH_ITEMLIST_SUCCESS = 'FETCH_ITEMLIST_SUCCESS',
    FETCH_ITEMLIST_ERROR = 'FETCH_ITEMLIST_ERROR',
    GET_CURRENT_ITEM = 'GET_CURRENT_ITEM',
    SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
    SET_MODAL = 'SET_MODAL',
    ADD_TO_CART = 'ADD_TO_CART',
    FETCH_SHOPPING_CART = 'FETCH_SHOPPING_CART'
}

interface FetchItemsAction {
    type: ItemActionTypes.FETCH_ITEMLIST;
}

interface FetchItemsSuccessAction {
    type: ItemActionTypes.FETCH_ITEMLIST_SUCCESS;
    payload: any[];
}

interface FetchItemsErrorAction {
    type: ItemActionTypes.FETCH_ITEMLIST_ERROR;
    payload: string;
}

interface GetCurrentItemAction {
    type: ItemActionTypes.GET_CURRENT_ITEM;
    payload: {
        id: null | number,
        title: string,
        price: null | number,
        qty: null | number
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
    payload: []
}

interface FetchSoppingCartAction {
    type: ItemActionTypes.FETCH_SHOPPING_CART;
    payload: any[]
}

export type ItemAction = FetchItemsAction | FetchItemsSuccessAction | FetchItemsErrorAction | GetCurrentItemAction | SetCurrentPageAction | SetModalAction | AddToCartAction | FetchSoppingCartAction
