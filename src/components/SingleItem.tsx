import { useEffect } from "react"
import { useTypedSelector } from "../hooks/useTypedSelector"
import { useActions } from "../hooks/useActions"
import * as ItemActionCreators from '../store/actions/itemAction'

const SingleItem = () => {
    // const {item} = useTypedSelector(state => state.item)

    const {fetchItem} = useActions(ItemActionCreators)
    // const item = JSON.parse(localStorage.getItem('item') || '')
    // console.log('single item', item);


    const getItem = localStorage.getItem('item')
    const item = getItem ? JSON.parse(getItem) : null
    
    useEffect(() => {
        fetchItem(item.id)
    }, [])
    
    return (
        <div className="container">
            <div> Single Item</div>
            {/* <p>{parse.title}</p> */}
        </div>
    )
}

export default SingleItem