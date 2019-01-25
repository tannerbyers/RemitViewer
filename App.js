import React, { Component } from "react";
import "./App.css";
import Title from "./components/Title.js";
import FilterButton from "./components/FilterButton.js";
import SearchField from "./components/SearchField.js";

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
        <div className="jumbotron Container">
          <Title />
          <div className="formHeader">
            <p className="SearchOptionText"> Please select search options </p>
            <FilterButton buttonClicked={this.buttonClicked} value="checkNum" />
            <FilterButton
              buttonClicked={this.buttonClicked}
              value="checkDteAmt"
            />
            <FilterButton buttonClicked={this.buttonClicked} value="other" />
            {/*Will need dropdown feature added*/}
          </div>
          <SearchField value={this.state.searchKey} />
        </div>
      </div>
    );
  }
}

export default App;
