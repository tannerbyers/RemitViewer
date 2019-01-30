import { Input } from 'reactstrap';
import React from 'react';
import PropTypes from 'prop-types'
import '../App.css';

const SearchField = props => {
  if (props.value === 'checkDteAmt') {
    return (
      <div className="remittanceSearch">
        <h2>Check Amount</h2>
        <Input placeholder="Please Enter Check Amount" className="form-control SearchField my-4" />
        <p>Check Date</p>
        <div className="d-flex flex-row">
          <Input placeholders="Check Date From" className="form-control date-search-from" type="date" />
          <Input placeholder="Check Date To" className="form-control date-search-to mx-4" type="date" />
        </div>
      </div>
    );
  }

  if (props.value === 'providerInfo') {
    return (
      <div className="remittanceSearch">
        <h2>Provider NPI/TAXID Search</h2>
        <Input placeholder="Please Enter NPI/Taxid" className="form-control SearchField my-4" />
        <p>Check Date</p>
        <div className="d-flex flex-row">
          <Input placeholders="Check Date From" className="form-control date-search-from" type="date" />
          <Input placeholder="Check Date To" className="form-control date-search-to mx-4" type="date" />
        </div>
      </div>
    );
  }

  if (props.value === 'patientInfo') {
    return (
      <div className="remittanceSearch">
        <h2>Patient Search</h2>
        <Input placeholder="Please Enter Member ID" className="form-control SearchField my-4" />
        <div className="d-flex flex-row my-4">
          <Input placeholder="Patient First Name" />
          <Input placeholder="Patient Last Name" className="mx-4" />
        </div>
        <p>Check Date</p>
        <div className="d-flex flex-row">
          <Input placeholders="Check Date From" className="form-control date-search-from" type="date" />
          <Input placeholder="Check Date To" className="form-control date-search-to mx-4" type="date" />
        </div>
      </div>
    );
  }

  return (
    <div className="remittanceSearch">
      <h2>Check Number</h2>
      <Input placeholder="Please Enter Check #" className="form-control SearchField" />
    </div>
  );
};

SearchField.propTypes = {
  value: PropTypes.string,
}

export default SearchField;
