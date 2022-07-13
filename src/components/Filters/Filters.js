import React from 'react'
import Gender from './Category/Gender'
import Species from './Category/Species'
import Status from './Category/Status'

const Filters = ({ setStatus, setGender, setSpecies, setPageNumber }) => {
  const clear = () => {
    setStatus("");
    setGender("");
    setSpecies("");
    setPageNumber("");
    window.location.reload(false)
  }
  return (
    <>
      <div className="text-center fw-bold fs-4 mb-2">Filter</div>
      <div className="text-center mb-4">
        <button 
        onClick={clear}
        className="btn btn-primary">Clear</button>
      </div>

      <div className="accordion" id="accordionExample">

        <Status setStatus={setStatus} setPageNumber={setPageNumber} />
        <Gender setGender={setGender} setPageNumber={setPageNumber} />
        <Species setSpecies={setSpecies} setPageNumber={setPageNumber} />
      </div>
    </>
  )
}

export default Filters