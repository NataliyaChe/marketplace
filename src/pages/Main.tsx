import ProductList from "../components/ProductList"
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