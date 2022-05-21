import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  retrieveEmployees,
  findEmployeesByFirstName,
  deleteAllEmployees,
} from "../actions/employees";
import { Link } from "react-router-dom";

const EmployeesList = () => {
  const [currentEmployee, setCurrentEmployee] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [firstName, setFirstName] = useState("");

  const employees = useSelector(state => state.employees);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrieveEmployees());
  }, []);

  const onChangeSearchTitle = e => {
    const firstName = e.target.value;
    setFirstName(firstName);
  };

  const refreshData = () => {
    setCurrentEmployee(null);
    setCurrentIndex(-1);
  };

  const setActiveEmployee = (employee, index) => {
    setCurrentEmployee(employee);
    setCurrentIndex(index);
  };

  const removeAllEmployees = () => {
    dispatch(deleteAllEmployees())
      .then(response => {
        console.log(response);
        refreshData();
      })
      .catch(e => {
        console.log(e);
      });
  };

  const findByFirstName = () => {
    refreshData();
    dispatch(findByFirstName(firstName));
  };

  return (
    <div className="list row">
      <div className="col-md-8">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by First Name"
            value={firstName}
            onChange={onChangeSearchTitle}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findEmployeesByFirstName}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <h4>Employees List</h4>

        <ul className="list-group">
          {employees &&
            employees.map((employee, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => setActiveEmployee(employee, index)}
                key={index}
              >
                {employee.firstName}, {employee.lastName}, {employee.emailId}
              </li>
            ))}
        </ul>

        <button
          className="m-3 btn btn-sm btn-danger"
          onClick={removeAllEmployees}
        >
          Remove All
        </button>
      </div>
      <div className="col-md-6">
        {currentEmployee ? (
          <div>
            <h4>Employee</h4>
            <div>
              <label>
                <strong>First Name:</strong>
              </label>{" "}
              {currentEmployee.firstName}
            </div>
            <div>
              <label>
                <strong>Last Name:</strong>
              </label>{" "}
              {currentEmployee.lastName}
            </div>
            <div>
              <label>
                <strong>Email Id:</strong>
              </label>{" "}
              {currentEmployee.emailId}
            </div>

            <Link
              to={"/employees/" + currentEmployee.id}
              className="badge badge-warning"
            >
              Edit
            </Link>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Employee...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmployeesList;
