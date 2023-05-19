import React from "react";
import { AdminAvatar } from "../../components/assets";

import AdminStd from "./EditStudents/AdminStdPage";
import Btn from "../../components/SideBar/MenuBtn/Btn";

import { FaUserGraduate } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";
import Layout from "../../Layout/Layout";

const buttons = [
  {
    name: "Add Student",
    path: "/admin",
    icon: <FaUserGraduate style={{ width: "18", height: "18" }} />
  },
  {
    name: "Add Teachers",
    path: "/Admin/AdminTeachers",
    icon: <FaChalkboardTeacher style={{ width: "18", height: "18" }} />
  }
];
const AdminDb = () => {
  return (
    <Layout
      userImg={AdminAvatar}
      userName="Ahmad Alhariri"
      userRoll="Admin"
      sidebarChildren={buttons.map((item, index) => (
        <Btn key={index} name={item.name} path={item.path}>
          {item.icon}
        </Btn>
      ))}>
      <AdminStd />
    </Layout>
  );
};

export default AdminDb;
