import { IProductState } from "../../types/product"

export const initialState: IProductState = {
    products: [],
    product: {
        id: null,
        title: '',
        price: 0,
        qty: 0,
        qtyLimit: 0
    },
    loading: false,
    error: null,
    currentPage: 1,
    productsPerPage: 4,
    firstProduct: 0,
    lastProduct: 4,
    modal: false,
    shoppingCart: [],
    totalCost: 0,
}