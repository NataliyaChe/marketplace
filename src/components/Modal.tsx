import { setModal } from "../store/actions/itemAction"
import { useActions } from "../hooks/useActions"
import { useTypedSelector } from "../hooks/useTypedSelector"
import * as ItemActionCreators from '../store/actions/itemAction'
import ShoppingCart from "./ShoppingCart"

function Modal() {
    const {setModal} = useActions(ItemActionCreators)

    return (
        <>
            <div className="backdrop" onClick={setModal}/>
            <div className="modal">
                <ShoppingCart />
            </div>
        </>
    )
}

export default Modal