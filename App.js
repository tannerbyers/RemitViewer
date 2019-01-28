import React, { Component } from "react";
import "./App.css";
import Title from "./components/Title.js";
import FilterButton from "./components/FilterButton.js";
import SearchField from "./components/SearchField.js";
import { Button, Row, Form} from 'reactstrap';
import SearchDropdown from "./components/SearchDropdown.js"

class App extends Component {
  state = {
    searchKey: "Check Number"
  };

  buttonClicked = e => {
    this.setState({ searchKey: e.target.value });
  };

  render() {
    console.log("The button clicked was " + this.state.searchKey);

    return (
      <div className="App">
        <div className="container">
        <Form>
          <Title />
          <div className="formHeader">
            <p className="SearchOptionText"> Please select search options </p>
            <Row className="my-4 d-flex flex-wrap justify-content-center">
            <FilterButton buttonClicked={this.buttonClicked} text="Check Number" value="checkNum" />
            <FilterButton
              buttonClicked={this.buttonClicked}
              value="checkDteAmt"
              text="Check Date / Amount"
            />
            <SearchDropdown color="primary" buttonClicked={this.buttonClicked}/>
            </Row>
          </div>
          <Row className="my-4 d-flex flex-wrap justify-content-center">
          <SearchField className="my-4" value={this.state.searchKey} />
          </Row>
          </Form>
        </div>
      </div>
    );
  }
}

export default App;