import { Button, Row, Form } from 'reactstrap';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import Title from './Title';
import FilterButton from './FilterButton';
import SearchField from './SearchField';
import SearchDropdown from './SearchDropdown';
import Header from './Header'
import Footer from './Footer'

class SearchPage extends Component {
  state = {
    searchKey: 'Check Number',
  };

  buttonClicked = e => {
    this.setState({ searchKey: e.target.value });
  };

  render() {
    console.log(`The button clicked was ${this.state.searchKey}`);

    return (
      <div className="App">
        <Header />
        <div className="container jumbotron my-4">
          <Form>
            <Title />
            <div className="formHeader">
              <p className="SearchOptionText"> Please select search options </p>
              <Row className="my-4 d-flex flex-wrap justify-content-center">
                <FilterButton buttonClicked={this.buttonClicked} text="Check Number" value="checkNum" />
                <FilterButton buttonClicked={this.buttonClicked} value="checkDteAmt" text="Check Date / Amount" />
                <SearchDropdown color="primary" buttonClicked={this.buttonClicked} />
              </Row>
            </div>
            <Row className="my-4 d-flex flex-wrap justify-content-center">
              <SearchField value={this.state.searchKey} />
            </Row>
          </Form>
          <div className="searchButton my-4">
            <Button color="primary" onClick={this.props.submitted}>
              Search
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

SearchPage.propTypes = {
  submitted: PropTypes.bool,
}

export default SearchPage;
