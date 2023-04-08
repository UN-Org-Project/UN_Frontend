  import React, { useState } from "react";
  import { InfoStudentsForm, Sidbar } from "../../sections";
  import AdminContent from "../../sections/Content/AdminContent";
  import { CardSidbar } from "../../components";
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  const AdminStd = () => {

    const notify = (message, type) => {
    if (type === "Error") toast.error(message);
    else if (type === "Success") toast.success(message);
  };

    const links = [
      { url: "/Admin/AdminStudents", text: "Add Students" },
      { url: "/Admin/AdminTeachers", text: "Add Teacher" },
    ];

    const [studentName, setStudentName] = useState("");
    const [gender, setGender] = useState("Male");
    const [ParentName, setParentName] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [email, setEmail] = useState("");
    const [classValue, setClassValue] = useState("class1");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [StudentAddress, setStudentAddress] = useState("");


    const handleSubmit = async(e) => {
      e.preventDefault();
      
      try {
        const formData = new FormData();
        formData.append("studentName", studentName);
        formData.append("gender", gender);
        formData.append("ParentName", ParentName);
        formData.append("dateOfBirth", dateOfBirth);
        formData.append("email", email);
        formData.append("classValue", classValue);
        formData.append("phoneNumber", phoneNumber);
        formData.append("StudentAddress", StudentAddress);
        
        // For see all input fields in form 
        for (const [key, value] of formData.entries()) {
          console.log(key, value);
        }
        
        const response = await fetch("http://localhost:8000/parent", {
          method: "POST",
          body: formData,
        })
        if (response.ok) {
          console.log (response)
          notify("Added Sucessfuly ", "Success");
        } 
      } catch (error) {
        notify("Added Error", "Error");
        console.log("Invalid info");
          setStudentName("");
          setParentName("");
          setDateOfBirth("");
          setEmail("");
          setPhoneNumber("");
          setStudentAddress("");
      }
    };

    
    return (
      <>
        <Sidbar links={links}>
          <CardSidbar name="Muath Hariri" role="Admin Dashboard" />
        </Sidbar>
        <AdminContent titleTable="STUDENT INFORMATION FORM">
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
