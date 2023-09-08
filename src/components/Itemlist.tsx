import { useEffect } from "react"
import { fetchItems } from "../store/actions/itemAction"
import { useActions } from "../hooks/useActions"
import { useTypedSelector } from "../hooks/useTypedSelector"

const Itemlist: React.FC = () => {
    const {items, loading, error} = useTypedSelector(state => state.item)
    const {fetchItems} = useActions()

    useEffect(() => {
        fetchItems()
    }, [])

    if(loading) {
        return <h1>Is loading...</h1>
    }

    if(error) {
        return <h1>{error}</h1>
    }
    return (
        <div className="itemlist">
            {items.map(item =>
                <div key={item.id}>{item.title}</div>)}
        </div>
    )
}

export default Itemlist