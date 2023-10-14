import ReactPaginate from 'react-paginate';
import * as ProductActionCreators from '../store/actions/productAction'
import { useTypedSelector } from "../hooks/useTypedSelector"
import { useActions } from "../hooks/useActions"

function Pagination() {
    const {products, productsPerPage} = useTypedSelector(state => state.product)
    const {setCurrentPage} = useActions(ProductActionCreators)
    const totalPages = Math.ceil(products.length / productsPerPage)
    const changePage = (event: any) => { 
        const currentPage = event.selected+1
        const firstProduct = event.selected * productsPerPage
        const lastProduct = firstProduct + productsPerPage
        setCurrentPage(currentPage, firstProduct, lastProduct)
    }

    return (
      <div className='pagination'>
        <ReactPaginate
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item previous"
          previousLinkClassName="page-link previous-link"
          nextClassName="page-item next"
          nextLinkClassName="page-link next-link"
          marginPagesDisplayed={2}
          containerClassName="pagination"
          activeClassName="active"
          activeLinkClassName="active-link"
          breakLabel="..."
          breakClassName="break"
          nextLabel=">"
          onPageChange={changePage}
          pageRangeDisplayed={5}
          pageCount={totalPages}
          previousLabel="<"
          renderOnZeroPageCount={null}
        />
      </div>
    );
  }
  
  export default Pagination;