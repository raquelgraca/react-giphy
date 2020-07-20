import React from "react";

const DropdownCard = ({ setOpen }) => {

    const filters = require("../filters.json");
    return (
        <div className="dropdownCard">
            <label className="filterList">
            {filters.saved_filters.map((filter) => (
                <option key={filter.id} className="liDropdown" onClick={() => setOpen(false)}>
                {filter.category}
                </option>
            ))}
            </label>
        </div>
    )
};

export default DropdownCard;