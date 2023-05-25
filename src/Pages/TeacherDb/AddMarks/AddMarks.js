import Table from "../../../components/Table/Table";
import SelectComp from "../../../components/SelectComponent/SelectComp";
import { AddMarkRow } from "../../../components/Table/RowInfo/TableRow";
import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "../TeacherDb.css";
import Pagination from "@mui/material/Pagination";
import MainTitle from "../../../components/SectionTitle/MainTitle";
import ParentCards from "../../../components/StatisticsCard/ParentCards";
import Card from "../../../components/StatisticsCard/Card/Card";
const AddMarks = () => {
  const id = localStorage.getItem("userData");
  const [isLoading, setIsLoading] = useState(false);
  const studentData = useOutletContext();
  const students = studentData.students;
  const [isChanged, setIsChanged] = useState(false);
  const [marks, setMarks] = useState({});
  const [note, setNote] = useState({});
  const [subject, setSubject] = useState({});
  const [exame, setExame] = useState("");
  const [level, setLevel] = useState("");
  const [RangeSubject, setRangeSubject] = useState(0);
  const [numberOfStudent, setNumberOfStudent] = useState(students.length);
  // const [convertCart, setConvertCart] = useState(false);
  // useEffect(() => {
  //   setConvertCart(true);
  // }, []);

  /////////////////////Handling Change Data//////////////////////////
  const handleLevelChange = (id, value) => {
    setLevel((prevState) => ({
      ...prevState,
      [id]: value
    }));
    // setIsChanged(true);
  };
  const handleSubjectChange = (value) => {
    setSubject(value);
    setIsChanged(true);
    console.log(value);
  };

  const handleExameChange = (value) => {
    setExame(value);
    //setIsChanged(true);
    // console.log(value);
  };

  const handleMarkChange = (id, value) => {
    setMarks((prevState) => ({
      ...prevState,
      [id]: value
    }));
    //setIsChanged(true);
  };

  const handleNoteChange = (id, value) => {
    setNote((prevState) => ({
      ...prevState,
      [id]: value
    }));
    // setIsChanged(true);
  };
  //////////////////////////notify fore Response//////////////////
  const notify = (message, type) => {
    if (type === "Error") toast.error(message);
    else if (type === "Success") toast.success(message);
  };

  /////////////////Syubmited Data/////////////////////

  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    let studentsMark = [];
    const updatedStudents = students.map((student) => {
      const updatedStudent = {
        ...student,
        marks: marks[student._id] || 0,
        note: note[student._id] || "No note heve been add !",
        level: level[student._id] || 2,
        subject: subject,
        exame: exame || "first"
      };

      studentsMark.push(updatedStudent);

      return updatedStudent;
    });
    const range = studentsMark.map((student) => student.marks);
    const totalMarks = range.reduce(
      (accumulator, currentValue) => +accumulator + +currentValue,
      0
    );
    const average = totalMarks / range.length;
    setRangeSubject(average);

    console.log(totalMarks);
    console.log(range);

    //////////////////// send Data to Back End/////////////////////////////////////////////
    try {
      const response = await axios.post(
        "http://localhost:8000/addtypeExam/" + id,
        {
          studentsMark
        }
      );
      if (!response.ok) {
        const data = response.data;
        console.log(data);
        notify(data, "Success");
        setIsLoading(false);
        setSlicedData(students.slice(0, itemsPerPage));
        setCurrentPage(1);
        setIsChanged(false);
      }

      console.log(response.data);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      notify("error", "Error");
      console.log(error);
    }

    console.log(studentsMark);
  };
  // useEffect(() => {
  //   const spinnerTimeout = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 3000);
  //   return () => clearTimeout(spinnerTimeout);
  // }, [handleSubmit]);
  /////////////Paggination ///////////////////////////////////////////
  ///////paggination////////

  const itemsPerPage = 3;

  const [currentPage, setCurrentPage] = useState(1);

  const [slicedData, setSlicedData] = useState(students.slice(0, itemsPerPage)); // Calculate the number of pages

  const totalPages = Math.ceil(students.length / itemsPerPage);

  let startIndex = 0;

  let endIndex = itemsPerPage; // handle with onChange if pagenation

  const HadlePagenation = (page) => {
    console.log(page);

    setCurrentPage(page);

    startIndex = (page - 1) * 3;

    console.log(startIndex);

    endIndex = startIndex + 3;

    console.log(endIndex);

    setSlicedData(students.slice(startIndex, endIndex));
  }; //////////////////////////

  return (
    <>
      {/* !----- THE NAME OF THE SECTION -----! */}
      <MainTitle title="Student Add Marks " />

      {/* !----- THIS CONTAINER FOR CARDS THAT IT SHOW THE NUMBER OF SUTDENTS AND THE AVERAGE OF THERE MARKS -----! */}
      <div className="-mt-3 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-32 2xl:gap-16 mb-7">
        {/* !----- START STATISTICS CARDS -----! */}
        <ParentCards>
          {/* !----- THIS CARD FOR NUMBER OF STUDENTS -----! */}
          <Card
            cardName="Number Of Students"
            statistics={numberOfStudent}
            isGreen={true}
          />

          {/* !----- THIS CARD FOR THE AVERAGE OF MARKS -----! */}
          <Card
            cardName=" Average Of Marks "
            statistics={RangeSubject + "%"}
            isGreen={false}
          />
        </ParentCards>
        {/* !----- END STATISTICS CARDS -----! */}
      </div>

      {/* {!isLoading && <div className="spinner"> </div>} */}
      <ToastContainer />

      <div
        className=" flex md:flex-row md:items-center md:justify-around flex-col justify-center items-center gap-4 mb-20  "
        // className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 4 2xl:gap-7.5 mb-20 "
      >
        <div className=" bg-clip-border rounded-xl bg-gradient-to-tr from-gradientFrom to-gradientTo  w-80 p-4 ">
          <SelectComp
            isChanged={isChanged}
            onChange={handleSubjectChange}
            lable="Select Subject"
            options={[
              { value: "math", label: "Math" },
              { value: "english", label: "English" },
              { value: "arbic", label: "arbic" },
              { value: "history", label: "history" },
              { value: "science", label: "science" }
            ]}
          />
        </div>
        <div
          className={`  md:block ${
            isChanged ? "block" : "hidden"
          } bg-clip-border rounded-xl bg-gradient-to-tr from-blue-500 to-blue-400 w-80 p-4 justify-self-end`}>
          <SelectComp
            isChanged={isChanged}
            onChange={handleExameChange}
            lable="Select Exame"
            options={[
              { value: "First", label: "First" },
              { value: "Second", label: "Second" },
              { value: "Final", label: "Final" }
            ]}
          />
        </div>
      </div>

      {/* pass the changed value to table to handle the submit button */}
      {isLoading && <div className="spinner"> </div>}

      {/* pass the function that will change the value if any action happend */}
      <div className="my-4 grid grid-cols-1 gap-6 ">
        {isChanged ? (
          // {/* TABLE HEADER */}
          <Table
            tableName="Add Marks"
            th1="Student"
            th2="Contact"
            th3="Add Marks"
            th4="Notes Bord"
            th5="Rating"
            isChanged={isChanged}
            onClick={handleSubmit}
            pagination={
              <Pagination
                className="flex justify-center"
                color="primary"
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
            {slicedData.map((student) => (
              <AddMarkRow
                key={student._id}
                name={student.studentName}
                id={student._id}
                marks={marks[student._id]}
                note={note[student._id]}
                level={level[student._id]}
                onMarkChange={handleMarkChange}
                onNoteChange={handleNoteChange}
                onLevelChange={handleLevelChange}
                isChanged={isChanged}
                parentid={student.parent_id}
              />
            ))}
          </Table>
        ) : (
          <div className="w-full flex justify-center items-center">
            <div
              className="p-4 mb-4 w-fit text-sm text-white rounded-lg bg-clip-border bg-gradient-to-br from-blue-500 to-blue-400  dark:bg-gray-800 dark:text-blue-400"
              role="alert">
              <span className="font-medium">Info !</span> Choose the Subject and
              type Exame please.
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AddMarks;
