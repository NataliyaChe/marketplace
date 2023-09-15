export interface ItemState {
    items: any[];
    item: any;
    loading: boolean;
    error: null | string;
    itemsPerPage: number;
    currentPage: number;
    // totalPages: number;
    firstItemOnPage: number;
    firstItem: number;
    lastItem: number;
}

export enum ItemActionTypes {
    FETCH_ITEMLIST = 'FETCH_ITEMLIST',
    FETCH_ITEMLIST_SUCCESS = 'FETCH_ITEMLIST_SUCCESS',
    FETCH_ITEMLIST_ERROR = 'FETCH_ITEMLIST_ERROR',
    FETCH_ITEM = 'FETCH_ITEM',
    SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
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

interface FetchItemAction {
    type: ItemActionTypes.FETCH_ITEM;
    payload: {};
}

interface SetCurrentPageAction {
    type: ItemActionTypes.SET_CURRENT_PAGE;
    payload: number;
}

export type ItemAction = FetchItemsAction | FetchItemsSuccessAction | FetchItemsErrorAction | FetchItemAction | SetCurrentPageAction