import React, { Component } from "react";
import "./App.css";
import Title from "./components/Title.js";
import FilterButton from "./components/FilterButton.js";
import SearchField from "./components/SearchField.js";

class App extends Component {
  state = {
    currentValue: "Test Value"
  };

  buttonClicked = () => {
    console.log("button clicked");
    this.setState(state => {
      return { currentValue: event.target.value };
    });
    console.log(this.state.currentValue);
  };

  render() {
    return (
      <div className="App">
        <div className="jumbotron Container">
          <Title />
          <div className="formHeader">
            <p className="SearchOptionText"> Please select search options </p>
            <FilterButton
              buttonClicked={this.buttonClicked}
              value="Check Number"
            />
            <FilterButton
              buttonClicked={this.buttonClicked}
              value="Check Date / Check Amount"
            />
            <FilterButton
              buttonClicked={this.buttonClicked}
              value="Other Options"
            />{" "}
            {/*Will need dropdown feature added*/}
          </div>
          <SearchField placeholder="" />
        </div>
      </div>
    );
  }
}

export default App;
