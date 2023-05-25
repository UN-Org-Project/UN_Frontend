import React, { useEffect, useState } from "react";
import { Outlet, useNavigate, useLocation, Link } from "react-router-dom";
import axios from "axios";

import Layout from "../../Layout/Layout";
import TeacherContent from "../../sections/Content/TeacherContent";
import Btn from "../../components/SideBar/MenuBtn/Btn";
import "./PreantDb.css";

import { ParentAvatar } from "../../components/assets";
import { FaChild, FaRegCalendarTimes } from "react-icons/fa";
import { EventNote, GradeOutlined, Message } from "@mui/icons-material";

const ParentDb = () => {
  const location = useLocation();
  const islogged = localStorage.getItem("islogged");
  const { pathname } = location;
  const id = localStorage.getItem("userData");
  const [parnetData, setparenttData] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [childData, setChildData] = useState([]);
  const [isEntered, setIsEntered] = useState(false);
  const [idchiled, setIdchiled] = useState("");
  const [idTeacher, setIdTeacher] = useState("");
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

  let navigate = useNavigate();
  useEffect(() => {
    navigate("/parent/children");
    async function fetchParentData() {
      try {
        //6431b22ca8514ea551212e27
        const response = await axios.get(
          "http://localhost:8000/parentInfo/" + id
        );
        const data = response.data.parentInfo;
        console.log(data);
        setChildData(data.allStudents);
        setparenttData(data.name);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchParentData();
    console.log("this is the child Data");
    // console.log(childData[0]._id);
  }, []);
  const handleEnterChild = (value, id, teacherid) => {
    setIsEntered(value);
    setIdchiled(id);
    setIdTeacher(teacherid);
  };

  const buttons = [
    {
      name: "My Children",
      path: "children",
      icon: <FaChild style={{ width: "18", height: "18" }} />
    }
  ];
  const childDetailsButtons = [
    {
      name: "My Children",
      path: "children",
      icon: <FaChild style={{ width: "18", height: "18" }} />
    },
    {
      name: "Attendance",
      path: "childDetails/" + idchiled,
      icon: <FaRegCalendarTimes style={{ width: "18", height: "18" }} />
    },
    {
      name: "Child Marks",
      path: "Showmarks/" + idchiled,
      icon: <GradeOutlined style={{ width: "18", height: "18" }} />
    },
    {
      name: "Events",
      path: "Events/" + idchiled,
      icon: <EventNote style={{ width: "18", height: "18" }} />
    },
    {
      name: "Messages",
      path: "parentChating/" + id,
      icon: <Message style={{ width: "18", height: "18" }} />
    }
  ];
  const parentButtons = buttons.map((item, index) => (
    <Btn key={index} name={item.name} path={item.path}>
      {item.icon}
    </Btn>
  ));

  const childButtons = childDetailsButtons.map((item, index) => (
    <Btn key={index} name={item.name} path={item.path}>
      {item.icon}
    </Btn>
  ));

  return (
    <>
      {isLoading ? (
        <div className="spinner"> </div>
      ) : (
        <Layout
          userImg={ParentAvatar}
          userName={parnetData}
          userRoll="Parent Dashboard"
          sidebarChildren={
            pathname.includes("children") ? parentButtons : childButtons
          }>
          <TeacherContent>
            <Outlet
              context={{ childe: childData, enterFunc: handleEnterChild }}
            />
          </TeacherContent>
        </Layout>
      )}
    </>
  );
};

export default ParentDb;
