import React, { useEffect, useState } from "react";
import ChildInfo from "../../../../components/ChildInfo/ChildInfo";
import Title from "../../../../components/SectionTitle/Title";
import Pagination from "@mui/material/Pagination";
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

  const children = childrenData.childe.filter((child) => child._id === id);
  const child = children[0];

  const rating = child.dalyRate.reverse();

  const absence = child.absence.reverse();
  const notes = child.notes.reverse();

  const absenceNumber = absence.filter(
    (absence) => absence.absecnceState === "absence"
  ).length;

  ///////paggination////////
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [slicedData, setSlicedData] = useState(absence.slice(0, itemsPerPage)); // Calculate the number of pages
  const totalPages = Math.ceil(absence.length / itemsPerPage);
  let startIndex = 0;
  let endIndex = itemsPerPage;
  // handle with onChange if pagenation
  const HadlePagenation = (page) => {
    setCurrentPage(page);
    startIndex = (page - 1) * itemsPerPage;
    endIndex = startIndex + itemsPerPage;
    setSlicedData(absence.slice(startIndex, endIndex));
  };
  //////////////////////////

  return (
    <>
      <div id="view" className="flex ">
        <div className="flex flex-col flex-1 ml-1 gap-5">
          <div>
            <Title h2="Child Information" />
            <button
              type="button"
              className="  bg-clip-border bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-blue-500/40 shadow-lg inline-block rounded bg-info px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)]">
              Contact with Teacher
            </button>

            <div className="flex justify-between items-center">
              <div className=" relative">
                <span className="text-transparent text-2xl bg-clip-text bg-gradient-to-r to-main-blue from-main-green">
                  Child Absence
                </span>
                <AbsenceTable>
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
                <Pagination
                  className="flex justify-center"
                  color="primary"
                  count={totalPages}
                  page={currentPage}
                  onChange={(event, page) => {
                    HadlePagenation(page);
                  }}
                />

                <br />

                <br />

                <br />
              </div>

              <div className="">
                <ChildInfo childrenInfo={child} />
              </div>
            </div>

            <div className="flex justify-between">
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
