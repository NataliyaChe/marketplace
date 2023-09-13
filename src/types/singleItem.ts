export interface SingleItemState {
    item: {};
    loading: boolean;
    error: null | string;
}

export enum SingleItemActionTypes {
    FETCH_ITEM = 'FETCH_ITEM',
    FETCH_ITEM_SUCCESS = 'FETCH_ITEM_SUCCESS',
    FETCH_ITEM_ERROR = 'FETCH_ITEM_ERROR'
}

interface FetchSingleItemAction {
    type: SingleItemActionTypes.FETCH_ITEM;
}

interface FetchSingleItemSuccessAction {
    type: SingleItemActionTypes.FETCH_ITEM_SUCCESS;
    payload: any[];
}

interface FetchSingleItemErrorAction {
    type: SingleItemActionTypes.FETCH_ITEM_ERROR;
    payload: string;
}

export type SingleItemAction = FetchSingleItemAction | FetchSingleItemSuccessAction | FetchSingleItemErrorAction