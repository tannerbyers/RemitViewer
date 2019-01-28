import React, { Component } from "react";
import "../App.css";
import Title from "./Title.js";
import FilterButton from "./FilterButton.js";
import { Input, Button } from 'reactstrap';

const SearchField = props => {
  if (props.value === "checkDteAmt") {
    return (
      <div className="remittanceSearch">
      <h2>Check Amount</h2>
        <Input placeholder="Please Enter Check Amount" className="form-control SearchField my-4" />
        <p>Check Date</p>
        <div className="d-flex flex-row">
        <Input
          placeholders="Check Date From"
          className="form-control date-search-from"
          type="date"
        />
        <Input
          placeholder="Check Date To"
          className="form-control date-search-to mx-4"
          type="date"
        />
        </div>
        <div className="searchButton my-4">
          <Button className="btn btn-primary disabled"> Search </Button>
        </div>
      </div>
    );
  }

  if (props.value === "providerInfo") {
    return (
      <div className="remittanceSearch">
      <h2>Provider NPI/TAXID Search</h2>
        <Input placeholder="Please Enter NPI/Taxid" className="form-control SearchField my-4" />
        <p>Check Date</p>
        <div className="d-flex flex-row">
        <Input
          placeholders="Check Date From"
          className="form-control date-search-from"
          type="date"
        />
        <Input
          placeholder="Check Date To"
          className="form-control date-search-to mx-4"
          type="date"
        />
        </div>
        <div className="searchButton my-4">
          <Button className="btn btn-primary disabled"> Search </Button>
        </div>
      </div>
    );
  }

  if (props.value === "patientInfo") {
    return (
      <div className="remittanceSearch">
      <h2>Patient Search</h2>
        <Input placeholder="Please Enter Member ID" className="form-control SearchField my-4" />
        <div className="d-flex flex-row">
        <Input placeholder="Patient First Name"/>
        <Input placeholder="Patient Last Name" className="mx-4"/>
        </div>
        <p>Check Date</p>
        <div className="d-flex flex-row">
        <Input
          placeholders="Check Date From"
          className="form-control date-search-from"
          type="date"
        />
        <Input
          placeholder="Check Date To"
          className="form-control date-search-to mx-4"
          type="date"
        />
        </div>
        <div className="searchButton my-4">
          <Button className="btn btn-primary disabled"> Search </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="remittanceSearch">
    <h2>Check Number</h2>
      <Input placeholder="Please Enter Check #" className="form-control SearchField" />
      <div className="searchButton my-4">
        <Button className="btn btn-primary disabled"> Search </Button>
      </div>
    </div>
  );
};

export default SearchField;