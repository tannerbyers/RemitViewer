import React, { Component } from "react";
import "./App.css";
import Title from "./components/Title.js";
import FilterButton from "./components/FilterButton.js";
import SearchField from "./components/SearchField.js";

class App extends Component {
  state = {
    Testvalue: ""
  };

  buttonClicked() {
    console.log("button clicked");
    this.setState({ Testvalue: event.target.value });
    console.log(this.state.Testvalue);
  }

  render() {
    return (
      <div className="App">
        <div className="jumbotron Container">
          <Title />
          <div className="formHeader">
            <p className="SearchOptionText"> Please select search options </p>
            <FilterButton onClick={this.buttonClicked} value="Check Number" />
            <button onClick={this.buttonClicked}> test button </button>
            <FilterButton
              onClick={this.buttonClicked}
              value="Check Date / Check Amount"
            />
            <FilterButton onClick={this.buttonClicked} value="Other Options" />{" "}
            {/*Will need dropdown feature added*/}
          </div>
          <SearchField placeholder="" />
        </div>
      </div>
    );
  }
}

export default App;
