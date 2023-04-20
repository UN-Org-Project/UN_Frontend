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
import { Link, useParams } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import { SectionHeader, SectionWrapper } from "../../../../components";

const ChildDetails = (props) => {
  const { id } = useParams();
  const childrenData = useOutletContext();
  const [isChanged, setIsChanged] = useState(false);
  const [subjects, setSubjects] = useState([]);
  const [notification, setnotification] = useState(
    "Choose the typeExame please to Show marks "
  );

  const children = childrenData.childe.filter((child) => child._id === id);
  const child = children[0];

  const rating = child.dalyRate;
  const star = rating[rating.length - 1] ? rating[rating.length - 1].star : 0;
  const absence = child.absence;
  const notes = child.notes;

  const absenceNumber = absence.filter(
    (absence) => absence.absecnceState === "absence"
  ).length;

  const handleExameChange = (value) => {
    if (!Object.keys(child.typeExam).includes(value)) {
      setIsChanged(false);
      setnotification("Exam Marks not yet uploded !");
    } else {
      let Exame = child.typeExam[value].subjects;
      console.log(Exame);
      const numProperties = Object.keys(Exame).length;
      let subject = [];
      if (numProperties === 5) {
        const math = Exame.math;
        math.name = "Math";
        subject.push(math);
        const English = Exame.english;
        English.name = "English";
        subject.push(English);
        const Arabic = Exame.arbic;
        Arabic.name = "Arbic";
        subject.push(Arabic);
        const history = Exame.history;
        history.name = "History";
        subject.push(history);
        const science = Exame.science;
        science.name = "Science";
        subject.push(science);
        setSubjects(subject);

        console.log(subjects);

        setIsChanged(true);
      } else {
        setIsChanged(false);
        setnotification("Exam Marks not yet uploded !");
      }
    }
  };
  return (
    <>
      <div id="view" className="flex ">
        <div className="flex flex-col flex-1 ml-1 gap-5">
          <div>
            <Title h2="Child Information" />

                  <Link to="/parent/showNotes">
                  <button className="border border-green-300 bg-teal-300 px-5 py-2 rounded-lg text-white">
                    show all notes 
                  </button>
                  </Link>


                              <div className="flex justify-between items-center">
                  <div className=" relative">
                    
                      <span className="text-transparent text-2xl bg-clip-text bg-gradient-to-r to-main-blue from-main-green">
                      Child Absence 
                      </span>
                <AbsenceTable>
                  <AbsenceDetailsRow
                    absence={absence[absence.length - 1] || "not found yet"}
                    rating={star}
                    note={notes[notes.length - 1] || "not found yet"}
                    teaherId={child.teacher_id}
                  />
                </AbsenceTable>
              </div>


              <div className="">
                <ChildInfo childrenInfo={child} />
              </div>

            

            </div>


            <div className="flex justify-between">
              
              <div className="flex flex-col justify-center items-center">
                
                <SelectComp
                  onChange={handleExameChange}
                  lable="Select Exam"
                  options={[
                    { value: "first", label: "First" },
                    { value: "second", label: "Second" },
                    { value: "final", label: "Final" }
                  ]}
                />
                
                <Table th1="Subject" th2="Contact" th3="Mark">
                  {isChanged &&
                    subjects.map((subject) => (
                      <ShowMark
                        key={subject.name}
                        id={subject.name}
                        name={subject.name}
                        mark={subject.mark}
                        note={subject.note}
                        star={subject.star}
                      />
                    ))}
                </Table>
                
                {!isChanged && (
                  <div
                    className="p-4 mb-4  w-fit text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
                    role="alert">
                    <span className="font-medium">Info !</span> {notification}
                  </div>
                )}
              </div>

              <div>
                <ParentCards>
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
