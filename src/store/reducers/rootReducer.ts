import { combineReducers } from 'redux'
import { itemReducer } from './itemReducer'
// import { singleItemReducer } from './singleItemReducer'

export const rootReducer = combineReducers({
    item: itemReducer,
    // singleItem: singleItemReducer,
})

export type RootState = ReturnType<typeof rootReducer>