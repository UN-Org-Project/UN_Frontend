import React, { useEffect, useState } from "react";
import Title from "../../../components/SectionTitle/Title";
import Table from "../../../components/Table/Table";

import DashboardRow from "../../../components/Table/RowInfo/TableRow";

const Dashboard = () => {
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
          <Title h2="Student Infromation" />
          {/* pass the changed value to table to handle the submit button */}
          <Table th2="Contact" th3="Absence" isChanged={isChanged}>
            {/* pass the function that will change the value if any action happend */}
            <DashboardRow name="ahmad" id="1" onChange={handleChange} />
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
