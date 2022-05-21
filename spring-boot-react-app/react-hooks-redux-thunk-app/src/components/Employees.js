import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateEmployee, deleteEmployee } from "../actions/employees";
import EmployeeDataService from "../services/EmployeeService";

const Employee = (props) => {
  const initialEmployeeState = {
    id: null,
    firstName: "",
    lastName: "",
    emailId: "",
    published: false
  };
  const [currentEmployee, setCurrentEmployee] = useState(initialEmployeeState);
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const getEmployee = id => {
    EmployeeDataService.get(id)
      .then(response => {
        setCurrentEmployee(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getEmployee(props.match.params.id);
  }, [props.match.params.id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentEmployee({ ...currentEmployee, [name]: value });
  };

  const updateStatus = status => {
    const data = {
      id: currentEmployee.id,
      firstName: currentEmployee.firstName,
      lastName: currentEmployee.lastName,
      emailId: currentEmployee.emailId
    };

    dispatch(updateEmployee(currentEmployee.id, data))
      .then(response => {
        console.log(response);

        setCurrentEmployee({ ...currentEmployee, published: status });
        setMessage("The status was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const updateContent = () => {
    dispatch(updateEmployee(currentEmployee.id, currentEmployee))
      .then(response => {
        console.log(response);

        setMessage("The employee was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const removeEmployee = () => {
    dispatch(deleteEmployee(currentEmployee.id))
      .then(() => {
        props.history.push("/employees");
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div>
      {currentEmployee ? (
        <div className="edit-form">
          <h4>Employee</h4>
          <form>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                value={currentEmployee.firstName}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                value={currentEmployee.lastName}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="emailId">Email Id</label>
              <input
                type="text"
                className="form-control"
                id="emailId"
                name="emailId"
                value={currentEmployee.emailId}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>
                <strong>Status:</strong>
              </label>
              {currentEmployee.published ? "Published" : "Pending"}
            </div>
          </form>

          {currentEmployee.published ? (
            <button
              className="badge badge-primary mr-2"
              onClick={() => updateStatus(false)}
            >
              UnPublish
            </button>
          ) : (
            <button
              className="badge badge-primary mr-2"
              onClick={() => updateStatus(true)}
            >
              Publish
            </button>
          )}

          <button className="badge badge-danger mr-2" onClick={removeEmployee}>
            Delete
          </button>

          <button
            type="submit"
            className="badge badge-success"
            onClick={updateContent}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Employee...</p>
        </div>
      )}
    </div>
  );
};

export default Employee;
