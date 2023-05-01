import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import Title from "../../../../../components/SectionTitle/Title";
import SelectComp from "../../../../../components/SelectComponent/SelectComp";
import Table from "../../../../../components/Table/Table";
import { ShowMark } from "../../../../../components/Table/RowInfo/TableRow";

const ShowMarks = (props) => {
  const { id } = useParams();
  const childrenData = useOutletContext();
  const [isChanged, setIsChanged] = useState(false);
  const [subjects, setSubjects] = useState([]);
  const [notification, setnotification] = useState(
    "Choose the typeExame please to Show marks "
  );
  const children = childrenData.childe.filter((child) => child._id === id);
  const child = children[0];
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
      <div class="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-title-md2 font-semibold text-mainColor dark:text-white">
          <Title h2="Marks Your child  " />
        </h2>
      </div>

      <div className="flex justify-center items-center mb-10">
        <div className=" bg-clip-border rounded-xl bg-gradient-to-tr from-blue-500 to-blue-400 w-80 p-4 ">
          <SelectComp
            onChange={handleExameChange}
            lable="Select Exam"
            options={[
              { value: "first", label: "First" },
              { value: "second", label: "Second" },
              { value: "final", label: "Final" },
            ]}
          />
        </div>
      </div>

      <div class="mb-4 grid grid-cols-1 gap-6 ">
        {isChanged ? (
          <Table
            tableName="Exams Marks"
            th1="Subject"
            th2="Marks"
            th3="Notes"
            th4="Rateing"
          >
            {subjects.map((subject) => (
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
        ) : (
          <div className="w-full flex justify-center items-center">
            <div
              className="p-4 mb-4 w-fit text-sm text-white rounded-lg bg-clip-border bg-gradient-to-br from-blue-500 to-blue-400  dark:bg-gray-800 dark:text-blue-400"
              role="alert"
            >
              <span className="font-medium">Info !</span> {notification}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ShowMarks;
