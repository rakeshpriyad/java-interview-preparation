import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createEmployee } from "../actions/employees";

const AddEmployee = () => {
  const initialEmployeeState = {
    id: null,
    firstName: "",
    lastName: "",
    emailId: "",
    published: false
  };
  const [employee, setEmployee] = useState(initialEmployeeState);
  const [submitted, setSubmitted] = useState(false);

  const dispatch = useDispatch();

  const handleInputChange = event => {
    const { name, value } = event.target;
    setEmployee({ ...employee, [name]: value });
  };

  const saveEmployee = () => {
    const { firstName, lastName,emailId } = employee;

    dispatch(createEmployee(firstName, lastName, emailId))
      .then(data => {
        setEmployee({
          id: data.id,
          firstName: data.firstName,
          lastName: data.lastName,
          emailId: data.emailId
        });
        setSubmitted(true);

        console.log(data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newEmployee = () => {
    setEmployee(initialEmployeeState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newEmployee}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              required
              value={employee.firstName}
              onChange={handleInputChange}
              name="firstName"
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              required
              value={employee.lastName}
              onChange={handleInputChange}
              name="lastName"
            />
          </div>
          <div className="form-group">
            <label htmlFor="emailId">Email Id</label>
            <input
              type="text"
              className="form-control"
              id="emailId"
              required
              value={employee.emailId}
              onChange={handleInputChange}
              name="emailId"
            />
          </div>

          <button onClick={saveEmployee} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddEmployee;
