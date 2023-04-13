// import AddMarks from "./AddMarks/AddMarks";
// import Dashboard from "./Dashboard/Dashboard";
import "./TeacherDb.css";
import {
  AddmarkIcon,
  TeacherAvatar,
  DashboardIcon
} from "../../components//assets/index";
import Sidbar from "../../components/SideBar/Sidbar";
import Btn from "../../components/SideBar/MenuBtn/Btn";

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
    <div id="view" className="flex">
      {isLoading && <div className="spinner"> </div>}
      {!isLoading && (
        <>
          <Sidbar
            UserImg={TeacherAvatar}
            name={teacherData}
            dashbordUser="Teacher Dashboard">
            <Btn path="Dashboard" icon={DashboardIcon} btnName="Dashboard" />
            <Btn path="Addmarks" icon={AddmarkIcon} btnName="Add Marks" />
            <Btn
              path="SendNotesAndReports"
              icon={AddmarkIcon}
              btnName="Notes & Reports"
            />
            <Btn path="ChattingTeacher" icon={AddmarkIcon} btnName="Chating" />
          </Sidbar>
          <div className="flex flex-col flex-1 ml-1 gap-5">
            <Header>
              <NotificationBtn />
            </Header>

            <Outlet context={{ students: studentData }} />
          </div>
        </>
      )}
    </div>
  );
};

export default TeacherDb;
