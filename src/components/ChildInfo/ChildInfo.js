import React, { useEffect, useState } from "react";

import { ParentAvatar } from "../assets";

import "react-circular-progressbar/dist/styles.css";
import Progress from "../CircularProgressBar/Progress";

const ChildInfo = (props) => {
  useEffect(() => {
    console.log(props.childrenInfo);
  }, [props]);

  return (
    <div
      className=" w-60 bg-white transition cursor-pointer border border-gray-200 rounded-xl shadow hover:shadow-xl dark:bg-gray-800 dark:border-gray-700"
      onClick={props.handleNavigat}>
      <div className="flex justify-end px-4 pt-4"></div>
      <div className="flex flex-col items-center pb-10">
        <img
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
          src={ParentAvatar}
          alt="Child image"
        />
        <h5 className="mb-1 text-xl font-medium text-blue-600 dark:text-white">
          {props.childrenInfo.studentName}
        </h5>
        <div className=" flex flex-col gap-1">
          <div className="flex items-center gap-3">
            <span className="text-sm text-blue-600 dark:text-gray-400">
              Gender:
            </span>
            <span className="text-sm text-blue-600 dark:text-gray-400">
              {props.childrenInfo.gender}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-blue-600 dark:text-gray-400">
              Class:
            </span>
            <span className="text-sm text-blue-600 dark:text-gray-400">
              {props.childrenInfo.class}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-blue-600 font-bold dark:text-gray-400">
              Teacher Name:
            </span>
            <span className="text-sm text-blue-600 font-bold dark:text-gray-400">
              Muath
            </span>
          </div>
        </div>

        {/* <div className="flex mt-4 space-x-3 md:mt-6">
            <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-blue-600 bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add friend</a>
            <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Message</a>
        </div> */}
      </div>
      {/* Progress Bar  */}
      <Progress percentage={+props.childrenInfo.studentLevelRate} />
    </div>

    // <div classNameName="flex flex-col items-center justify-center gap-2">
    //   <Avatar
    //     src={ParentAvatar}
    //     alt="avatar"
    //     variant="circular"
    //     classNameName="w-20 h-20"
    //   />

    //   <div classNameName="flex flex-col ">
    //     <h3 classNameName=" text-blue-600 font-bold text-center"> Child Name</h3>
    //     <div classNameName="flex flex-col items-start">
    //       <div classNameName="flex items-center gap-2 mb-2">
    //         <span classNameName="text-blue-500 font-medium  ">ID Number: </span>
    //         <span classNameName="text-blue-500 font-medium ">20</span>
    //       </div>
    //       <div classNameName="flex items-center gap-2 mb-2">
    //         <span classNameName="text-blue-500 font-medium ">className: </span>
    //         <span classNameName="text-blue-500 font-medium "> 3A </span>
    //       </div>
    //       <div classNameName="flex items-center gap-2 mb-2">
    //         <span classNameName="text-blue-500 font-bold ">Teacher: </span>
    //         <span classNameName="text-blue-500 font-bold ">Muath</span>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default ChildInfo;
