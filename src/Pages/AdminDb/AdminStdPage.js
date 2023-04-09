import React, { useEffect, useState } from "react";
import { InfoStudentsForm, Sidbar } from "../../sections";
import AdminContent from "../../sections/Content/AdminContent";
import { CardSidbar } from "../../components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import "./AdminDb.css";

const AdminStd = () => {
  const id = localStorage.getItem("userData");
  console.log(id);

  // useEffect(async () => {
  //   const response = await axios.get("http://localhost:8000/Admininfo/" + id);
  //   console.log(response.data);
  // }, []);
  const [isLoading, setIsLoading] = useState(false);
  const notify = (message, type) => {
    if (type === "Error") toast.error(message);
    else if (type === "Success") toast.success(message);
  };

  const links = [
    { url: "/Admin/AdminStudents", text: "Add Students" },
    { url: "/Admin/AdminTeachers", text: "Add Teacher" }
  ];

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
        notify("Added Error", response.data.message);
      }
    } catch (error) {
      setIsLoading(false);
      notify("Error", "Error");
      console.log("Invalid info");
    }
  };

  return (
    <>
      <Sidbar links={links}>
        <CardSidbar name="Muath Hariri" role="Admin Dashboard" />
      </Sidbar>
      <AdminContent titleTable="STUDENT INFORMATION FORM">
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
      </AdminContent>
    </>
  );
};

export default AdminStd;
