import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import ListDepartmentComponet from "./components/ListDepartmentComponet";
import AddDepartmentComponent from "./components/AddDepartmentComponent";
//http://localhost:3000/employees
function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Routes>
            <Route path="/" element={<ListDepartmentComponet />} />
            <Route path="/department" element={<ListDepartmentComponet />} />
            <Route
              path="/add-department"
              element={<AddDepartmentComponent />}
            />
            <Route
              path="/edit-department/:departmentId"
              element={<AddDepartmentComponent />}
            />
          </Routes>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
