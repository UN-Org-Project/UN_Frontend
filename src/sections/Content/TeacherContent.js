import React from "react";
import { Link } from "react-router-dom";
import logo from "../../components/assets/images/image-removebg-preview 1.png";
const TeacherContent = ({ titleTable, children }) => {
  const logoutHandler = () => {
    localStorage.removeItem("islogged"), localStorage.removeItem("userData");
  };
  return (
    <>
      <div className="p-4 ">
        {/* <div className="p-4 border-2 w-full  border-gray-200 border-dashed rounded-lg dark:border-gray-700">  */}
        {children}
        {/* </div> */}
      </div>
    </>
  );
};

export default TeacherContent;
