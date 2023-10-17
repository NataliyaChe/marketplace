import { Link } from 'react-router-dom';
import { useActions } from "../hooks/useActions"
import { useTypedSelector } from "../hooks/useTypedSelector"
import * as ProductActionCreators from '../store/actions/productAction'
import Badge from './Badge';

function Header () {
    // const {setModal} = useActions(ProductActionCreators)
    // const {shoppingCart} = useTypedSelector(state => state.product)
    // const cartLength = shoppingCart.length

    return (
        <div className="header">
            <Link to='.' className='title'>
                Marketplace
            </Link>
            {/* {cartLength > 0 &&  */}
                <Badge />
            {/* }        */}
            <button 
                // onClick={setModal}  
                className='button cart-button'>
                    Cart
            </button>
        </div>
    )
}

export default Header