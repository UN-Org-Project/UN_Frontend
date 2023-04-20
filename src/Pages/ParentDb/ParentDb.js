import React, { useEffect, useState } from "react";
import { Outlet, useNavigate, Link } from "react-router-dom";
import {
  AddUserIcon,
  AddmarkIcon,
  AdminAvatar,
  ParentAvatar
} from "../../components/assets";
import { DashboardIcon } from "../../components/assets";
import Sidbar from "../../components/SideBar/Sidbar";
import Btn from "../../components/SideBar/MenuBtn/Btn";
import Header from "../../components/HeaderDash/Header";
import NotificationBtn from "../../components/NotificationBtn/NotificationBtn";
import "./PreantDb.css";
import axios from "axios";
import TeacherContent from "../../sections/Content/TeacherContent";
import ParentContent from "../../sections/Content/ParentContent";

const ParentDb = () => {
  const id = localStorage.getItem("userData");
  const [parnetData, setparenttData] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [childData, setChildData] = useState([]);
  const [isEntered, setIsEntered] = useState(false);
  const [idchiled, setIdchiled] = useState("");
  const [idTeacher, setIdTeacher] = useState("");

  const handleEnterChild = (value, id, teacherid) => {
    setIsEntered(value);
    setIdchiled(id);
    setIdTeacher(teacherid);
  };

  let navigate = useNavigate();
  useEffect(() => {
    navigate("/parent/children");
    async function fetchTeacherData() {
      try {
        //6431b22ca8514ea551212e27
        const response = await axios.get(
          "http://localhost:8000/parentInfo/6431df1911ba3d23a1546314"
        );
        const data = response.data.parentInfo;
        console.log(data);
        setChildData(data.allStudents);
        setparenttData(data.name);
        console.log(childData);
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
            UserImg={ParentAvatar}
            name={parnetData}
            dashbordUser="Parent Dashboard">
            <Btn
              path="children"
              icon={DashboardIcon}
              btnName="Your Children "
              isEnteredn={true}
            />
            <Btn
              path={"childDetails/" + idchiled}
              icon={AddUserIcon}
              btnName="Show Absences"
              isEnteredn={isEntered}
            />

            <Btn
              path={"Showmarks/" + idchiled}
              icon={AddmarkIcon}
              btnName="Show Marks"
              isEnteredn={isEntered}
            />

            <Btn
              path={"Events/" + idchiled}
              icon={DashboardIcon}
              btnName="Events"
              isEnteredn={isEntered}
            />
            <Btn
              path={"parentChating/" + idTeacher}
              icon={AdminAvatar}
              btnName="Chating"
              isEnteredn={isEntered}
            />
          </Sidbar>
          {/* <div className="flex flex-col flex-1  gap-5 w-full"> */}
          <Header>
            <NotificationBtn />
          </Header>
          <ParentContent>
            <Outlet
              context={{ childe: childData, enterFunc: handleEnterChild }}
            />
          </ParentContent>
          {/* </div> */}
        </>
      )}
    </div>
  );
};

export default ParentDb;
