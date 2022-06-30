import React from 'react'

const Pagination = ({ pageNumber, setPageNumber }) => {

    let handleNext = () => {
        setPageNumber((x) => x + 1)

    }
    let handlePrev = () => {
        if (pageNumber === 1) return;
        setPageNumber((x) => x - 1)
    }


    return (
        <>
            <nav className="d-flex justify-content-center" aria-label="...">
                <ul className="pagination">
                    <li className="page-item">
                        <button className="page-link" onClick={handlePrev} >Previous</button>
                    </li>
                    {/* <li className="page-item"><a class="page-link" href="#">1</a></li>
                    <li className="page-item active">
                        <a className="page-link" href="#">2 <span class="sr-only">(current)</span></a>
                    </li>
                    <li className="page-item"><a class="page-link" href="#">3</a></li> */}
                    <li className="page-item">
                        <button className="page-link" onClick={handleNext}>Next</button>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Pagination