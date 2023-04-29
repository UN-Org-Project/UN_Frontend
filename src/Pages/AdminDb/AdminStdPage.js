import React, { useEffect, useState } from "react";
import { InfoStudentsForm, Sidbar } from "../../sections";
import AdminContent from "../../sections/Content/AdminContent";
import { CardSidbar } from "../../components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import axios from "axios";
import "./AdminDb.css";

const AdminStd = () => {
  const id = localStorage.getItem("userData");
  const islogged = localStorage.getItem("islogged");
  let adminName;
  const [isLoading, setIsLoading] = useState(false);

  console.log(id);
  console.log(islogged);

  const data = useEffect(() => {
    async function fetch() {
      const response = await axios.get(
        "http://localhost:8000/getAdmininfo/" + id
      );
      //  console.log(response.data);
      //    setAdminData(response.data.adminData);
      adminName = response.data.adminName;
    }
    fetch();
  }, []);

  //console.log(adminName);

  //console.log(adminData);

  const notify = (message, type) => {
    if (type === "Error") toast.error(message);
    else if (type === "Success") toast.success(message);
  };

  const links = [
    { url: "/Admin/AdminStudents", text: "Add Students" },
    { url: "/Admin/AdminTeachers", text: "Add Teacher" },
    { url: "/Admin/InfoStudents", text: "Info Students" },
    { url: "/Admin/InfoTeachers", text: "Info Teachers" },
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

  return (
    <>
      <Sidbar links={links}>
        <CardSidbar name="math Mhawich" role="Admin Dashboard" />
      </Sidbar>
      <AdminContent>
        {isLoading && <div className="spinner"> </div>}
        <div className="p-4  border-gray-200  rounded-lg dark:border-gray-700">
          <div className=" bg-blue-600 rounded-t-lg text-white text-2xl mt-5 p-7 ">
                <h1>STUDENT INFORMATION FORM</h1>
            </div>
          <div className=" bg-blue-300 p-7 rounded-b-lg ">
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
              </div>
              </div>
      </AdminContent>
    </>
  );
};

export default AdminStd;
