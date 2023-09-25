import { useEffect } from "react"
import { fetchItems, getCurrentItem, addToCart, setModal } from "../store/actions/itemAction"
import { useActions } from "../hooks/useActions"
import { useTypedSelector } from "../hooks/useTypedSelector"
import * as ItemActionCreators from '../store/actions/itemAction'
import { useNavigate } from 'react-router-dom'

const Itemlist: React.FC = () => {
    const {items, loading, error, currentPage, firstItem, lastItem,  shoppingCart, totalCost} = useTypedSelector(state => state.item)
    const {fetchItems} = useActions(ItemActionCreators)
    let navigate = useNavigate()
    const {setModal} = useActions(ItemActionCreators)
    const {addToCart} = useActions(ItemActionCreators)


    useEffect(() => {
        fetchItems(currentPage)
    }, [currentPage])

    const paginatedItems = (items.slice(firstItem, lastItem));

    function getItem(event: any) { 
        const itemId = event.target.dataset.id
        navigate(`/${itemId}`)
    }

    function addItem(event: any) {
        const itemId = event.target.dataset.id
        const item = items.find(item => item.id === Number(itemId) )
        
        addToCart(item, shoppingCart, totalCost)
        setModal()       
    }

    if(loading) {
        return <h1>Is loading...</h1>
    }

    if(error) {
        return <h1>{error}</h1>
    }
    
    return (
        <div className="itemlist">
            {paginatedItems.map(targetItem =>
                <div key={targetItem.id} data-id={targetItem.id}  className="item">
                    <p>{targetItem.title}</p>
                    <div className="flex-wrap">
                        <button data-id={targetItem.id} className="button" onClick={getItem}>
                            More
                        </button>
                        <button data-id={targetItem.id} className="button" onClick={addItem}>
                            Add to cart
                        </button>
                    </div>
                    
                </div>
            )}
        </div>
    )
}

export default Itemlist