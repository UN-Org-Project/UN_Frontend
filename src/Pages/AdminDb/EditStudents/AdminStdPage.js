import React, { useEffect, useState } from "react";
import { InfoStudentsForm } from "../../../sections";
import AdminContent from "../../../sections/Content/AdminContent";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";
import "./../AdminDb.css";
import Layout from "../../../Layout/Layout";

import Btn from "../../../components/SideBar/MenuBtn/Btn";
import { AdminAvatar } from "../../../components/assets";
import {
  FaChalkboardTeacher,
  FaUserEdit,
  FaUserGraduate
} from "react-icons/fa";
import MainTitle from "../../../components/SectionTitle/MainTitle";

import { Edit } from "@mui/icons-material";
const AdminStd = () => {
  //  const id = localStorage.getItem("userData");
  const islogged = localStorage.getItem("islogged");
  const [adminName, setAdminData] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const data = useEffect(() => {
    async function fetch() {
      const response = await axios.get(
        "http://localhost:8000/getAdmininfo/64138fc1aced1a0ffacfe0b0"
      );
      console.log(response.data);
      //    setAdminData(response.data.adminData);
      const adminName = response.data.adminName;
      setAdminData(adminName);
    }
    fetch();
  }, []);

  const notify = (message, type) => {
    if (type === "Error") toast.error(message);
    else if (type === "Success") toast.success(message);
  };

  const [studentName, setStudentName] = useState("");
  const [gender, setGender] = useState("Male");
  const [ParentName, setParentName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [email, setEmail] = useState("");
  const [classValue, setClassValue] = useState("class1");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [StudentAddress, setStudentAddress] = useState("");

  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();

    try {
      // const formData = new FormData();
      // formData.append("studentName", studentName);
      // formData.append("Gender", gender);
      // formData.append("adress", StudentAddress);
      // formData.append("dateOfBirth", dateOfBirth);
      // formData.append("className", classValue);
      // formData.append("parentName", ParentName);
      // formData.append("emailAdress", email);
      // formData.append("telephonNumber", phoneNumber);

      const Data = {
        studentName: studentName,
        Gender: gender,
        adress: StudentAddress,
        dateOfBirth: dateOfBirth,
        className: classValue,
        parentName: ParentName,
        emailAdress: email,
        telephonNumber: phoneNumber
      };

      // // For see all input fields in form
      // for (const [key, value] of formData.entries()) {
      //   console.log(key, value);
      // }

      const response = await axios.post("http://localhost:8000/parent", {
        Data
      });
      setIsLoading(false);
      if (!response.ok) {
        console.log(response);
        notify(response.data.message, "Success");
        setStudentName("");
        setParentName("");
        setDateOfBirth("");
        setEmail("");
        setPhoneNumber("");
        setStudentAddress("");
      } else {
        console.log(response);
        notify("Some thing Error !try again ", "Error");
      }
    } catch (error) {
      setIsLoading(false);
      notify("Error", "Error");
      console.log("Invalid info");
    }
  };

  // if (!islogged) {
  //   return (
  //     <>
  //       <p className="text">
  //         the user is not loged please try again with login:
  //       </p>
  //       <Link to="/login" className="navlink right ">
  //         <button className="logout-btn login">login</button>
  //       </Link>
  //     </>
  //   );
  // }

  const buttons = [
    {
      name: "Add Student",
      path: "/Admin/AdminStudents",
      icon: <FaUserGraduate style={{ width: "18", height: "18" }} />
    },
    {
      name: "Edit Students",
      path: "/Admin/InfoStudents",
      icon: <Edit style={{ width: "18", height: "18" }} />
    },
    {
      name: "Add Teachers",
      path: "/Admin/AdminTeachers",
      icon: <FaChalkboardTeacher style={{ width: "18", height: "18" }} />
    },
    {
      name: "Edit Teachers",
      path: "/Admin/InfoTeachers",
      icon: <FaUserEdit style={{ width: "18", height: "18" }} />
    }
  ];

  return (
    <>
      {/* // <Sidbar links={links}>
      //   <CardSidbar name="math Mhawich" role="Admin Dashboard" />
      // </Sidbar> */}

      <Layout
        userImg={AdminAvatar}
        userName={adminName}
        userRoll="Admin"
        sidebarChildren={buttons.map((item, index) => (
          <Btn key={index} name={item.name} path={item.path}>
            {" "}
            {item.icon}{" "}
          </Btn>
        ))}>
        <MainTitle title="Add Student Form" />
        {isLoading && <div className="spinner"> </div>}
        <InfoStudentsForm
          studentName={studentName}
          setStudentName={setStudentName}
          gender={gender}
          setGender={setGender}
          dateOfBirth={dateOfBirth}
          setDateOfBirth={setDateOfBirth}
          email={email}
          setEmail={setEmail}
          classValue={classValue}
          setClassValue={setClassValue}
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          StudentAddress={StudentAddress}
          setStudentAddress={setStudentAddress}
          ParentName={ParentName}
          setParentName={setParentName}
          notify={notify}
          handleSubmit={handleSubmit}
        />
      </Layout>
    </>
  );
};

export default AdminStd;
