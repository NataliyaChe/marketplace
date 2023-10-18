import { Link } from 'react-router-dom';
import { useAppSelector } from "../hooks/useTypedSelector"
import { useAppDispatch } from "../hooks/useActions"
import Badge from './Badge';
import { setModal } from "../store/features/productSlice"

function Header () {
    const {shoppingCart} = useAppSelector(state => state.product)
    const cartLength = shoppingCart.length
    const dispatch = useAppDispatch()

    function openModal() {
        dispatch(setModal())
    }

    return (
        <div className="header">
            <Link to='.' className='title'>
                Marketplace
            </Link>
            {cartLength > 0 && 
                <Badge />
            }        
            <button 
                onClick={openModal}  
                className='button cart-button'>
                    Cart
            </button>
        </div>
    )
}

export default Header