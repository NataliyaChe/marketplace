import { useEffect } from "react"
import { useTypedSelector } from "../hooks/useTypedSelector"
import { useActions } from "../hooks/useActions"
import * as ItemActionCreators from '../store/actions/itemAction'
import { useParams } from 'react-router-dom'
import { getCurrentItem, addToCart, setModal } from '../store/actions/itemAction'

const SingleItem = () => {
    const params = useParams();
    const itemId = Number(params.id);
    const {getCurrentItem} = useActions(ItemActionCreators)
    const {item, shoppingCart, modal} = useTypedSelector(state => state.item)
    const {addToCart} = useActions(ItemActionCreators)
    const {setModal} = useActions(ItemActionCreators)

    useEffect(() => {getCurrentItem(itemId)}, [])
    
    function addItem(event: any) {
        console.log('click');
        addToCart(item, shoppingCart)
        setModal()
        // fetch(`http://localhost:3004/cart`, {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(item)
        // })
        
    }

    return (
        <div className="container">
            <h2>{item.title}</h2>
            <button data-id={item.id} className="button" onClick={addItem}>
                            Add to cart
                        </button>
        </div>
    )
}

export default SingleItem