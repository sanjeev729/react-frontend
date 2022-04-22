import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
//http://localhost:3000/employees
function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<ListEmployeeComponent />} />
            <Route
              exact
              path="/employees"
              element={<ListEmployeeComponent />}
            />
          </Routes>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
