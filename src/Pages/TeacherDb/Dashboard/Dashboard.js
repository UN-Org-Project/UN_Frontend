import React, { useEffect, useState } from "react";
import Title from "../../../components/SectionTitle/Title";
import Table from "../../../components/Table/Table";
import DashboardRow from "../../../components/Table/RowInfo/TableRow";
import StatisCard from "../../../components/StatisticsCard/StatisCard";
import { ToastContainer, toast } from "react-toastify";
import { useOutletContext } from "react-router-dom";
import axios from "axios";
import "../TeacherDb.css";
import Pagination from "@mui/material/Pagination";

const Dashboard = (props) => {
  // to handle if any action happened then show the submit button

  /////////////////// Handling Students Data?////////////////
  //////////////Students Data////////////////////////////
  const studentData = useOutletContext();
  const students = studentData.students;
  /////////////////////////////////////////
  const [isChanged, setIsChanged] = useState(false);
  const [absence, setAbsence] = useState({});
  const [note, setNote] = useState({});
  const [level, setLevel] = useState(2);
  const [isLoading, setIsLoading] = useState(false);
  const [numberOfAbsence, setNumberofAbsence] = useState(0);
  const [numberOfPresent, setNumberofPresent] = useState(students.length);
  const [StudentInfo, setStudentInfo] = useState(false);

  //////////////////////////notify fore Response//////////////////
  const notify = (message, type) => {
    if (type === "Error") toast.error(message);
    else if (type === "Success") toast.success(message);
  };

  // useEffect(() => {
  //   console.log(students);
  // }, []);

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

  ////////////////Submited Data////////////////////////////////
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
    console.log(numberOfAbsence);
    console.log(numberabsence);
    console.log(studentsData);
    ////////////////////////// Send Data to Back End/////////////////////////////////
    try {
      const response = await axios.post(
        "http://localhost:8000/add_Abs_Note_Rate",
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

  /////////////////////////////
  ///////paggination////////
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
  //////////////////////////

  return (
    <div id="view" className="flex ml-80">
      <div className="flex flex-col flex-1 ml-1 gap-5">
        <div>
          <Title h2="Student Absence Note And Level" />
          <ToastContainer />
          {/* this Card to show the total student and the absence */}

          {isLoading && <div className="spinner"> </div>}

          <StatisCard
            absenceNumber={numberOfAbsence}
            presentNumber={numberOfPresent}
          />

          {/* pass the changed value to table to handle the submit button */}

          <Table
            th1="student"
            th2="Contact"
            th3="Absence"
            isChanged={isChanged}
            onClick={handleSubmit}
            notify={notify}>
            {/* pass the function that will change the value if any action happened */}
            {/* Render the sliced data on the current page */}
            {slicedData.map((student) => (
              <DashboardRow
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
          {/* Render the next and previous buttons */}

          <Pagination
            className="flex justify-center"
            color="primary"
            count={totalPages}
            page={currentPage}
            onChange={(event, page) => {
              HadlePagenation(page);
            }}
          />

          <br />

          <br />

          <br />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
