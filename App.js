import React, { Component } from 'react';
import './App.css';
import Title from './components/Title.js'
import FilterButton from './components/filterButton.js'
class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="jumbotron Container">
      <Title/>
      <div className ="formHeader">
      <p className="SearchOptionText"> Please select search options </p>
      <FilterButton value="Check Number"/>
      <FilterButton value="Check Date / Check Amount"/>
      <FilterButton value="Other Options"/> {/*Will need dropdown feature added*/}
      </div>
      <div className="remittanceSearch">
      <input type="text" class="form-control" placeholder="Search..">
      </input>
      <button className="btn btn-primary disabled"> Search </button>
      </div>
      </div>
      </div>
    );
  }
}

export default App;
