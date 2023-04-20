import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import Table from "../../../../components/Table/Table";
import SelectComp from "../../../../components/SelectComponent/SelectComp";
import { ShowMark } from "../../../../components/Table/RowInfo/TableRow";
import Title from "../../../../components/SectionTitle/Title";
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
    <div id="view" className="flex ">
      <div className="flex flex-col flex-1 ml-1 gap-5">
        <div className="flex justify-between">
          <div className="flex flex-col justify-center items-center">
            <Title h2="Marks Your child  " />
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
        </div>
      </div>
    </div>
  );
};

export default ShowMarks;
