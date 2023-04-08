import React, { useEffect, useState } from "react";
import Title from "../../../components/SectionTitle/Title";
import Table from "../../../components/Table/Table";

import DashboardRow from "../../../components/Table/RowInfo/TableRow";

const Dashboard = () => {
  return (
    <div id="view" className="flex">
      <div className="flex flex-col flex-1 ml-1 gap-5">
        <div>
          <Title h2="Student Infromation" />
          <Table th2="Contact" th3="Absence">
            <DashboardRow name="ahmad" id="1" />
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
