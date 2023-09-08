import { useDispatch } from "react-redux"
import { bindActionCreators } from 'redux'
import * as ItemActionCreators from '../store/actions/itemAction'

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(ItemActionCreators, dispatch)
}