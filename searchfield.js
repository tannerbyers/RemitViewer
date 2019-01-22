import React, { Component } from 'react';
import '../App.css';
import Title from './Title.js'
import FilterButton from './filterButton.js'

class SearchField extends Component {

  constructor(props) {
      super(props);
      this.state = {
        key: "Check Number",
        }
    }


render(){
  return (
    <div className="remittanceSearch">
    <input type="text" class="form-control" placeholder={this.state.key}>
    </input>
    <button className="btn btn-primary disabled"> Search </button>
    </div>
  );
}
}

export default SearchField
