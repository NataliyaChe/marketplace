export interface ItemState {
    items: any[];
    item: any;
    loading: boolean;
    error: null | string;
    limit: null | number;
    page: number
}

export enum ItemActionTypes {
    FETCH_ITEMLIST = 'FETCH_ITEMLIST',
    FETCH_ITEMLIST_SUCCESS = 'FETCH_ITEMLIST_SUCCESS',
    FETCH_ITEMLIST_ERROR = 'FETCH_ITEMLIST_ERROR',
    FETCH_ITEM = 'FETCH_ITEM'
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

export type ItemAction = FetchItemsAction | FetchItemsSuccessAction | FetchItemsErrorAction | FetchItemAction