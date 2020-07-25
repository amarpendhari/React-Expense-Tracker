import React, { Component } from "react";
import Expenses from "./Expenses";

export class ExpenseTracker extends Component {
  render() {
    return (
      <div className="ExpenseApp">
        <h2 className="p-1">Expense Tracker</h2>
        <Expenses></Expenses>
      </div>
    );
  }
}

export default ExpenseTracker;
