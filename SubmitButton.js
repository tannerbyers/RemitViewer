import React, { Component } from "react";
import "../App.css";
import Title from "./Title.js";
import SearchField from "./SearchField.js";
import { Button } from 'reactstrap';


class SubmitButton extends Component {
  render() {
    return (
        <Button 
        onClick={this.props.submitted}
        className="mx-2"
        color="primary"
      >
        <p>Search</p>
      </Button>
    );
  }
}

export default SubmitButton