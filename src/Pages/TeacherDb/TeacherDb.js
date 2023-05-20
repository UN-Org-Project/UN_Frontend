import "./TeacherDb.css";
import { TeacherAvatar } from "../../components/assets/index";

import Btn from "../../components/SideBar/MenuBtn/Btn";
import TeacherContent from "../../sections/Content/TeacherContent";
import Layout from "../../Layout/Layout";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Outlet, useNavigate, Link } from "react-router-dom";

import { Dashboard, Message, NoteAltSharp } from "@mui/icons-material";
import { AiFillFileMarkdown } from "react-icons/ai";
import { BsPersonVcard } from "react-icons/bs";
const id = localStorage.getItem("userData");
const buttons = [
  {
    name: "Dashboard",
    path: "Dashboard",
    icon: <Dashboard style={{ width: "18", height: "18" }} />
  },
  {
    name: "Add Marks",
    path: "Addmarks",
    icon: <AiFillFileMarkdown style={{ width: "18", height: "18" }} />
  },
  {
    name: "Notes & Reports",
    path: "SendNotesAndReports",
    icon: <NoteAltSharp style={{ width: "18", height: "18" }} />
  },
  {
    name: "Students Info",
    path: "StudentsInfo",
    icon: <BsPersonVcard style={{ width: "18", height: "18" }} />
  },
  {
    name: "Messages",
    path: "ChattingTeacher/" + id,
    icon: <Message style={{ width: "18", height: "18" }} />
  }
];

const TeacherDb = () => {
  const islogged = localStorage.getItem("islogged");
  const navigate = useNavigate();

  const [teacherData, setTeachertData] = useState("");
  const [studentData, setStudentData] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  if (!islogged) {
    return (
      <>
        <p className="text">
          the user is not loged please try again with login:
        </p>
        <Link to="/login" className="navlink right ">
          <button className="logout-btn login">login</button>
        </Link>
      </>
    );
  }
  useEffect(() => {
    navigate("/teacher/Dashboard");
    async function fetchTeacherData() {
      try {
        //6431b22ca8514ea551212e27
        const response = await axios.get(
          "http://localhost:8000/sendInfo/" + id
        );
        const data = response.data;
        console.log(data.allStudents);
        setStudentData(data.allStudents);
        setTeachertData(data.name);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchTeacherData();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="spinner"> </div>
      ) : (
        !isLoading && (
          <Layout
            userImg={TeacherAvatar}
            userName={teacherData}
            userRoll="Teacher Dashboard"
            sidebarChildren={buttons.map((item, index) => (
              <Btn key={index} name={item.name} path={item.path}>
                {item.icon}
              </Btn>
            ))}>
            <TeacherContent>
              <Outlet context={{ students: studentData }} />
            </TeacherContent>
          </Layout>
        )
      )}
    </>
  );
};

export default TeacherDb;
