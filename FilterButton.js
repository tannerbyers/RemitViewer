import React, { Component } from "react";
import "../App.css";
import Title from "./Title.js";
import SearchField from "./SearchField.js";
import { Button } from 'reactstrap';


class FilterButton extends Component {
  render() {
    return (

         <Button 
          onClick={this.props.buttonClicked}
          value={this.props.value}
          className="mx-2"
          color="primary"
        >
          {this.props.text}
        </Button>
    );
  }
}

export default FilterButton;