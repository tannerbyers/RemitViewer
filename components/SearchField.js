import React, { Component } from "react";
import "../App.css";
import Title from "./Title.js";
import FilterButton from "./FilterButton.js";

const placeholders = {
  checkNum: "Check Number",
  checkDteAmt: "Check Amount"
};

const SearchField = props => {
  if (props.value === "checkDteAmt") {
    return (
      <div className="remittanceSearch">
        <input placeholder="Check Amount" className="form-control" />
        <input
          placeholder="Check Date"
          className="form-control date-search-from"
          type="date"
        />
        <input
          placeholder="Check Date"
          className="form-control date-search-to"
          type="date"
        />
        <div className="searchButton">
          <button className="btn btn-primary disabled"> Search </button>
        </div>
      </div>
    );
  }
  return (
    <div className="remittanceSearch">
      <input placeholder={props.value} className="form-control" />
      <div className="searchButton">
        <button className="btn btn-primary disabled"> Search </button>
      </div>
    </div>
  );
};

export default SearchField;
