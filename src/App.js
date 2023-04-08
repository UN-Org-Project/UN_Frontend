import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";

import { Home, Login, Teacher } from "./Pages/index";
import NoMatch from "./Pages/NoMatch/NoMatch";
import AddMarks from "./Pages/TeacherDb/AddMarks/AddMarks";
import Dashboard from "./Pages/TeacherDb/Dashboard/Dashboard";

import AdminDb from "./Pages/AdminDb/AdminDb";

const App = () => {
  return (
    <>
      {/* <Router> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminDb />} />
        <Route path="/teacher" element={<Teacher />}>
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Addmarks" element={<AddMarks />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
      {/* </Router> */}
    </>
  );
};

export default App;
