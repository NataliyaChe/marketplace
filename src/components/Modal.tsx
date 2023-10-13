import { setModal } from "../store/actions/productAction"
import { useActions } from "../hooks/useActions"
import { useTypedSelector } from "../hooks/useTypedSelector"
import * as ProductActionCreators from '../store/actions/productAction'
import ShoppingCart from "./ShoppingCart"

function Modal() {
    const {setModal} = useActions(ProductActionCreators)

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