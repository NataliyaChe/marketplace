import { setModal } from "../store/actions/itemAction"
import { useActions } from "../hooks/useActions"
import { useTypedSelector } from "../hooks/useTypedSelector"
import * as ItemActionCreators from '../store/actions/itemAction'

function Modal() {
    const {setModal} = useActions(ItemActionCreators)
    
    const submitOrder = (event: any) => {
        console.log('confirm click');
        
    }

    return (
        <>
            <div className="backdrop" onClick={setModal}/>
            <div className="modal">
                <h2 className="modal-title">Shopping cart:</h2>
                <button className="button" onClick={submitOrder}>
                    Confirm
                </button>
            </div>
        </>
    )
}

export default Modal