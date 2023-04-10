import Title from "../../../components/SectionTitle/Title";
import Table from "../../../components/Table/Table";
import SelectComp from "../../../components/SelectComponent/SelectComp";
import { AddMarkRow } from "../../../components/Table/RowInfo/TableRow";
import { useState } from "react";

const AddMarks = () => {
  const [isChanged, setIsChanged] = useState(false);
  const [marks, setMarks] = useState({});
  const [note, setNote] = useState({});
  const [subject, setSubject] = useState({});
  const [exame, setExame] = useState("");
  const [level, setLevel] = useState("");

  const students = [
    { id: "s1", name: "muath", parentid: "p2" },
    { id: "s2", name: "Ahmad", parentid: "p3" },
    { id: "s3", name: "Yassen", parentid: "p3" },
    { id: "s4", name: "muhammad", parentid: "p4" }
  ];
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
  const handleSubmit = () => {
    let arrystudent = [];
    const updatedStudents = students.map((student) => {
      // يتم تحديث بيانات كل طالب في الجدول

      const updatedStudent = {
        ...student,
        marks: marks[student.id] || 0,
        note: note[student.id] || "No note heve been add !",
        level: level[student.id] || 2,
        subject: subject,
        exame: exame
      };

      arrystudent.push(updatedStudent);

      // ويتم إرجاعه ككائن جديد لتحديث قيمة حالة الطلاب
      return updatedStudent;
    });
    console.log(arrystudent);
  };

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
                key={student.id}
                name={student.name}
                id={student.id}
                marks={marks[student.id]}
                note={note[student.id]}
                level={level[student.id]}
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
        </div>
      </div>
    </div>
  );
};

export default AddMarks;
