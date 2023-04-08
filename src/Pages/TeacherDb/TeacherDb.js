import AddMarks from "./AddMarks/AddMarks";
import Dashboard from "./Dashboard/Dashboard";
import {
  AddmarkIcon,
  TeacherAvatar,
  DashboardIcon,
} from "../../components//assets/index";
import Sidbar from "../../components/SideBar/Sidbar";
import Btn from "../../components/SideBar/MenuBtn/Btn";

import Header from "../../components/HeaderDash/Header";
import NotificationBtn from "../../components/NotificationBtn/NotificationBtn";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Outlet, useNavigate } from "react-router-dom";

const TeacherDb = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    navigate("/teacher/Dashboard");
    axios
      //Set the end point to get the data
      .get("")
      //Get the data and set it to setData
      .then((response) => setData(response.data))
      // if there is any error display it in console
      .catch((error) => console.log(error));
  }, []);
  return (
    <div id="view" className="flex">
      <Sidbar
        UserImg={TeacherAvatar}
        name="Ahamd Alhariri "
        dashbordUser="Teacher Dashboard"
      >
        <Btn path="Dashboard" icon={DashboardIcon} btnName="Dashboard" />
        <Btn path="Addmarks" icon={AddmarkIcon} btnName="Add Marks" />
      </Sidbar>

      <div className="flex flex-col flex-1 ml-1 gap-5">
        <Header>
          <NotificationBtn />
        </Header>

        <Outlet />
      </div>
    </div>
  );
};

export default TeacherDb;
