import React, { useEffect, useState } from "react";
import ChildInfo from "../../../../../components/ChildInfo/ChildInfo";
import Title from "../../../../../components/SectionTitle/Title";
import Pagination from "@mui/material/Pagination";
import { ParentAvatar } from "../../../../../components/assets";
import SelectComp from "../../../../../components/SelectComponent/SelectComp";
import Table from "../../../../../components/Table/Table";
import DashboardRow, {
  AbsenceDetailsRow,
  ShowMark,
} from "../../../../../components/Table/RowInfo/TableRow";
import AbsenceTable from "../../../../../components/Table/AbsenceTable";

import "./ChildDetails.css";
import ParentCards from "../../../../../components/StatisticsCard/ParentCards";
import Card from "../../../../../components/StatisticsCard/Card/Card";
import { Link, NavLink, useParams } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import { SectionHeader, SectionWrapper } from "../../../../../components";
import { ContactEmergency } from "@mui/icons-material";

const ChildDetails = (props) => {
  const { id } = useParams();
  const childrenData = useOutletContext();

  useEffect(() => {
    console.log("Hello form child details");
    console.log(childrenData);
    console.log("This childrenData");
  }, []);

  const children = childrenData.childe.filter((child) => child._id === id);
  const child = children[0];

  const rating = child.dalyRate.reverse();

  const absence = child.absence.reverse();
  const notes = child.notes.reverse();

  const absenceNumber = absence.filter(
    (absence) => absence.absecnceState === "absence"
  ).length;

  // /////paggination////////
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [slicedData, setSlicedData] = useState(absence.slice(0, itemsPerPage)); // Calculate the number of pages
  const totalPages = Math.ceil(absence.length / itemsPerPage);
  let startIndex = 0;
  let endIndex = itemsPerPage;

  // // handle with onChange if pagenation
  const HadlePagenation = (page) => {
    setCurrentPage(page);
    startIndex = (page - 1) * itemsPerPage;
    endIndex = startIndex + itemsPerPage;
    setSlicedData(absence.slice(startIndex, endIndex));
  };
  //////////////////////////
  return (
    <>
      <div class="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-title-md2 font-semibold text-mainColor dark:text-white">
          <Title h2="Child Information" />
        </h2>
        <NavLink
          className="inline-flex items-center justify-center gap-2.5 rounded-md bg-gradient-to-tr from-gradientFrom to-gradientTo py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-6 xl:px-7"
          to="parentChating"
        >
          Contact with Teacher
          <ContactEmergency />
        </NavLink>

        {/* <button
          type="button"
          className=" bg-clip-border bg-gradient-to-tr from-gradientFrom to-gradientTo  text-white shadow-blue-500/40 shadow-lg inline-block rounded bg-info px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)]"
        >
          Contact with Teacher
        </button>{" "} */}
      </div>

      <div className="mb-4 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* <div className=" relative flex flex-col text-white rounded-xl bg-clip-border bg-gradient-to-r to-blue-400 from-blue-500 text-gray-700 shadow-md overflow-hidden lg:col-span-2 xl:col-span-2"> */}
        {/* <span className="px-6 antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white">
            Child Absence
          </span> */}
        {/* <h6 class="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white">
            Child Attendance
          </h6> */}
        {/* <div class="relative bg-clip-border mx-4 rounded-xl overflow-hidden bg-white text-blue-500 shadow-blue-500/40 shadow-lg  mb-5 p-3">
            <h6 class="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed ">
              Child Attendance
            </h6>
          </div> */}
        <AbsenceTable
          Pagination={
            <Pagination
              className="flex justify-center"
              color="secondary"
              count={totalPages}
              page={currentPage}
              onChange={(event, page) => {
                HadlePagenation(page);
              }}
            />
          }
        >
          {slicedData.map((absence, index) => (
            <AbsenceDetailsRow
              key={Math.random()}
              id={Math.random()}
              absence={absence}
              note={notes[index]}
              rating={rating[index]}
            />
          ))}
        </AbsenceTable>

        {/* </div> */}
        <div className="lg:relative lg:block flex justify-center items-center -order-1 lg:order-none">
          <ChildInfo childrenInfo={child} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 4 2xl:gap-7.5">
        <ParentCards>
          <Card cardName="Absence" statistics={absenceNumber} isGreen={true} />
          <Card
            cardName="Average"
            statistics={child.studentLevelRate + " %"}
            isGreen={false}
          />
        </ParentCards>
      </div>
    </>
  );
};

export default ChildDetails;
