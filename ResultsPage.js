import React from 'react';
import PropTypes from 'prop-types'
import { Table } from 'reactstrap';
import '../App.css';
import RemitData from '../sample.json';

const ResultsPage = () => (
  <div>
    <h1>Results Page</h1>
    {RemitData.map( remittance => (
      <div>
        <Table>
          <thead>
            <tr>
              <th>CheckNumber</th>
              <th>CheckAmount</th>
              <th>CheckDate</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{remittance.CheckNumber}</td>
              <td>{remittance.CheckAmount}</td>
              <td>{remittance.CheckDate}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    ))}
  </div>
);

Table.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  size: PropTypes.string,
  bordered: PropTypes.bool,
  borderless: PropTypes.bool,
  striped: PropTypes.bool,
  dark: PropTypes.bool,
  hover: PropTypes.bool,
  responsive: PropTypes.bool,
  // Custom ref handler that will be assigned to the "ref" of the inner <table> element
  innerRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.object
  ])
  };

export default ResultsPage;
