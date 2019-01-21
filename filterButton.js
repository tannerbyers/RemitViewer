import React, { Component } from 'react';
import '../App.css';

class filterButton extends Component {

render(){
  return (
    <div>
    <button className="btn btn-info">{this.props.value}</button>
    </div>
  );
}
}

export default filterButton
