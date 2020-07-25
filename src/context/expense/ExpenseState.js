import React, { useReducer } from "react";
import axios from "axios";
import ExpenseContext from "./expenseContext";
import ExpenseReducer from "./expenseReducer";
import {
  GET_SAVINGS,
  GET_EXPENSES,
  ADD_SAVINGS,
  ADD_EXPENSES,
  DELETE_EXPITEM,
  DELETE_SAVITEM,
  SET_ALERT
} from "../types";

const ExpenseState = props => {
  const initialState = {
    total: "",
    expenses: [],
    savings: [],
    alert: null
  };

  const [state, dispatch] = useReducer(ExpenseReducer, initialState);

  // Get List
  const getExpList = () => {
    axios
      .all([
        axios.get("http://localhost:5000/expenses"),
        axios.get("http://localhost:5000/savings")
      ])
      .then(
        axios.spread((...res) => {
          const resOne = res[0];
          const resTwo = res[1];
          dispatch({
            type: GET_EXPENSES,
            payload: resOne.data
          });
          dispatch({
            type: GET_SAVINGS,
            payload: resTwo.data
          });
        })
      )
      .catch(err => {
        dispatch({
          type: SET_ALERT,
          payload: err.response
        });
      });
  };

  // Add Earnings
  const addSavings = expense => {
    try {
      axios.post("http://localhost:5000/savings", expense).then(res => {
        dispatch({
          type: ADD_SAVINGS,
          payload: res.data
        });
      });
    } catch (err) {
      dispatch({
        type: SET_ALERT,
        payload: err.response
      });
    }
  };

  // Add Expenses
  const addExpenses = expense => {
    try {
      axios.post("http://localhost:5000/expenses", expense).then(res => {
        dispatch({
          type: ADD_EXPENSES,
          payload: res.data
        });
      });
    } catch (err) {
      dispatch({
        type: SET_ALERT,
        payload: err.response
      });
    }
  };

  // Delete Expenses
  const DeleteExpItem = id => {
    try {
      axios.delete(`http://localhost:5000/expenses/${id}`).then(res => {
        dispatch({
          type: DELETE_EXPITEM,
          payload: id
        });
      });
    } catch (err) {
      dispatch({
        type: SET_ALERT,
        payload: err.response
      });
    }
  };

  // Delete Savings
  const DeleteSavItem = id => {
    try {
      axios.delete(`http://localhost:5000/savings/${id}`).then(res => {
        dispatch({
          type: DELETE_SAVITEM,
          payload: id
        });
      });
    } catch (err) {
      dispatch({
        type: SET_ALERT,
        payload: err.response
      });
    }
  };

  return (
    <ExpenseContext.Provider
      value={{
        savings: state.savings,
        expenses: state.expenses,
        total: state.total,
        addExpenses,
        addSavings,
        getExpList,
        DeleteSavItem,
        DeleteExpItem
      }}
    >
      {props.children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseState;
