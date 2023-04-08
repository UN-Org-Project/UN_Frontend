import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import { Home, Login, AdminStd, AdminTech } from "./Pages/index";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Admin/AdminStudents" element={<AdminStd />} />
          <Route path="/Admin/AdminTeachers" element={<AdminTech />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
