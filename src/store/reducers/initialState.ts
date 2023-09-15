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
    itemsPerPage: 4,
    firstItem: 0,
    lastItem: 4,
    modal: false
}