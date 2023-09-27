import { Link } from 'react-router-dom';
import { setModal } from "../store/actions/itemAction"
import { useActions } from "../hooks/useActions"
import { useTypedSelector } from "../hooks/useTypedSelector"
import * as ItemActionCreators from '../store/actions/itemAction'
import Badge from './Badge';

function Header () {
    const {setModal} = useActions(ItemActionCreators)

    return (
        <div className="header">
            <Link to='.' className='title'>
                Marketplace
            </Link>
            <Badge />
            <button className="button cart-button" onClick={setModal}>Cart</button>
        </div>
    )
}

export default Header