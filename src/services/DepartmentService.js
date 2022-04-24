import axios from "axios";

const DEPARTMENT_SERVICE_BASE_URL =
  "http://localhost:9001/ds/api/v1/departments";

class DepartmentService {
  getAllDepartments() {
    return axios.get(DEPARTMENT_SERVICE_BASE_URL);
  }

  addDepartment(department) {
    return axios.post(DEPARTMENT_SERVICE_BASE_URL, department);
  }

  getDepartmentById(departmentId) {
    return axios.get(DEPARTMENT_SERVICE_BASE_URL + "/" + departmentId);
  }

  updateDepartment(departmentId, department) {
    return axios.put(
      DEPARTMENT_SERVICE_BASE_URL + "/" + departmentId,
      department
    );
  }

  deleteDepartment(departmentId) {
    return axios.delete(DEPARTMENT_SERVICE_BASE_URL + "/" + departmentId);
  }
}

export default new DepartmentService();
