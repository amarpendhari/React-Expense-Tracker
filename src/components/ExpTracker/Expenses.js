import React, { Component } from "react";
import ExpList from "./ExpenseList";
import ExpenseContext from "../../context/expense/expenseContext";
import SavingsList from "./SavingsList";

export class Expenses extends Component {
  static contextType = ExpenseContext;

  state = {
    amount: "",
    title: "",
    selectedOption: "expenses",
    total: 0,
    List: []
  };
  componentDidMount() {
    this.context.getExpList();
  }
  handleOptionChange = e => {
    this.setState({
      selectedOption: e.target.value
    });
  };
  handleChange = e => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const expense = {
      id: Math.random() * 10000,
      title: this.state.title,
      amount: this.state.amount,
      type: this.state.selectedOption,
      date: new Date()
    };
    if (this.state.selectedOption === "savings") {
      this.context.addSavings(expense);
    } else {
      this.context.addExpenses(expense);
    }
    this.setState({ amount: "" });
    this.setState({ title: "" });
    this.setState({ selectedOption: "expenses" });
  };
  delete = id => {
    console.log(id);
  };
  render() {
    return (
      <div className="Expenses">
        <h3>
          Total Balance : ₹
          {this.context.savings.reduce(
            (total, sav) => total + parseInt(sav.amount),
            0
          ) -
            this.context.expenses.reduce(
              (total, exp) => total + parseInt(exp.amount),
              0
            )}
        </h3>
        <form className="m-1" onSubmit={this.onSubmit}>
          <div className="d-flex-aic m">
            <div className="radio">
              <label>
                <input
                  type="radio"
                  value="expenses"
                  checked={this.state.selectedOption === "expenses"}
                  onChange={this.handleOptionChange}
                />
                Expenses
              </label>
            </div>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  value="savings"
                  checked={this.state.selectedOption === "savings"}
                  onChange={this.handleOptionChange}
                />
                Savings
              </label>
            </div>
          </div>
          <div style={{ justifyContent: "center" }}>
            <input
              type="number"
              placeholder="Enter Amount here...."
              name="amount"
              value={this.state.amount}
              onChange={this.handleChange}
              required
            ></input>
            <input
              type="text"
              placeholder="Enter Description...."
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
              required
            ></input>
          </div>
          <button className="m btn btn-light">
            {this.state.selectedOption === "savings"
              ? "Add Savings"
              : "Add Expenses"}
          </button>
        </form>
        <div className="">
          {this.context.expenses[0] ? (
            <p>Expense List</p>
          ) : (
            <p>No Expense List. Add your Expenses</p>
          )}
          {this.context.expenses.map(expItem => (
            <ExpList key={expItem.id} expItem={expItem}></ExpList>
          ))}
        </div>
        <div className="">
          {this.context.savings[0] ? <p>Savings List</p> : <p></p>}
          {this.context.savings.map(savItem => (
            <SavingsList
              deleteSav={this.delete}
              key={savItem.id}
              savItem={savItem}
            ></SavingsList>
          ))}
        </div>
      </div>
    );
  }
}

export default Expenses;
