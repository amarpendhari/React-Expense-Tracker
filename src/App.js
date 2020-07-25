import React from "react";
import "./assets/App.css";
import "./assets/App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ExpenseTracker from "./components/ExpTracker/ExpenseTracker";
import Navbar from "./components/common/Navbar";
import ExpenseChart from "./components/ExpChart/ExpenseChart";
import About from "./components/common/About";
import ExpenseState from "./context/expense/ExpenseState";

function App() {
  return (
    <ExpenseState>
      <Router>
        <div className="App">
          <Navbar></Navbar>
          <div className="container">
            <Switch>
              <Route exact path="/" component={ExpenseTracker}></Route>
              <Route
                exact
                path="/expensechart"
                component={ExpenseChart}
              ></Route>
              <Route exact path="/about" component={About}></Route>
            </Switch>
          </div>
        </div>
      </Router>
    </ExpenseState>
  );
}

export default App;
