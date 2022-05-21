import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddEmployee from "./components/AddEmployee";
import Employee from "./components/Employees";
import EmployeesList from "./components/EmployeesList";

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/employees" className="navbar-brand">
          Employee Management System
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/employees"} className="nav-link">
              Employees
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Add
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/employees"]} component={EmployeesList} />
          <Route exact path="/add" component={AddEmployee} />
          <Route path="/employees/:id" component={Employee} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
