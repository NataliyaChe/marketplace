import { useEffect } from "react"
import { fetchItems, fetchItem } from "../store/actions/itemAction"
import { useActions } from "../hooks/useActions"
import { useTypedSelector } from "../hooks/useTypedSelector"
import * as ItemActionCreators from '../store/actions/itemAction'
import {useNavigate} from 'react-router-dom';

const Itemlist: React.FC = () => {
    const {items, loading, error, item} = useTypedSelector(state => state.item)
    const {fetchItems} = useActions(ItemActionCreators)
    const {fetchItem} = useActions(ItemActionCreators)
    let navigate = useNavigate();

    useEffect(() => {
        fetchItems()
        console.log('itemlist', items[1]); 
    }, [])

    // const getItem = () => {
    //     // fetchItem()
    //     console.log('get item', fetchItem())
    //     console.log('data', item);  
    // }
    function getItem(event: any) { 
        const itemId = event.target.dataset.id
        fetchItem(itemId)
        // const targetItem = JSON.parse(localStorage.getItem('item') || "")
        navigate(`/${itemId}`)
    }

    if(loading) {
        return <h1>Is loading...</h1>
    }

    if(error) {
        return <h1>{error}</h1>
    }

    return (
        <div className="itemlist">
            {items.map(targetItem =>
                <div key={targetItem.id} data-id={targetItem.id} onClick={getItem} className="item">
                    <p>{targetItem.title}</p>
                    <div className="flex-wrap">
                        <button data-id={targetItem.id} className="button">
                            More
                        </button>
                        <button data-id={targetItem.id} className="button">
                            Add to cart
                        </button>
                    </div>
                    
                </div>
            )}
        </div>
    )
}

export default Itemlist