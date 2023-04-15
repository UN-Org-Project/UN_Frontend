import React, { useState } from "react";
import ChildInfo from "../../../../components/ChildInfo/ChildInfo";
import Title from "../../../../components/SectionTitle/Title";

import { ParentAvatar } from "../../../../components/assets";
import SelectComp from "../../../../components/SelectComponent/SelectComp";
import Table from "../../../../components/Table/Table";
import DashboardRow, {
  AbsenceDetailsRow,
  ShowMark,
} from "../../../../components/Table/RowInfo/TableRow";
import AbsenceTable from "../../../../components/Table/AbsenceTable";

import "./ChildDetails.css";
import ParentCards from "../../../../components/StatisticsCard/ParentCards";
import Card from "../../../../components/StatisticsCard/Card/Card";

const ChildDetails = () => {
  const [isChanged, setIsChanged] = useState(false);
  const [exame, setExame] = useState("");
  const handleExameChange = (value) => {
    setExame(value);
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
                <div className=" absolute -top-16 bg-clip-border  rounded-xl overflow-hidden bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-blue-500/40 shadow-lg -mt-6 mb-8 p-5">
                  <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white">
                    Child Absence
                  </h6>
                </div>

                <AbsenceTable>
                  <AbsenceDetailsRow />
                </AbsenceTable>
              </div>

              <ChildInfo />
            </div>

            <div className="flex justify-between">
              <div className="flex flex-col justify-center items-center">
                <SelectComp
                  onChange={handleExameChange}
                  lable="Select Exame"
                  options={[
                    { value: "First", label: "First" },
                    { value: "Second", label: "Second" },
                    { value: "Final", label: "Final" },
                  ]}
                />
                <Table th1="Subject" th2="Contact" th3="Mark">
                  <ShowMark />
                </Table>
              </div>

              <ParentCards>
                <Card cardName="Average" statistics="70%" isGreen={false} />
                <Card cardName="Absence" statistics="3" isGreen={true} />
              </ParentCards>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChildDetails;
