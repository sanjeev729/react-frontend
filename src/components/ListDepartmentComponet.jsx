import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DepartmentService from "../services/DepartmentService";

const ListDepartmentComponet = () => {
  const [departments, setdepartments] = useState([]);

  useEffect(() => {
    getAllDepartments();
  }, []);

  const getAllDepartments = () => {
    DepartmentService.getAllDepartments()
      .then((response) => {
        setdepartments(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteDepartment = (departmentId) => {
    console.log(departmentId);
    DepartmentService.deleteDepartment(departmentId)
      .then((response) => {
        getAllDepartments();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="container">
      <h2 className="text-center">Department list</h2>
      <Link to="/add-department" className="btn btn-primary mb-2">
        Add Department
      </Link>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Department Id</th>
            <th>Department Code</th>
            <th>Department Name</th>
            <th>Department Address</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {departments.map((department) => (
            <tr key={department.departmentId}>
              <td>{department.departmentId}</td>
              <td>{department.departmentCode}</td>
              <td>{department.departmentName}</td>
              <td>{department.departmentAddress}</td>
              <td>
                <Link
                  to={`/edit-department/${department.departmentId}`}
                  className="btn btn-info"
                >
                  Update
                </Link>

                <button
                  className="btn btn-danger"
                  onClick={() => deleteDepartment(department.departmentId)}
                  style={{ marginLeft: "15px" }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListDepartmentComponet;
