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

  const children = childrenData.childe.filter((child) => child._id === id);
  const child = children[0];

  const rating = child.dalyRate;
  const star = rating[rating.length - 1] ? rating[rating.length - 1].star : 0;
  const absence = child.absence;
  const notes = child.notes;

  const absenceNumber = absence.filter(
    (absence) => absence.absecnceState === "absence"
  ).length;

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
