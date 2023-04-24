import Title from "../../../components/SectionTitle/Title";
import Table from "../../../components/Table/Table";
import SelectComp from "../../../components/SelectComponent/SelectComp";
import { AddMarkRow } from "../../../components/Table/RowInfo/TableRow";
import { useState, useEffect } from "react";
import StatisCard from "../../../components/StatisticsCard/StatisCard";
import { useOutletContext } from "react-router-dom";
import axios from "axios";
import "../TeacherDb.css";
const AddMarks = () => {
  // const [isLoading, setIsLoading] = useState(true);
  const studentData = useOutletContext();
  const students = studentData.students;
  const [isChanged, setIsChanged] = useState(false);
  const [marks, setMarks] = useState({});
  const [note, setNote] = useState({});
  const [subject, setSubject] = useState({});
  const [exame, setExame] = useState("");
  const [level, setLevel] = useState("");

  /////////////////////Handling Change Data//////////////////////////
  const handleLevelChange = (id, value) => {
    setLevel((prevState) => ({
      ...prevState,
      [id]: value
    }));
    setIsChanged(true);
  };
  const handleSubjectChange = (value) => {
    setSubject(value);
    setIsChanged(true);
    console.log(value);
  };

  const handleExameChange = (value) => {
    setExame(value);
    setIsChanged(true);
    console.log(value);
  };

  const handleMarkChange = (id, value) => {
    setMarks((prevState) => ({
      ...prevState,
      [id]: value
    }));
    setIsChanged(true);
  };

  // دالة للتعامل مع تغييرات الملاحظات
  const handleNoteChange = (id, value) => {
    setNote((prevState) => ({
      ...prevState,
      [id]: value
    }));
    setIsChanged(true);
  };
  const handleSubmit = async () => {
    let studentsMark = [];
    const updatedStudents = students.map((student) => {
      // يتم تحديث بيانات كل طالب في الجدول

      const updatedStudent = {
        ...student,
        marks: marks[student._id] || 0,
        note: note[student._id] || "No note heve been add !",
        level: level[student._id] || 2,
        subject: subject,
        exame: exame
      };

      studentsMark.push(updatedStudent);

      // ويتم إرجاعه ككائن جديد لتحديث قيمة حالة الطلاب
      return updatedStudent;
    });
    //////////////////// send Data to Back End/////////////////////////////////////////////
    try {
      const response = await axios.post("http://localhost:8000/addtypeExam", {
        studentsMark
      });

      console.log(response.data);
      setExame("");
      setSubject("");
      setMarks({});
      setNote({});
      setLevel({});
    } catch (error) {
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
          <div className="flex items-center justify-between">
            <Title h2="Student Infromation" />
            {/* {!isLoading && <div className="spinner"> </div>} */}

            <SelectComp
              onChange={handleSubjectChange}
              lable="Select Subject"
              options={[
                { value: "math", label: "Math" },
                { value: "English", label: "English" },
                { value: "Computer", label: "Computer" }
              ]}
            />
            <SelectComp
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
          <Table
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
              />
            ))}
            {/* pass the function that will change the value if any action happend */}
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

          <StatisCard />
        </div>
      </div>
    </div>
  );
};

export default AddMarks;
