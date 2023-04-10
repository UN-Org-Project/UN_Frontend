import React, { useEffect, useState } from "react";
import Title from "../../../components/SectionTitle/Title";
import Table from "../../../components/Table/Table";
import DashboardRow from "../../../components/Table/RowInfo/TableRow";

const Dashboard = () => {
  // to handle if any action happened then show the submit button

  /////////////////// Handling Students Data?////////////////
  const [isChanged, setIsChanged] = useState(false);
  const [absence, setAbsence] = useState({});
  const [note, setNote] = useState({});
  const [level, setLevel] = useState({});

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
  const handleSubmit = () => {
    let arrystudent = [];
    const updatedStudents = students.map((student) => {
      const updatedStudent = {
        ...student,
        absence: absence[student.id] || "present",
        note: note[student.id] || "No note heve been add !",
        level: level[student.id] || 2
      };

      arrystudent.push(updatedStudent);

      return updatedStudent;
    });
    console.log(arrystudent);
  };

  ////////////////////////////////////////
  ///////paggination///////////////////////////////////////////////////////
  //For next and prev buttons.
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  ////////////////////////////////////////

  // Assume data is an array of objects to be paginated
  const students = [
    { id: "s1", name: "muath", parentid: "p2" },
    { id: "s2", name: "Ahmad", parentid: "p3" },
    { id: "s3", name: "Yassen", parentid: "p3" },
    { id: "s4", name: "muhammad", parentid: "p4" }
  ];
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
          {/* pass the changed value to table to handle the submit button */}
          <Table
            th2="Contact"
            th3="Absence"
            isChanged={isChanged}
            onClick={handleSubmit}>
            {/* pass the function that will change the value if any action happened */}
            {/* Render the sliced data on the current page */}
            {slicedData.map((student) => (
              <DashboardRow
                key={student.id}
                id={student.id}
                name={student.name}
                absence={absence[student.id]}
                note={note[student.id]}
                level={level[student.id]}
                onAbsenceChange={handleAbsenceChange}
                onNoteChange={handleNoteChange}
                onLevelChange={handleLevelChange}
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
