import React from "react";
import ButtonFilter from "./button_filter";
import DropdownCard from "./dropdown_card";


class ButtonWithDd extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            open: false,
        };
    }
    
    open = () => {
        this.setState({
        open: !this.state.open
        });
    }

    render() {
        return (
        <div>
          <ButtonFilter open={this.open} />
          <DropdownCard setOpen={setOpen} />
        </div>
      );
    }
}

export default ButtonWithDd;
