import { Button } from 'reactstrap';
import React from 'react';
import PropTypes from 'prop-types'
import '../App.css';

const FilterButton = props => (
  <Button onClick={props.buttonClicked} value={props.value} className="mx-2" color="primary">
    {props.text}
  </Button>
);

FilterButton.propTypes = {
  buttonClicked:PropTypes.bool,
  value:PropTypes.string,
  text:PropTypes.string,
}

export default FilterButton;
