import React from "react";
import { Link } from "react-router-dom";
import "./AdminContent.css";
import MainTitle from "../../components/SectionTitle/MainTitle";

const AdminContent = ({ titleTable, children }) => {
  return (
    <>
      {/* <!-- content header section --> */}

      {children}
    </>
  );
};

export default AdminContent;
