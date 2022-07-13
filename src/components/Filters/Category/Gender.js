import React from 'react'
import FilterBTN from './FilterBTN'

function Gender({ setGender, setPageNumber }) {
    let genter = ["Female", "Male", "Genderless", "Unknown"]
    return (
        <>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Gender
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body d-flex flex-wrap gap-2">
                        {genter.map((item, index) => (
                            <FilterBTN
                                task={setGender}
                                setPageNumber={setPageNumber}
                                item={item}
                                key={index}
                                name="genter"
                                index={index} />))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Gender