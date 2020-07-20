import React from "react";


const ButtonFilter = ({ toggleOpen }) => {

    return (
        <button className="btn" onClick={() => toggleOpen()}>
        <i class="fas fa-filter"> Filter</i>
        </button>
    )
};

export default ButtonFilter;
