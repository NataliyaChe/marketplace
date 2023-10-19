import { createSlice, PayloadAction, createAsyncThunk, AnyAction } from '@reduxjs/toolkit'
import { IProductState, ISingleProduct } from '../../types/product'

export const initialState: IProductState = {
    products: [],
    product: {
        id: 0,
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
        const response = await fetch(`http://localhost:3004/products?limit=4&page=${currentPage}`)

        if(!response.ok) {
            return rejectWithValue('Error!')
        }

        const data = await response.json()
        return data
    })

export const fetchCurrentProduct = createAsyncThunk<ISingleProduct, number, { rejectValue: string }>(
    'products/fetchCurrentProduct', 
    async function (productId, {rejectWithValue}) {
        const response = await fetch(`http://localhost:3004/products?id=${productId}`)

        if(!response.ok) {
            return rejectWithValue('Error!')
        }

        const [product] = await response.json()
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
        addProduct: (state, action: PayloadAction<number>) => {
            const currentProduct = state.shoppingCart.find(product => product.id === action.payload)
            if(currentProduct) {
                if(currentProduct.id === action.payload && currentProduct.qty < currentProduct.qtyLimit) {
                    currentProduct.qty = ++currentProduct.qty 
                } 
            } else {
                const newProduct = state.products.find(product => product.id === action.payload) as ISingleProduct
                state.shoppingCart.push({...newProduct, qty: 1})
            }
        },
        reduceQty: (state, action: PayloadAction<number | null>) => {
            const currentProduct = state.shoppingCart.find(product => product.id === action.payload) as ISingleProduct
            currentProduct.qty = --currentProduct.qty
        },
        removeProduct: (state, action: PayloadAction<number>) => {
            state.shoppingCart = state.shoppingCart.filter(product => product.id !== action.payload)
        },
        changeQty: (state, action: PayloadAction<{
            id: number, 
            newQty: number,
        }>) => {
            const currentProduct = state.shoppingCart.find(product => product.id === action.payload.id) as ISingleProduct
            if(action.payload.newQty <= currentProduct.qtyLimit && action.payload.newQty > 0) {
                currentProduct.qty = action.payload.newQty
            } else if(action.payload.newQty > currentProduct.qtyLimit) {
                currentProduct.qty = currentProduct.qtyLimit
            }
        },
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
    reduceQty, 
    removeProduct, 
    changeQty 
} = productSlice.actions

export default productSlice.reducer