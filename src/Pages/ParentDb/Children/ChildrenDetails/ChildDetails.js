import React, { useState } from "react";
import ChildInfo from "../../../../components/ChildInfo/ChildInfo";
import Title from "../../../../components/SectionTitle/Title";

import { ParentAvatar } from "../../../../components/assets";
import SelectComp from "../../../../components/SelectComponent/SelectComp";
import Table from "../../../../components/Table/Table";
import DashboardRow, {
  AbsenceDetailsRow,
  ShowMark
} from "../../../../components/Table/RowInfo/TableRow";
import AbsenceTable from "../../../../components/Table/AbsenceTable";

import "./ChildDetails.css";
import ParentCards from "../../../../components/StatisticsCard/ParentCards";
import Card from "../../../../components/StatisticsCard/Card/Card";
import { useParams } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

const ChildDetails = (props) => {
  const { id } = useParams();
  console.log("Child ID:", id);
  const childrenData = useOutletContext();
  const children = childrenData.childe.filter((child) => child._id === id);
  const child = children[0];

  const rating = child.dalyRate;
  const absence = child.absence;
  const notes = child.notes;
  let Exame;
  let subjects = [];

  const absenceNumber = absence.filter(
    (absence) => absence.absecnceState === "absence"
  ).length;

  const [isChanged, setIsChanged] = useState(false);

  const handleExameChange = (value) => {
    Exame = child.typeExam[value].subjects;
    console.log(Exame);
    const numProperties = Object.keys(Exame).length;
    if (numProperties === 3) {
      const math = Exame.math;
      math.name = "Math";
      subjects.push(math);
      const English = Exame.english;
      math.name = "English";
      subjects.push(English);
      const Arabic = Exame.arbic;
      math.name = "Arabic";
      subjects.push(Arabic);

      console.log(subjects);

      setIsChanged(true);
    }
    console.log(numProperties);
    setIsChanged(true);
    console.log(value);
  };
  return (
    <>
      <div id="view" className="flex ml-80">
        <div className="flex flex-col flex-1 ml-1 gap-5">
          <div>
            <Title h2="Child Information" />

            <div className="flex justify-between items-center">
              <div className=" relative">
                <div className=" relative -top-59 bg-clip-border  rounded-xl overflow-hidden bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-blue-500/40 shadow-lg -mt-6 mb-8 p-5">
                  <h6 className="  block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white">
                    Child Absence
                  </h6>
                </div>

                <AbsenceTable>
                  <AbsenceDetailsRow
                    absence={absence[absence.length - 1]}
                    rating={rating[rating.length - 1].star}
                    note={notes[notes.length - 1]}
                    teaherId={child.teacher_id}
                  />
                </AbsenceTable>
              </div>

              <ChildInfo childrenInfo={child} />
            </div>

            <div className="flex justify-between">
              <div className="flex flex-col justify-center items-center">
                <SelectComp
                  onChange={handleExameChange}
                  lable="Select Exame"
                  options={[
                    { value: "first", label: "First" },
                    { value: "second", label: "Second" },
                    { value: "final", label: "Final" }
                  ]}
                />
                <Table th1="Subject" th2="Contact" th3="Mark">
                  {isChanged &&
                    subjects.map((subject) => (
                      <ShowMark key={subject.name} subject={subject} />
                    ))}
                </Table>
                {!isChanged && (
                  <div
                    className="p-4 mb-4  w-fit text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
                    role="alert">
                    <span className="font-medium">Info !</span> Choose the type
                    Exame please to Show marks .
                  </div>
                )}
              </div>

            <div >
              <ParentCards >
                <Card
                  cardName="Average"
                  statistics={child.studentLevelRate + " %"}
                  isGreen={false}
                />
                <Card
                  cardName="Absence"
                  statistics={absenceNumber}
                  isGreen={true}
                />
              </ParentCards>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChildDetails;
