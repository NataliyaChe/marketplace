import { useEffect } from "react"
import { useTypedSelector } from "../hooks/useTypedSelector"
import { useActions } from "../hooks/useActions"
import * as ItemActionCreators from '../store/actions/itemAction'
import { useParams } from 'react-router-dom'
import { getCurrentItem } from '../store/actions/itemAction'

const SingleItem = () => {
    const params = useParams();
    const itemId = Number(params.id);
    const {getCurrentItem} = useActions(ItemActionCreators)
    const {item} = useTypedSelector(state => state.item)

    useEffect(() => {getCurrentItem(itemId)}, [])
    
    
    return (
        <div className="container">
            <div>{item.title}</div>
        </div>
    )
}

export default SingleItem