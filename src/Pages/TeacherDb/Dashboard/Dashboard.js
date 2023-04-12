import React, { useEffect, useState } from "react";
import Title from "../../../components/SectionTitle/Title";
import Table from "../../../components/Table/Table";
import DashboardRow from "../../../components/Table/RowInfo/TableRow";
import StatisCard from "../../../components/StatisticsCard/StatisCard";
import { ToastContainer, toast } from "react-toastify";
import { useOutletContext } from "react-router-dom";
import axios from "axios";
import "../TeacherDb.css";

const Dashboard = (props) => {
  // to handle if any action happened then show the submit button

  /////////////////// Handling Students Data?////////////////
  //////////////Students Data////////////////////////////
  const studentData = useOutletContext();
  const students = studentData.students;
  /////////////////////////////////////////
  const [isChanged, setIsChanged] = useState(false);
  const [absence, setAbsence] = useState("");
  const [note, setNote] = useState("");
  const [level, setLevel] = useState(2);
  const [isLoading, setIsLoading] = useState(false);
  const [numberOfAbsence, setNumberofAbsence] = useState(0);
  const [numberOfPresent, setNumberofPresent] = useState(students.length);

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
      }
    } catch (error) {
      setIsLoading(false);
      notify("error", "Error");
      console.log(error);
    }
  };

  ////////////////////////////////////////
  ///////paggination///////////////////////////////////////////////////////
  //For next and prev buttons.
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  ////////////////////////////////////////

  // Assume data is an array of objects to be paginated

  // Calculate the number of pages
  const totalPages = Math.ceil(students.length / itemsPerPage);

  // Function to go to the next page
  const handleNextPage = () => {
    setCurrentPage((currentPage + 1) % totalPages);
  };

  // Function to go to the previous page
  const handlePrevPage = () => {
    setCurrentPage((currentPage + totalPages - 1) % totalPages);
  };

  // Slice the data based on the current page and number of items per page
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const slicedData = students.slice(startIndex, endIndex);

  return (
    <div id="view" className="flex">
      <div className="flex flex-col flex-1 ml-1 gap-5">
        <div>
          <Title h2="Student Information" />
          <ToastContainer />
          {/* this Card to show the total student and the absence */}

          {isLoading && <div className="spinner"> </div>}

          <StatisCard
            absenceNumber={numberOfAbsence}
            presentNumber={numberOfPresent}
          />

          {/* pass the changed value to table to handle the submit button */}

          <Table
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
              />
            ))}
          </Table>
          {/* Render the next and previous buttons */}
          <div className="flex justify-center">
            <button
              onClick={handlePrevPage}
              className="text-sm text-indigo-50 transition duration-150 hover:bg-green-400 bg-green-500 font-semibold py-2 px-4 rounded-l">
              Prev
            </button>
            <button
              onClick={handleNextPage}
              className="text-sm border-l-4 border-white text-indigo-50 transition duration-150 hover:bg-green-400 bg-green-500  font-semibold py-2 px-4 rounded-r">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
