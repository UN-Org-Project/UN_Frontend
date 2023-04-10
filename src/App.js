import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";

import AddMarks from "./Pages/TeacherDb/AddMarks/AddMarks";
import Dashboard from "./Pages/TeacherDb/Dashboard/Dashboard";
import {
  Home,
  Login,
  Teacher,
  NoMatch,
  AdminStd,
  AdminTech,
} from "./Pages/index";
const App = () => {
  return (
    <>
      {/* <Router> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Admin/AdminStudents" element={<AdminStd />} />
        <Route path="/Admin/AdminTeachers" element={<AdminTech />} />{" "}
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
