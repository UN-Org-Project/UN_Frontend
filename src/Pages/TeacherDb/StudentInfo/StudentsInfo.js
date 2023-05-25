import React, { useEffect, useState } from "react";
import Table from "../../../components/Table/Table";
import DashboardRow from "../../../components/Table/RowInfo/TableRow";
import { Info, boy, boy1, boy2, boy3 } from "../../../components/assets";
import { useOutletContext } from "react-router-dom";
import MainTitle from "../../../components/SectionTitle/MainTitle";
const StudentInfo = (props) => {
  const [StudentInfo, setStudentInfo] = useState(false);
  useEffect(() => {
    setStudentInfo(true);
  }, []);

  const studentData = useOutletContext();
  const students = studentData.students.sort(
    (a, b) => b.studentLevelRate - a.studentLevelRate
  );
  console.log(students);

  const imageUrls = [boy, boy1, boy2, boy3];
  const generateRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    return imageUrls[randomIndex];
  };
  return (
    <>
      <MainTitle img={Info} title="Student Information" />

      <div className="mt-12 grid grid-cols-1 gap-6 relative ">
        <Table
          tableName="Student Info"
          th1="Student"
          th2="Gender"
          th3="Date Of Birth"
          th4="Absence"
          th5="Level Rate"
          StudentInfo={StudentInfo}
        >
          {students.map((student, index) => (
            <DashboardRow
              generateRandomImage={imageUrls[index]}
              key={student._id}
              id={student._id}
              name={student.studentName}
              gender={student.gender}
              dateofBirth={student.dateOfBirth}
              absence={
                student.absence.filter(
                  (absence) => absence.absecnceState === "absence"
                ).length
              }
              range={student.studentLevelRate}
              StudentInfo={StudentInfo}
            />
          ))}
        </Table>
      </div>
    </>
  );
};

export default StudentInfo;
