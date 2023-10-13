import { combineReducers } from 'redux'
import { productReducer } from './productReducer'
// import { singleItemReducer } from './singleItemReducer'

export const rootReducer = combineReducers({
    product: productReducer,
    // singleItem: singleItemReducer,
})

export type RootState = ReturnType<typeof rootReducer>