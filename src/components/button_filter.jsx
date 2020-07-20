import React from "react";


const ButtonFilter = () => {

    handleCLick = (event) => {
        this.props.open(event.target.value);
      }

    return (
        <button className="btn" onClick={this.handleCLick}>
        <i class="fas fa-filter"> Filter</i>
        </button>
    )
};

export default ButtonFilter;
