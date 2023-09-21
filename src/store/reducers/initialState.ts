import { ItemState } from "../../types/item"

export const initialState: ItemState = {
    items: [],
    item: {
        id: null,
        title: '',
        price: null,
        qty: null
    },
    loading: false,
    error: null,
    currentPage: 1,
    itemsPerPage: 4,
    firstItem: 0,
    lastItem: 4,
    modal: false,
    shoppingCart: []
}