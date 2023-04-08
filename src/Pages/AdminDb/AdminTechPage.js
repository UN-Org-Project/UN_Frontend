  import React, { useState } from "react";
  import { Sidbar } from "../../sections";
  import AdminContent from "../../sections/Content/AdminContent";
  import { CardSidbar } from "../../components";
  import InfoTeacherForm from "../../sections/Form/InfoTeacherForm";
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  const AdminTech = () => {

    const notify = (message, type) => {
    if (type === "Error") toast.error(message);
    else if (type === "Success") toast.success(message);
  };

    const links = [
      { url: "/Admin/AdminStudents", text: "Add Students" },
      { url: "/Admin/AdminTeachers", text: "Add Teacher" },
    ];

    const [teacherName, setTeacherName] = useState("");
    const [gender, setGender] = useState("Male");
    const [experience, setExperience] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [email, setEmail] = useState("");
    const [classValue, setClassValue] = useState("class1");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [TeacherAddress, setTeacherAddress] = useState("");


    const handleSubmit = async(e) => {
      e.preventDefault();
      
      try {
        const formData = new FormData();
        formData.append("teacherName", teacherName);
        formData.append("gender", gender);
        formData.append("experience", experience);
        formData.append("dateOfBirth", dateOfBirth);
        formData.append("email", email);
        formData.append("classValue", classValue);
        formData.append("phoneNumber", phoneNumber);
        formData.append("TeacherAddress", TeacherAddress);
        
        // For see all input fields in form 
        for (const [key, value] of formData.entries()) {
          console.log(key, value);
        }
        
        const response = await fetch("http://localhost:8000/teacher", {
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
          setTeacherName("");
          setExperience("");
          setDateOfBirth("");
          setEmail("");
          setPhoneNumber("");
          setTeacherAddress("");
      }
    };

    
    return (
      <>
        <Sidbar links={links}>
          <CardSidbar name="Muath Hariri" role="Admin Dashboard" />
        </Sidbar>
        <AdminContent titleTable="TEACHER INFORMATION FORM">
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
