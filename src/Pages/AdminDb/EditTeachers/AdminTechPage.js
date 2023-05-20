import React, { useState, useEffect } from "react";
// import { Sidbar } from "../../../sections";
// import AdminContent from "../../../sections/Content/AdminContent";
// import { CardSidbar } from "../../../components";
import InfoTeacherForm from "../../../sections/Form/InfoTeacherForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./../AdminDb.css";
import axios from "axios";
import Layout from "../../../Layout/Layout";
import { AdminAvatar } from "../../../components/assets";
import {
  FaChalkboardTeacher,
  FaUserEdit,
  FaUserGraduate
} from "react-icons/fa";
import AdminContent from "../../../sections/Content/AdminContent";
import Btn from "../../../components/SideBar/MenuBtn/Btn";
import MainTitle from "../../../components/SectionTitle/MainTitle";
import { Edit } from "@mui/icons-material";

const AdminTech = () => {
  const id = localStorage.getItem("userData");
  const [isLoading, setIsLoading] = useState(false);
  const notify = (message, type) => {
    if (type === "Error") toast.error(message);
    else if (type === "Success") toast.success(message);
  };

  const [teacherName, setTeacherName] = useState("");
  const [gender, setGender] = useState("Male");
  const [experience, setExperience] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [email, setEmail] = useState("");
  const [classValue, setClassValue] = useState("class1");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [TeacherAddress, setTeacherAddress] = useState("");
  const [adminName, setAdminData] = useState("");

  const data = useEffect(() => {
    async function fetch() {
      const response = await axios.get(
        "http://localhost:8000/getAdmininfo/" + id
      );
      console.log(response.data);

      const adminname = response.data.adminName;
      setAdminData(adminname);
      console.log(adminName);
    }
    fetch();
  }, []);
  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();

    try {
      const Data = {
        name: teacherName,
        gender: gender,
        experiance: experience,
        dateOfBirth: dateOfBirth,
        _class: classValue,
        telepohoneNumber: phoneNumber,
        adress: TeacherAddress,
        emailAdress: email
      };

      // For see all input fields in form
      // for (const [key, value] of formData.entries()) {
      //   console.log(key, value);
      // }

      const response = await axios.put("http://localhost:8000/teacher", {
        Data
      });
      setIsLoading(false);
      if (!response.ok) {
        console.log(response);
        notify(response.data.message, "Success");
        setTeacherName("");
        setExperience("");
        setDateOfBirth("");
        setEmail("");
        setPhoneNumber("");
        setTeacherAddress("");
      } else {
        notify("Added Error", "Error");
        console.log("back error info");
      }
    } catch (error) {
      setIsLoading(false);
      notify("Added Error", "Error");
      console.log("Invalid info");
    }
  };

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
        <MainTitle title="Add Teacher Form" />
        {isLoading && <div className="spinner"> </div>}
        <InfoTeacherForm
          teacherName={teacherName}
          setTeacherName={setTeacherName}
          gender={gender}
          setGender={setGender}
          experience={experience}
          setExperience={setExperience}
          dateOfBirth={dateOfBirth}
          setDateOfBirth={setDateOfBirth}
          email={email}
          setEmail={setEmail}
          classValue={classValue}
          setClassValue={setClassValue}
          phoneNumber={phoneNumber}
          TeacherAddress={TeacherAddress}
          setTeacherAddress={setTeacherAddress}
          notify={notify}
          setPhoneNumber={setPhoneNumber}
          handleSubmit={handleSubmit}
        />
      </Layout>
      {/* <Sidbar links={links}>
        <CardSidbar name="muath Mhawich" role="Admin Dashboard" />
      </Sidbar> */}
    </>
  );
};

export default AdminTech;
