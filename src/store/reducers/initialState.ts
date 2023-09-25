import { ItemState } from "../../types/item"

export const initialState: ItemState = {
    items: [],
    item: {
        id: null,
        title: '',
        price: 0,
        qty: 0,
        qtyLimit: 0
    },
    loading: false,
    error: null,
    currentPage: 1,
    itemsPerPage: 4,
    firstItem: 0,
    lastItem: 4,
    modal: false,
    shoppingCart: [],
    totalCost: 0
}