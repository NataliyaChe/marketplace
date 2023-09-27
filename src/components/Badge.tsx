import { useActions } from "../hooks/useActions"
import { useTypedSelector } from "../hooks/useTypedSelector"
import * as ItemActionCreators from '../store/actions/itemAction'

function Badge () {
    const {shoppingCart} = useTypedSelector(state => state.item)

    return (
        <div className="badge">
            <span className="badge-text">{shoppingCart.length}</span>
        </div>
    )
}

export default Badge