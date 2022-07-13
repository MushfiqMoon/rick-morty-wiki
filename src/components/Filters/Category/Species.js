import React from 'react'
import FilterBTN from './FilterBTN'

function Species({ setSpecies, setPageNumber }) {
    let species = [
        "Human",
        "Alien",
        "Humanoid",
        "Poopybutthole",
        "Mythological",
        "Unknown",
        "Animal",
        "Disease",
        "Robot",
        "Cronenberg",
        "Planet",
    ];
    return (
        <>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Species
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body d-flex flex-wrap gap-2">
                        {species.map((item, index) => (
                            <FilterBTN
                                task={setSpecies}
                                setPageNumber={setPageNumber}
                                item={item}
                                key={index}
                                name="species"
                                index={index} />))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Species