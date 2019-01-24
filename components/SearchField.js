import React, { Component } from "react";
import "../App.css";
import Title from "./Title.js";
import FilterButton from "./FilterButton.js";

const SearchField = () => {
  return (
    <div className="remittanceSearch">
      <input placeholder="Check Number" className="form-control" />
      <button className="btn btn-primary disabled"> Search </button>
    </div>
  );
};

export default SearchField;
