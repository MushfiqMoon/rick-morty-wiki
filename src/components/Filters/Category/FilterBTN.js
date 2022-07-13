import React from 'react'

function FilterBTN({ item, name, index, task, setPageNumber }) {
    return (
        <>
            <style>
                {`
                .x:checked + label{
                        background-color : #0b5ed7;
                        color: #ffffff;
                    }
                    input[type='radio']{
                        display : none;
                    }
                    `}
            </style>
            <div>
                <input
                    onClick={()=>{
                        setPageNumber(1);
                        task(item)
                    }}
                    className="form-check-input x"
                    type="radio"
                    name={name}
                    id={`${name}-${index}`} />
                <label className="btn btn-outline-primary" htmlFor={`${name}-${index}`}>
                    {item}
                </label>
            </div>



        </>
    )
}

export default FilterBTN