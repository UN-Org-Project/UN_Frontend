import React, { useEffect, useState } from "react";
import Title from "../../../components/SectionTitle/Title";
import Table from "../../../components/Table/Table";
import DashboardRow from "../../../components/Table/RowInfo/TableRow";

import { useOutletContext } from "react-router-dom";
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
  return (
    <div id="view" className="flex ml-80">
      <div className="flex flex-col flex-1 ml-1 gap-5">
        <div>
          <Title h2="Student Information" />
          <Table
            th1="Student"
            th2="Gender"
            th3="Date Of Barth"
            StudentInfo={StudentInfo}>
            {students.map((student) => (
              <DashboardRow
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
      </div>
    </div>
  );
};

export default StudentInfo;
