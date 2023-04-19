// import AddMarks from "./AddMarks/AddMarks";
// import Dashboard from "./Dashboard/Dashboard";
import "./TeacherDb.css";
import {
  AddmarkIcon,
  TeacherAvatar,
  DashboardIcon,
  notesandReports,
  chattingImage,
} from "../../components/assets/index";
import Sidbar from "../../components/SideBar/Sidbar";
import Btn from "../../components/SideBar/MenuBtn/Btn";
import TeacherContent from "../../sections/Content/TeacherContent";

import Header from "../../components/HeaderDash/Header";
import NotificationBtn from "../../components/NotificationBtn/NotificationBtn";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Outlet, useNavigate } from "react-router-dom";
import { conte } from "react";

const TeacherDb = () => {
  const id = localStorage.getItem("userData");
  const navigate = useNavigate();

  const [teacherData, setTeachertData] = useState("");
  const [studentData, setStudentData] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    navigate("/teacher/Dashboard");
    async function fetchTeacherData() {
      try {
        //6431b22ca8514ea551212e27
        const response = await axios.get(
          "http://localhost:8000/sendInfo/6431b22ca8514ea551212e27"
        );
        const data = response.data;
        console.log(data.allStudents);
        setStudentData(data.allStudents);
        setTeachertData(data.name);
        console.log(studentData);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchTeacherData();
  }, []);
  return (
    <div id="view">
      {isLoading && <div className="spinner"> </div>}
      {!isLoading && (
        <>
        <div  className="flex">
          <Sidbar
            UserImg={TeacherAvatar}
            name={teacherData}
            dashbordUser="Teacher Dashboard">
            <Btn path="Dashboard" icon={DashboardIcon} btnName="Dashboard" />
            <Btn path="Addmarks" icon={AddmarkIcon} btnName="Add Marks" />
            <Btn
              path="SendNotesAndReports"
              icon={notesandReports}
              btnName="Notes & Reports"
            />
            <Btn
                path="StudentsInfo"
                icon={AddmarkIcon}
                btnName="Students Info"
              />
            <Btn path="ChattingTeacher" icon={chattingImage} btnName="Chating" />
          </Sidbar>
          </div>
          <Header >
              <NotificationBtn />
            </Header>
          <TeacherContent >
            <Outlet  context={{ students: studentData }} />
          </TeacherContent>
        </>
      )}
    </div>
  );
};

export default TeacherDb;


