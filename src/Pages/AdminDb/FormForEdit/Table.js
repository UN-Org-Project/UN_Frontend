import React, { useState, useEffect } from "react";
import { BsCloudFog, BsFillTrashFill } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import Avatar from "@mui/material/Avatar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Table.css";
import {
  boy,
  boy1,
  boy2,
  boy3,
  teacher,
  teacher1,
} from "../../../components/assets";

export const Table = (props) => {
  // !----- Generat Random Images For Students
  if (props.state == "student") {
    const imageUrls = [boy, boy1, boy2, boy3];

    return (
      <>
        <ToastContainer />
        <div className="mt-[4rem] relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md pb-2">
          {/* !----- THIS FOR THE NAME OF THE TABLE -----! */}
          <div className="relative bg-clip-border mx-0 rounded-l overflow-hidden bg-gradient-to-tr from-mainColor to-alterColor text-white shadow-blue-500/40 shadow-lg -mt-6 mb-8 p-5">
            <h6 className="block antialiased tracking-normal font-sans font-bold leading-relaxed text-white text-title-md">
              {props.tableName}
            </h6>
          </div>

          {/* !----- THIS IS THE CONTAINER OF THE TABLE -----! */}
          <div className="p-6 overflow-x-scroll xl:overflow-hidden px-0 pt-0 pb-2">
            {/* !----- START TABLE -----! */}
            <table className="w-full min-w-[640px] table-auto">
              <thead>
                <tr className=" bg-clip-border bg-gradient-to-tr from-mainColor to-alterColor ">
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
                            <img src={imageUrls[2]} alt="profile" />
                          </div>
                          <div className="ml-3">
                            <p className="block antialiased font-sans text-title-sm font-medium text-alterColor">
                              {row.studentName}
                            </p>
                          </div>
                        </div>
                      </td>

                      <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                        <p className="block antialiased font-sans text-title-sm font-medium text-alterColor">
                          {row.adress}
                        </p>
                      </td>

                      <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                        <p className="block antialiased font-sans text-title-sm font-medium text-alterColor">
                          {row.class}
                        </p>
                      </td>

                      <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                        <div className="flex items-center space-x-3.5">
                          <button
                            className="hover:text-primary"
                            onClick={() => props.deleteRow(row._id)} /////////////////
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
                              className="edit-btn text-xl text-alterColor"
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
      </>
    );
  } else if (props.state == "teacher") {
    const imageUrls = [teacher, teacher1];
    // const generateRandomImage = () => {
    //   const randomIndex = Math.floor(Math.random() * imageUrls.length);
    //   return imageUrls[randomIndex];
    // };

    return (
      <>
        <ToastContainer />
        <div className="mt-[4rem] relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md pb-2">
          {/* !----- THIS FOR THE NAME OF THE TABLE -----! */}
          <div className="relative bg-clip-border mx-0 rounded-l overflow-hidden bg-gradient-to-tr from-mainColor to-alterColor text-white shadow-blue-500/40 shadow-lg -mt-6 mb-8 p-5">
            <h6 className="block antialiased tracking-normal font-sans  font-semibold leading-relaxed text-white text-title-md">
              {props.tableName}
            </h6>
          </div>

          {/* !----- THIS IS THE CONTAINER OF THE TABLE -----! */}
          <div className="p-6 overflow-x-scroll xl:overflow-hidden px-0 pt-0 pb-2">
            {/* !----- START TABLE -----! */}
            <table className="w-full min-w-[640px] table-auto">
              <thead>
                <tr className=" bg-clip-border bg-gradient-to-tr from-mainColor to-alterColor ">
                  <th className="px-4 py-4 border-b border-blue-gray-50  text-left text-base font-semibold text-white uppercase tracking-wider">
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
                            <img src={imageUrls[1]} alt="profile" />
                          </div>
                          <div className="ml-3">
                            <p className="block antialiased font-sans text-title-sm font-medium text-alterColor">
                              {row.name}
                            </p>
                          </div>
                        </div>
                      </td>

                      <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                        <p className="block antialiased font-sans text-title-sm font-medium text-alterColor">
                          {row.adress}
                        </p>
                      </td>

                      <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                        <p className="block antialiased font-sans text-title-sm font-medium text-alterColor">
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
                              className="edit-btn text-xl text-alterColor"
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
      </>
    );
  }
};
