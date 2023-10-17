// import { TypedUseSelectorHook, useSelector } from "react-redux";
// import { RootState } from "../store/reducers/rootReducer";

// export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector

import { useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import type { RootState } from '../store'

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector