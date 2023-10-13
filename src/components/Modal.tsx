import { useActions } from "../hooks/useActions"
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