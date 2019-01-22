import React, { Component } from 'react';
import '../App.css';
import Title from './Title.js'
import FilterButton from './filterButton.js'
import SearchField from './searchfield.js'

class filterButton extends Component {

render(){
  return (
    <div>
    <button className="btn btn-info" >{this.props.value}</button>
    </div>
  );
}
}

export default filterButton
