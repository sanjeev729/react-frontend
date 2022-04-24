import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import DepartmentService from "../services/DepartmentService";

const AddDepartmentComponent = () => {
  const [departmentName, setdepartmentName] = useState("");
  const [departmentAddress, setdepartmentAddress] = useState("");
  const [departmentCode, setdepartmentCode] = useState("");

  const navigate = useNavigate();
  const { departmentId } = useParams();

  const saveOrUpdateDepartment = (e) => {
    e.preventDefault();
    const department = { departmentName, departmentAddress, departmentCode };
    console.log(department);

    if (departmentId) {
      DepartmentService.updateDepartment(departmentId, department)
        .then((response) => {
          console.log(response.data);
          navigate("/department");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      DepartmentService.addDepartment(department)
        .then((response) => {
          console.log(response.data);
          navigate("/department");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    DepartmentService.getDepartmentById(departmentId)
      .then((response) => {
        setdepartmentAddress(response.data.departmentAddress);
        setdepartmentName(response.data.departmentName);
        setdepartmentCode(response.data.departmentCode);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const title = () => {
    if (departmentId) {
      return <h2 className="text-center">Update Department</h2>;
    } else {
      return <h2 className="text-center">Add Department</h2>;
    }
  };

  return (
    <div>
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            {title()}
            <div className="card-body">
              <form>
                <div className="form-group mb-2">
                  <label className="form-label">Department Name</label>
                  <input
                    type="text"
                    placeholder="Enter Department Name"
                    name="departmentName"
                    className="form-control"
                    value={departmentName}
                    onChange={(e) => setdepartmentName(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Department Address</label>
                  <input
                    type="text"
                    placeholder="Enter Department Address"
                    name="departmentAddress"
                    className="form-control"
                    value={departmentAddress}
                    onChange={(e) => setdepartmentAddress(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Department Code</label>
                  <input
                    type="text"
                    placeholder="Enter Department Code"
                    name="departmentCode"
                    className="form-control"
                    value={departmentCode}
                    onChange={(e) => setdepartmentCode(e.target.value)}
                  ></input>
                </div>
                <button
                  className="btn btn-success"
                  onClick={(e) => saveOrUpdateDepartment(e)}
                >
                  Submit
                </button>
                <Link to="/department" className="btn btn-danger">
                  Cancel
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDepartmentComponent;
