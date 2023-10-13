import { useDispatch } from "react-redux"
import { bindActionCreators } from 'redux'

export const useActions = (creator: any) => {
    const dispatch = useDispatch()
    return bindActionCreators(creator, dispatch)
}