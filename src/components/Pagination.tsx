import ReactPaginate from 'react-paginate';
import * as ItemActionCreators from '../store/actions/itemAction'
import { useTypedSelector } from "../hooks/useTypedSelector"
import { useActions } from "../hooks/useActions"
import { setCurrentPage } from "../store/actions/itemAction"

function Pagination() {
    const {items, currentPage, itemsPerPage} = useTypedSelector(state => state.item)
    const {setCurrentPage} = useActions(ItemActionCreators)
    const totalPages = Math.ceil(items.length / itemsPerPage)
    const changePage = (event: any) => {
        const paginateParams = {
            currentPage: event.selected+1,
            firstItem: event.selected * itemsPerPage,
            lastItem: (event.selected * itemsPerPage) + itemsPerPage
        }
        // const currentPage = event.selected+1
        // const firstItem = event.selected * itemsPerPage
        // const lastItem = firstItem + itemsPerPage
        setCurrentPage(paginateParams)
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