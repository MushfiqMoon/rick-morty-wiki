import React from 'react'
import ReactPaginate from 'react-paginate';
import "./Pagination.css"

const Pagination = ({ info, pageNumber, setPageNumber }) => {

    // let {pages} = info;
    // console.log(info?.pages);

    // let handleNext = () => {
    //     setPageNumber((x) => x + 1)

    // }
    // let handlePrev = () => {
    //     if (pageNumber === 1) return;
    //     setPageNumber((x) => x - 1)
    // }


    return (
        <>
            {/* <nav className="d-flex justify-content-center" aria-label="...">
                <ul className="pagination">
                    <li className="page-item">
                        <button className="page-link" onClick={handlePrev} >Previous</button>
                    </li>
                    <li className="page-item">
                        <button className="page-link" onClick={handleNext}>Next</button>
                    </li>
                </ul>
            </nav> */}
            <ReactPaginate
                forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
                className="pagination justify-content-center gap-3"
                previousLabel="&laquo;"
                previousClassName="btn btn-outline-primary"
                nextLabel="&raquo;"
                nextClassName="btn btn-outline-primary"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                activeClassName="active"
                pageCount={info?.pages}
                onPageChange={(data) => { setPageNumber(data.selected + 1); }}
            />
        </>
    )
}

export default Pagination