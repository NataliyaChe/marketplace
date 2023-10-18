import ReactPaginate from 'react-paginate';
import { useAppDispatch } from "../hooks/useActions"
import { useAppSelector } from "../hooks/useTypedSelector"
import { setCurrentPage } from "../store/features/productSlice"

function Pagination() {
  const {products, productsPerPage} = useAppSelector(state => state.product)
  const dispatch = useAppDispatch()

  const totalPages = Math.ceil(products.length / productsPerPage)
  const changePage = (event: any) => { 
      const currentPage = event.selected+1
      const firstProduct = event.selected * productsPerPage
      const lastProduct = firstProduct + productsPerPage
      dispatch(setCurrentPage({currentPage, firstProduct, lastProduct}))   
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