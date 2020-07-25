import {
  GET_SAVINGS,
  GET_EXPENSES,
  ADD_SAVINGS,
  ADD_EXPENSES,
  DELETE_EXPITEM,
  DELETE_SAVITEM,
  SET_ALERT
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_SAVINGS:
      return {
        ...state,
        savings: [...action.payload]
      };
    case GET_EXPENSES:
      return {
        ...state,
        expenses: [...action.payload]
      };
    case ADD_SAVINGS:
      return {
        ...state,
        savings: [...state.savings, action.payload]
      };
    case ADD_EXPENSES:
      return {
        ...state,
        expenses: [...state.expenses, action.payload]
      };
    case DELETE_SAVITEM:
      return {
        ...state,
        savings: state.savings.filter(sav => sav.id !== action.payload)
      };
    case DELETE_EXPITEM:
      return {
        ...state,
        expenses: state.expenses.filter(exp => exp.id !== action.payload)
      };
    case SET_ALERT:
      return {
        ...state,
        alert: action.payload
      };
    default:
      return state;
  }
};
