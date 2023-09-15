import { ItemState } from "../../types/item"

// const getItem = () => {
//     const item = localStorage.getItem('item')
//     const parse = item ? JSON.parse(item) : null
// }

export const initialState: ItemState = {
    items: [],
    item: {},
    loading: false,
    error: null,
    currentPage: 1,
    // totalPages: 3,
    itemsPerPage: 4,
    firstItemOnPage: 0,
    firstItem: 0,
    lastItem: 4
}