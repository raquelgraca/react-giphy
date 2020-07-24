import React from "react";


const ButtonFilter = ({ toggleOpen }) => {

    return (
        <button className="btn" onClick={() => toggleOpen()}>
            Filter
        </button>
    )
};

export default ButtonFilter;
