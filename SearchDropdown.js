import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import React, { Component } from 'react';
import PropTypes from 'prop-types'
import '../App.css';

class SearchDropdown extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen,
    }));
  }

  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret color="primary">
          Other Search Options
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem text="Provider Information" value="providerInfo" onClick={this.props.buttonClicked}>
            {' '}
            Provider Information
          </DropdownItem>
          <DropdownItem text="Patient Information" value="patientInfo" onClick={this.props.buttonClicked}>
            {' '}
            Patient Information
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}

SearchDropdown.propTypes = {
  buttonClicked:PropTypes.bool,
}

export default SearchDropdown;
