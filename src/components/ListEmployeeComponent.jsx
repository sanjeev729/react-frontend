import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";

class ListEmployeeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      departments: [],
    };
  }
  componentDidMount() {
    EmployeeService.getAllDepartments().then((res) => {
      this.setState({ departments: res.data });
    });
  }

  render() {
    return (
      <div>
        <h2 className="text-center"> Department Details </h2>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Department Id</th>
                <th>Department Name</th>
                <th>Department Address</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.departments.map((department) => (
                <tr key={department.departmentId}>
                  <td>{department.departmentId}</td>
                  <td>{department.departmentName}</td>
                  <td>{department.departmentAddress}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListEmployeeComponent;
