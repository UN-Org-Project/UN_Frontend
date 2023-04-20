import Title from "../../../components/SectionTitle/Title";
import Table from "../../../components/Table/Table";
import SelectComp from "../../../components/SelectComponent/SelectComp";
import { AddMarkRow } from "../../../components/Table/RowInfo/TableRow";
import { useState, useEffect } from "react";
import StatisCard from "../../../components/StatisticsCard/StatisCard";
import { useOutletContext } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "../TeacherDb.css";
import Pagination from "@mui/material/Pagination";
const AddMarks = () => {
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
  const [convertCart, setConvertCart] = useState(false);
  useEffect(() => {
    setConvertCart(true);
  }, []);

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
      const response = await axios.post("http://localhost:8000/addtypeExam", {
        studentsMark
      });
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
    <div id="view" className="flex ">
      <div className="flex flex-col flex-1 ml-1 gap-5">
        <div>
          <div className="flex items-center justify-between">
            <Title h2="Student Add Marks " />
            {/* {!isLoading && <div className="spinner"> </div>} */}
            <ToastContainer />

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

          {/* pass the changed value to table to handle the submit button */}
          {isLoading && <div className="spinner"> </div>}
          {!isChanged && (
            <div
              className="p-4 mb-4  w-fit text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
              role="alert">
              <span className="font-medium">Info !</span> Choose the Subject and
              type Exame please.
            </div>
          )}
          <Table
            th1="Student"
            th2="Contact"
            th3="Add Marks"
            isChanged={isChanged}
            onClick={handleSubmit}>
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
            {/* pass the function that will change the value if any action happend */}
          </Table>

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

          <StatisCard
            absenceNumber={RangeSubject}
            presentNumber={numberOfStudent}
            convertCart={convertCart}
          />
        </div>
      </div>
    </div>
  );
};

export default AddMarks;
