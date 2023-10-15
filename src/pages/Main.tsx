import ProductList from "../components/Productlist"
import Pagination from "../components/Pagination"

function Main() {
    return (
        <div className="main container">
            <ProductList />
            <Pagination />
        </div>
    )
}

export default Main