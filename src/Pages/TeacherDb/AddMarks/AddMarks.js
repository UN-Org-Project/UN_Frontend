import Title from "../../../components/SectionTitle/Title";
import Table from "../../../components/Table/Table";
import SelectComp from "../../../components/SelectComponent/SelectComp";
import { AddMarkRow } from "../../../components/Table/RowInfo/TableRow";
import { useState } from "react";

const AddMarks = () => {
  // to handle if any action happed then show the submit button
  const [isChanged, setIsChanged] = useState(false);
  const handleChange = (chandedValue) => {
    setIsChanged(chandedValue);
    console.log(chandedValue);
  };

  return (
    <div id="view" className="flex">
      <div className="flex flex-col flex-1 ml-1 gap-5">
        <div>
          <div className="flex items-center justify-between">
            <Title h2="Student Infromation" />

            <SelectComp
              lable="Select Subject"
              options={[
                { value: "math", label: "Math" },
                { value: "English", label: "English" },
                { value: "Computer", label: "Computer" },
              ]}
            />
            <SelectComp
              lable="Select Exame"
              options={[
                { value: "First", label: "First" },
                { value: "Second", label: "Second" },
                { value: "Final", label: "Final" },
              ]}
            />
          </div>

          {/* pass the changed value to table to handle the submit button */}
          <Table th2="Contact" th3="Add Marks" isChanged={isChanged}>
            {/* pass the function that will change the value if any action happend */}
            <AddMarkRow name="Mohammed" id="2" onChange={handleChange} />
          </Table>
        </div>
      </div>
    </div>
  );
};

export default AddMarks;
