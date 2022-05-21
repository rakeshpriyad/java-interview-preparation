import http from "../http-common";

const EMPLOYEE_API_BASE_URL = "/employees";

const getAll = () => {
  return http.get(EMPLOYEE_API_BASE_URL);
};

const get = employeeId => {
  return http.get(EMPLOYEE_API_BASE_URL + '/' + employeeId);
};

const create = data => {
  return http.post(EMPLOYEE_API_BASE_URL, data);
};

const update = (employeeId, employee) => {
  return http.put(EMPLOYEE_API_BASE_URL + '/' + employeeId, employee);
};

const remove = employeeId => {
  return http.delete(EMPLOYEE_API_BASE_URL + '/' + employeeId);
};

const removeAll = () => {
  return http.delete(EMPLOYEE_API_BASE_URL);
};

const findEmployeesByFirstName = firstName => {
  return http.get(`/employees?name=${firstName}`);
};

const EmployeeService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findEmployeesByFirstName
};

export default EmployeeService;
