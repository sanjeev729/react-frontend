import axios from "axios";

const GET_ALL_DEPARTMENTS_URL = "http://localhost:9001/departments/";

class EmployeeService {
  getAllDepartments() {
    return axios.get(GET_ALL_DEPARTMENTS_URL);
  }
}

export default new EmployeeService();
