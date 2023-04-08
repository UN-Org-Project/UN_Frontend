import React, { useState } from "react";
import { Sidbar } from "../../sections";
import AdminContent from "../../sections/Content/AdminContent";
import { CardSidbar } from "../../components";
import InfoTeacherForm from "../../sections/Form/InfoTeacherForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./AdminDb.css";
import axios from "axios";
const AdminTech = () => {
  const [isLoading, setIsLoading] = useState(false);
  const notify = (message, type) => {
    if (type === "Error") toast.error(message);
    else if (type === "Success") toast.success(message);
  };

  const links = [
    { url: "/Admin/AdminStudents", text: "Add Students" },
    { url: "/Admin/AdminTeachers", text: "Add Teacher" }
  ];

  const [teacherName, setTeacherName] = useState("");
  const [gender, setGender] = useState("Male");
  const [experience, setExperience] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [email, setEmail] = useState("");
  const [classValue, setClassValue] = useState("class1");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [TeacherAddress, setTeacherAddress] = useState("");

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

      const response = await axios.post("http://localhost:8000/teacher", {
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

  return (
    <>
      <Sidbar links={links}>
        <CardSidbar name="Muath Hariri" role="Admin Dashboard" />
      </Sidbar>

      <AdminContent titleTable="TEACHER INFORMATION FORM">
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
      </AdminContent>
    </>
  );
};

export default AdminTech;
