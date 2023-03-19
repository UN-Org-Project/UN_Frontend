import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import { Home, Login, Teacher } from "./Pages/index";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/teacher" element={<Teacher />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
