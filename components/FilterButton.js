import React, { Component } from "react";
import "../App.css";
import Title from "./Title.js";
import SearchField from "./SearchField.js";

class FilterButton extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.buttonClicked}
          className="btn btn-info"
          value={this.props.value}
        >
          {this.props.value}
        </button>
      </div>
    );
  }
}

export default FilterButton;
