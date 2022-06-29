import React from 'react'

const Cards = ({ results }) => {
    console.log(results);
    let display
    if (results) {

        display = results.map((x) => {
            let { id, name, image, location, status } = x
            return (
                <div key={id} className="col-4 position-relative">
                    <div className="card mb-4">
                        <img className="card-img-top" src={image} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">Last Location <br /><span className="fs-5">{location.name}</span></p>
                            {
                                (() => {
                                    if (status === "Alive") {
                                        return (
                                            <span className="badge btn-success position-absolute top-0 start-5 translate-middle">{status}</span>
                                        )

                                    } else if (status === "Dead") {
                                        return (
                                            <span className="badge btn-danger position-absolute top-0 start-5 translate-middle">{status}</span>
                                        )
                                    } else {
                                        return (
                                            <span className="badge btn-secondary position-absolute top-0 start-5 translate-middle">{status}</span>
                                        )
                                    }
                                })()
                            }
                        </div>
                    </div>

                </div>
            )
        })


    } else {
        display = `No data found`
    }
    return (

        <>{display}</>

    )
}

export default Cards