import React from "react";

const DropdownCard = ({ open }) => {

    const filters = require("../filters.json");
    
    if (!open) { return "" }; 

    return (
        <div className="dropdownCard">
            <label className="filterList">
            {filters.saved_filters.map((filter) => (
                <option key={filter.id} >
                {filter.category}
                </option>
            ))}
            </label>
        </div>
    )
};

export default DropdownCard;