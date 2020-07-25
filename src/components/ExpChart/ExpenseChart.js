import React, { Component } from "react";
import ExpGraph from "./ExpGraph";

export class ExpenseChart extends Component {
  render() {
    return (
      <div>
        <h3 className="p-1">ExpenseChart</h3>
       <ExpGraph></ExpGraph>
      </div>
    );
  }
}

export default ExpenseChart;
