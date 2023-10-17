import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../index'

export interface IProductState {
    products: ISingleProduct[];
    product: ISingleProduct;
    loading: boolean;
    error: null | string;
    productsPerPage: number;
    currentPage: number;
    firstProduct: number;
    lastProduct: number;
    modal: boolean;
    shoppingCart:  ISingleProduct[],
}

export interface ISingleProduct {
    id: null | number,
    title: string,
    price: number,
    qty: number,
    qtyLimit: number
}

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
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        fetchStart: (state) => {},
        fetchError: (state, action: PayloadAction<string>) => {},
        fetchProducts: (state, action: PayloadAction<ISingleProduct[]>) => {},
        fetchCurrentProduct: (state, action: PayloadAction<ISingleProduct>) => {},
        setCurrentPage: () => {},
        setModal: (state, action: PayloadAction<boolean>) => {},
        addProduct: (state, action: PayloadAction<number>) => {},
        increaseQty: (state, action: PayloadAction<number | null>) => {},
        reduceQty: (state, action: PayloadAction<number | null>) => {},
        removeProduct: (state, action: PayloadAction<number>) => {},
        changeQty: (state, action: PayloadAction<number>) => {},

    }
})

export const { 
    fetchStart,
    fetchError,
    fetchProducts, 
    fetchCurrentProduct, 
    setCurrentPage, 
    setModal, 
    addProduct, 
    increaseQty,
    reduceQty, 
    removeProduct, 
    changeQty 
} = productSlice.actions

export default productSlice.reducer