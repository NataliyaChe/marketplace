import { createSlice, PayloadAction, createAsyncThunk, AnyAction, current } from '@reduxjs/toolkit'
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

export const fetchProducts = createAsyncThunk<ISingleProduct[], number, { rejectValue: string }>(
    'products/fetchProducts', 
    async function(currentPage, {rejectWithValue}) {
        const response = await fetch(`http://localhost:3004/items?limit=4&page=${currentPage}`)

        if(!response.ok) {
            return rejectWithValue('Error!')
        }

        const data = await response.json()
        return data
    })

export const fetchCurrentProduct = createAsyncThunk<ISingleProduct, number, { rejectValue: string }>(
    'products/fetchCurrentProduct', 
    async function (productId, {rejectWithValue}) {
        const response = await fetch(`http://localhost:3004/items?id=${productId}`)
        const [product] = await response.json()
        if(!response.ok) {
            return rejectWithValue('Error!')
        }
        return product
    }
)

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setCurrentPage: (state, action: PayloadAction<{
            currentPage: number, 
            firstProduct: number, 
            lastProduct: number
        }>) => {
            state.currentPage = action.payload.currentPage;
            state.firstProduct = action.payload.firstProduct;
            state.lastProduct = action.payload.lastProduct
        },
        setModal: (state) => {
            state.modal = !state.modal
        },
        addProduct: (state, action: PayloadAction<number>) => {},
        increaseQty: (state, action: PayloadAction<number | null>) => {},
        reduceQty: (state, action: PayloadAction<number | null>) => {},
        removeProduct: (state, action: PayloadAction<number>) => {},
        changeQty: (state, action: PayloadAction<number>) => {},
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
                state.error = null;
            })
            .addCase(fetchCurrentProduct.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCurrentProduct.fulfilled, (state, action) => {
                state.loading = false;
                state.product = action.payload;
                state.error = null;
            })
            .addMatcher(isError, (state, action: PayloadAction<string>) => {
                state.loading = false;
                state.error = action.payload
            })
    }
})

function isError(action: AnyAction) {
    return action.type.endsWith('rejected')
}

export const { 
    setCurrentPage, 
    setModal, 
    addProduct, 
    increaseQty,
    reduceQty, 
    removeProduct, 
    changeQty 
} = productSlice.actions

export default productSlice.reducer