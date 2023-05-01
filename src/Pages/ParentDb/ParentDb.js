import React, { useEffect, useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
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
  const { pathname } = location;
  const id = localStorage.getItem("userData");
  const [parnetData, setparenttData] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [childData, setChildData] = useState([]);

  let navigate = useNavigate();
  useEffect(() => {
    navigate("/parent/children");
    async function fetchTeacherData() {
      try {
        //6431b22ca8514ea551212e27
        const response = await axios.get(
          "http://localhost:8000/parentInfo/6441be62095a5be216f94466"
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
    fetchTeacherData();
    console.log("this is the child Data");
    // console.log(childData[0]._id);
  }, []);

  const buttons = [
    {
      name: "My Children",
      path: "children",
      icon: <FaChild style={{ width: "18", height: "18" }} />,
    },
  ];
  const childDetailsButtons = [
    {
      name: "My Children",
      path: "children",
      icon: <FaChild style={{ width: "18", height: "18" }} />,
    },
    {
      name: "Attendance",
      path: "childDetails/644e7e7faa0e7103fd1a8434",
      icon: <FaRegCalendarTimes style={{ width: "18", height: "18" }} />,
    },
    {
      name: "Child Marks",
      path: "Showmarks/644e7e7faa0e7103fd1a8434",
      icon: <GradeOutlined style={{ width: "18", height: "18" }} />,
    },
    {
      name: "Events",
      path: "Events/644e7e7faa0e7103fd1a8434",
      icon: <EventNote style={{ width: "18", height: "18" }} />,
    },
    {
      name: "Messages",
      path: "parentChating/",
      icon: <Message style={{ width: "18", height: "18" }} />,
    },
  ];
  const parentButtons = buttons.map((item, index) => (
    <Btn key={index} name={item.name} path={item.path}>
      {" "}
      {item.icon}{" "}
    </Btn>
  ));

  const childButtons = childDetailsButtons.map((item, index) => (
    <Btn key={index} name={item.name} path={item.path}>
      {" "}
      {item.icon}{" "}
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
          }
        >
          <TeacherContent>
            <Outlet context={{ childe: childData }} />
          </TeacherContent>
        </Layout>
      )}
    </>
  );
};

export default ParentDb;

// import React, { useEffect, useState } from "react";
// import { Outlet, useNavigate, Link } from "react-router-dom";
// import {
//   AddUserIcon,
//   AddmarkIcon,
//   AdminAvatar,
//   ParentAvatar
// } from "../../components/assets";
// import { DashboardIcon } from "../../components/assets";
// import Sidbar from "../../components/SideBar/Sidbar";
// import Btn from "../../components/SideBar/MenuBtn/Btn";
// import Header from "../../components/HeaderDash/Header";
// import NotificationBtn from "../../components/NotificationBtn/NotificationBtn";
// import "./PreantDb.css";
// import axios from "axios";
// import TeacherContent from "../../sections/Content/TeacherContent";
// import ParentContent from "../../sections/Content/ParentContent";

// const ParentDb = () => {
//   const id = localStorage.getItem("userData");
//   const [parnetData, setparenttData] = useState("");
//   const [isLoading, setIsLoading] = useState(true);
//   const [childData, setChildData] = useState([]);
//   const [isEntered, setIsEntered] = useState(false);
//   const [idchiled, setIdchiled] = useState("");
//   const [idTeacher, setIdTeacher] = useState("");

//   const handleEnterChild = (value, id, teacherid) => {
//     setIsEntered(value);
//     setIdchiled(id);
//     setIdTeacher(teacherid);
//   };

//   let navigate = useNavigate();
//   useEffect(() => {
//     navigate("/parent/children");
//     async function fetchTeacherData() {
//       try {
//         //6431b22ca8514ea551212e27
//         const response = await axios.get(
//           "http://localhost:8000/parentInfo/6441be62095a5be216f94466"
//         );
//         const data = response.data.parentInfo;
//         console.log(data);
//         setChildData(data.allStudents);
//         setparenttData(data.name);
//         console.log(childData);
//         setIsLoading(false);
//       } catch (error) {
//         console.log(error);
//       }
//     }
//     fetchTeacherData();
//   }, []);

//   return (
//     <div id="view" className="flex">
//       {isLoading && <div className="spinner"> </div>}
//       {!isLoading && (
//         <>
//           <Sidbar
//             UserImg={ParentAvatar}
//             name={parnetData}
//             dashbordUser="Parent Dashboard">
//             <Btn
//               path="children"
//               icon={DashboardIcon}
//               btnName="Your Children "
//               isEnteredn={true}
//             />
//             <Btn
//               path={"childDetails/" + idchiled}
//               icon={AddUserIcon}
//               btnName="Show Absences"
//               isEnteredn={isEntered}
//             />

//             <Btn
//               path={"Showmarks/" + idchiled}
//               icon={AddmarkIcon}
//               btnName="Show Marks"
//               isEnteredn={isEntered}
//             />

//             <Btn
//               path={"Events/" + idchiled}
//               icon={DashboardIcon}
//               btnName="Events"
//               isEnteredn={isEntered}
//             />
//             <Btn
//               path={"parentChating/" + idTeacher}
//               icon={AdminAvatar}
//               btnName="Chating"
//               isEnteredn={isEntered}
//             />
//           </Sidbar>
//           {/* <div className="flex flex-col flex-1  gap-5 w-full"> */}
//           <Header>
//             <NotificationBtn />
//           </Header>
//           <ParentContent>
//             <Outlet
//               context={{ childe: childData, enterFunc: handleEnterChild }}
//             />
//           </ParentContent>
//           {/* </div> */}

//         </>
//       )}
//     </div>
//   );
// };

// export default ParentDb;
