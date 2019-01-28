import React, { Component } from "react";
import "./App.css";
import Title from "./components/Title.js";
import FilterButton from "./components/FilterButton.js";
import SearchField from "./components/SearchField.js";
import { Button, Row, Form} from 'reactstrap';
import SearchDropdown from "./components/SearchDropdown.js"
import SubmitButton from "./components/SubmitButton.js"

class App extends Component {
  state = {
    searchKey: "Check Number"
  };

  readTextFile = (file) =>
  {
      var rawFile = new XMLHttpRequest();
      rawFile.open("GET", file, false);
      rawFile.onreadystatechange = function ()
      {
          if(rawFile.readyState === 4)
          {
              if(rawFile.status === 200 || rawFile.status == 0)
              {
                  var allText = rawFile.responseText;
                  alert(allText);
              }
          }
      }
      rawFile.send(null);
  }

  buttonClicked = e => {
    this.setState({ searchKey: e.target.value });
  };

  submitted = e => {
    this.readTextFile('http://tannerbyers.com/test.era');
  }

  render() {
    console.log("The button clicked was " + this.state.searchKey);

    return (
      <div className="App">
        <div className="container jumbotron my-4">
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
          <SearchField value={this.state.searchKey} />
          </Row>
          </Form>
          <div className="searchButton my-4">
          <SubmitButton submitted={this.submitted} className="btn btn-primary"> Search </SubmitButton>
        </div>
        </div>
      </div>
    );
  }
}

export default App;