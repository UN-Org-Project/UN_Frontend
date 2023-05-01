import React from "react";
import { Link } from "react-router-dom";
import logo from "../../components/assets/images/image-removebg-preview 1.png";
const TeacherContent = ({ titleTable, children }) => {
  const logoutHandler = () => {
    localStorage.removeItem("islogged"), localStorage.removeItem("userData");
  };
  return <>{children}</>;
};

export default TeacherContent;
