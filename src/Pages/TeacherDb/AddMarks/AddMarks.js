import Title from "../../../components/SectionTitle/Title";
import Table from "../../../components/Table/Table";
import SelectComp from "../../../components/SelectComponent/SelectComp";
import { AddMarkRow } from "../../../components/Table/RowInfo/TableRow";

const AddMarks = () => {
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

          <Table th2="Contact" th3="Add Marks">
            <AddMarkRow name="Mohammed" id="2" />
          </Table>
        </div>
      </div>
    </div>
  );
};

export default AddMarks;
