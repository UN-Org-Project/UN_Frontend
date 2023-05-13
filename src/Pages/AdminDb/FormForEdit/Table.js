import React from "react";

import { BsFillTrashFill } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import Avatar from "@mui/material/Avatar";
import "./Table.css";

export const Table = (props) => {

  // console.log(rows);
  if (props.state == "student") {
    return (
      <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md pb-2">
        {/* !----- THIS FOR THE NAME OF THE TABLE -----! */}
        <div className="relative bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-blue-500/40 shadow-lg -mt-6 mb-8 p-5">
          <h6 className="block antialiased tracking-normal font-sans  font-semibold leading-relaxed text-white text-title-md">
            {props.tableName}
          </h6>
        </div>

        {/* !----- THIS IS THE CONTAINER OF THE TABLE -----! */}
        <div className="p-6 overflow-x-scroll xl:overflow-hidden px-0 pt-0 pb-2">
          {/* !----- START TABLE -----! */}
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr className=" bg-clip-border bg-gradient-to-tr from-blue-600 to-blue-400 ">
                <th className="px-4 py-4 border-b border-blue-gray-50  text-left  text-base font-semibold text-white uppercase tracking-wider">
                  Name
                </th>
                <th className="px-4 py-4 border-b border-blue-gray-50  text-left text-base  font-semibold text-white uppercase tracking-wider">
                  Address
                </th>
                <th className="px-4 py-4 border-b border-blue-gray-50  text-left text-base  font-semibold text-white uppercase tracking-wider">
                  Class
                </th>
                <th className="px-4 py-4 border-b border-blue-gray-50  text-left text-base  font-semibold text-white uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {props.rows.map((row, idx) => {
                return (
                  <tr key={idx}>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-10 h-10">
                          <Avatar alt={"kkk"} />
                        </div>
                        <div className="ml-3">
                          <p className="block antialiased font-sans text-title-xsm font-medium text-blue-400">
                            {row.studentName}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="block antialiased font-sans text-title-xsm font-medium text-blue-400">
                        {row.adress}
                      </p>
                    </td>

                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="block antialiased font-sans text-title-xsm font-medium text-blue-400">
                        {row.class}
                      </p>
                    </td>

                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <div className="flex items-center space-x-3.5">
                        <button
                          className="hover:text-primary"
                          onClick={() => props.deleteRow(row._id)}
                        >
                          <BsFillTrashFill className="delete-btn text-xl" />
                        </button>

                        <button
                          className="hover:text-primary"
                          onClick={() => {
                            props.editRow(row._id);
                          }}
                        >
                          <FaEdit
                            id={row._id}
                            className="edit-btn text-xl text-blue-400"
                          />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  } else if (props.state == "teacher") {
    return (
      <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md pb-2">
        {/* !----- THIS FOR THE NAME OF THE TABLE -----! */}
        <div className="relative bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-blue-500/40 shadow-lg -mt-6 mb-8 p-5">
          <h6 className="block antialiased tracking-normal font-sans  font-semibold leading-relaxed text-white text-title-md">
            {props.tableName}
          </h6>
        </div>

        {/* !----- THIS IS THE CONTAINER OF THE TABLE -----! */}
        <div className="p-6 overflow-x-scroll xl:overflow-hidden px-0 pt-0 pb-2">
          {/* !----- START TABLE -----! */}
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr className=" bg-clip-border bg-gradient-to-tr from-blue-600 to-blue-400 ">
                <th className="px-4 py-4 border-b border-blue-gray-50  text-left  text-base font-semibold text-white uppercase tracking-wider">
                  Name
                </th>
                <th className="px-4 py-4 border-b border-blue-gray-50  text-left text-base  font-semibold text-white uppercase tracking-wider">
                  Address
                </th>
                <th className="px-4 py-4 border-b border-blue-gray-50  text-left text-base  font-semibold text-white uppercase tracking-wider">
                  Class
                </th>
                <th className="px-4 py-4 border-b border-blue-gray-50  text-left text-base  font-semibold text-white uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {props.rows.map((row, idx) => {
                return (
                  <tr key={idx}>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-10 h-10">
                          <Avatar alt={"kkk"} />
                        </div>
                        <div className="ml-3">
                          <p className="block antialiased font-sans text-title-xsm font-medium text-blue-400">
                            {row.name}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="block antialiased font-sans text-title-xsm font-medium text-blue-400">
                        {row.adress}
                      </p>
                    </td>

                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="block antialiased font-sans text-title-xsm font-medium text-blue-400">
                        {row.class}
                      </p>
                    </td>

                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <div className="flex items-center space-x-3.5">
                        <button
                          className="hover:text-primary"
                          onClick={() => props.deleteRow(row._id)}
                        >
                          <BsFillTrashFill className="delete-btn text-xl" />
                        </button>

                        <button
                          className="hover:text-primary"
                          onClick={() => {
                            props.editRow(row._id);
                          }}
                        >
                          <FaEdit
                            id={row._id}
                            className="edit-btn text-xl text-blue-400"
                          />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
};
