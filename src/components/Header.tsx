import { Link } from 'react-router-dom';

function Header () {
    return (
        <div className="header container">
            <Link to='.' className='title'>
                Marketplace
            </Link>
            <button className="button cart-button">Cart</button>
        </div>
    )

}

export default Header