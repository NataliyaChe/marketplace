import Productlist from "../components/Productlist"
import Pagination from "../components/Pagination"

function Main() {
    return (
        <div className="main container">
            <Productlist />
            <Pagination />
        </div>
    )
}

export default Main