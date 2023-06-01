import React, { useState } from "react";
import Table from "../../../components/Table/Table";
import DashboardRow from "../../../components/Table/RowInfo/TableRow";
import { ToastContainer, toast } from "react-toastify";
import { useOutletContext } from "react-router-dom";
import axios from "axios";
import "../TeacherDb.css";
import Pagination from "@mui/material/Pagination";
import ParentCards from "../../../components/StatisticsCard/ParentCards";
import Card from "../../../components/StatisticsCard/Card/Card";
import MainTitle from "../../../components/SectionTitle/MainTitle";
import { Attendance, boy, boy1, boy2, boy3 } from "../../../components/assets";

const Dashboard = (props) => {
  const id = localStorage.getItem("userData");

  // to handle if any action happened then show the submit button
  // Handling Students Data?
  // Students Data

  const studentData = useOutletContext();
  const students = studentData.students;
  const Classname = studentData.class;

  const [isChanged, setIsChanged] = useState(false);
  const [absence, setAbsence] = useState({});
  const [note, setNote] = useState({});
  const [level, setLevel] = useState(2);
  const [isLoading, setIsLoading] = useState(false);
  const [numberOfAbsence, setNumberofAbsence] = useState(0);
  const [numberOfPresent, setNumberofPresent] = useState(students.length);
  const [StudentInfo, setStudentInfo] = useState(false);

  // notify fore Response//////////////////
  const notify = (message, type) => {
    if (type === "Error") toast.error(message);
    else if (type === "Success") toast.success(message);
  };

  const handleLevelChange = (id, value) => {
    setLevel((prevState) => ({
      ...prevState,
      [id]: value
    }));
    setIsChanged(true);
  };

  const handleAbsenceChange = (id, value) => {
    setAbsence((prevState) => ({
      ...prevState,
      [id]: value
    }));
    setIsChanged(true);
  };

  const handleNoteChange = (id, value) => {
    setNote((prevState) => ({
      ...prevState,
      [id]: value
    }));
    setIsChanged(true);
  };

  //Submited Data
  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    let studentsData = [];
    const updatedStudents = students.map((student) => {
      const updatedStudent = {
        ...student,
        absence: absence[student._id] || "present",
        note: note[student._id] || "No note heve been add !",
        level: level[student._id] || 2
      };

      studentsData.push(updatedStudent);

      return updatedStudent;
    });
    const numberabsence = studentsData.filter(
      (student) => student.absence === "absence"
    ).length;
    setNumberofAbsence(numberabsence);
    setNumberofPresent(students.length - numberabsence);

    // Send Data to Back End
    try {
      const response = await axios.post(
        "http://localhost:8000/add_Abs_Note_Rate/" + id,
        {
          studentsData
        }
      );
      if (!response.ok) {
        const data = response.data;
        console.log(data);
        notify("success", "Success");
        setIsLoading(false);
        setIsChanged(false);
        setLevel(2);
        setSlicedData(students.slice(0, itemsPerPage));
        setCurrentPage(1);
        setAbsence({});
        setNote({});
      }
    } catch (error) {
      setIsLoading(false);
      notify("error", "Error");
      console.log(error);
    }
  };

  // paggination
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const [slicedData, setSlicedData] = useState(students.slice(0, itemsPerPage)); // Calculate the number of pages
  const totalPages = Math.ceil(students.length / itemsPerPage);
  let startIndex = 0;
  let endIndex = itemsPerPage;
  // handle with onChange if pagenation
  const HadlePagenation = (page) => {
    setCurrentPage(page);
    startIndex = (page - 1) * itemsPerPage;
    endIndex = startIndex + itemsPerPage;
    setSlicedData(students.slice(startIndex, endIndex));
  };

  const imageUrls = [boy, boy1, boy2, boy3];
  const generateRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    return imageUrls[randomIndex];
  };
  return (
    <>
      {isLoading && <div className="spinner"> </div>}
      {/* !-- THE TITLE OF THIS SECTION --! */}
      <MainTitle img={Attendance} title="Student Absence Note And Level" />

      {/* COMPONTENT TO DISPLAY IF THE FUNCTION SUCCESSED OR FAILD */}
      <ToastContainer />

      {/* !-- START THE TABLE FOR TAKE THE ATTENDANCE OF THE SUDENTS AND SEND NOTES AND RATE THEM --! */}
      <div className="my-4 grid grid-cols-1 gap-6 ">
        {/* TABLE HEADER */}
        <Table
          tableName={`Attendance of Students / ${Classname}`}
          th1="Students"
          th2="Contact"
          th3="Absence"
          th4="Notes Board"
          th5="Rating"
          isChanged={isChanged}
          onClick={handleSubmit}
          notify={notify}
          pagination={
            <Pagination
              className="flex justify-center "
              color="standard"
              count={totalPages}
              page={currentPage}
              onChange={(event, page) => {
                HadlePagenation(page);
              }}
            />
          }>
          {/* TABLE BODY */}
          {/* pass the function that will change the value if any action happened */}
          {/* Render the sliced data on the current page */}
          {slicedData.map((student, index) => (
            <DashboardRow
              generateRandomImage={imageUrls[3]}
              key={student._id}
              id={student._id}
              name={student.studentName}
              absence={absence[student._id]}
              note={note[student._id]}
              level={level[student._id]}
              onAbsenceChange={handleAbsenceChange}
              onNoteChange={handleNoteChange}
              onLevelChange={handleLevelChange}
              parentid={student.parent_id}
              isChanged={isChanged}
              StudentInfo={StudentInfo}
            />
          ))}
        </Table>
      </div>
      {/* !-- END THE TABLE FOR TAKE THE ATTENDANCE OF THE SUDENTS AND SEND NOTES AND RATE THEM --! */}

      {/* --! START STATISTICES CARDS THAT DISPLAY NUMBER OF STUDENT AND TOTAL ABSINCES --!   */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 4 2xl:gap-7.5">
        <ParentCards>
          <Card
            cardName="Number of Attendance "
            statistics={numberOfPresent}
            isGreen={true}
          />
          <Card
            cardName="Total Absences "
            statistics={numberOfAbsence}
            isGreen={false}
          />
        </ParentCards>
      </div>
      {/* --! END STATISTICES CARDS THAT DISPLAY NUMBER OF STUDENT AND TOTAL ABSINCES --!   */}
      {/* pass the changed value to table to handle the submit button */}
    </>
  );
};

export default Dashboard;
