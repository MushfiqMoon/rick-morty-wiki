import React from 'react'
import './Search.css'

function Search({ setPageNumber, setSearch }) {
    return (
        <>
            <form className="d-flex justify-content-center mb-5">

                <input
                    onChange={(e) => {
                        setPageNumber(1);
                        setSearch(e.target.value);
                    }}
                    type="text" className="form-control wiki-form mx-2" />
                {/* <button onClick={e=>e.preventDefault()} className="btn btn-primary fs-5">Clear</button> */}
                <button  className="btn btn-primary fs-5">Clear</button>



            </form>
        </>

    )
}

export default Search