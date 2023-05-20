import React, { useEffect, useState } from "react";

import { ParentAvatar } from "../assets";

import "react-circular-progressbar/dist/styles.css";
import Progress from "../CircularProgressBar/Progress";

const ChildInfo = (props) => {
  // useEffect(() => {
  //   // console.log(props.childrenInfo);
  // }, [props]);

  return (
    <div
      className="bg-white bg-gradient-to-bl from-gradientFrom to-gradientTo text-white cursor-pointer bg-clip-border rounded-xl transition-shadow duration-500  shadow-md hover:shadow-2xl hover:shadow-slate-400 py-2"
      onClick={props.handleNavigat}>
      <div className="photo-wrapper p-2">
        <img
          className="w-24 h-24 rounded-full mx-auto"
          src={ParentAvatar}
          alt="Child image"
        />
      </div>
      <div className="p-2">
        <h3 className="text-center text-xl text-gray-900 font-medium leading-8">
          {props.childrenInfo.studentName}
        </h3>
        <div className="text-center text-gray-400 text-xs font-semibold capitalize">
          <p>{props.childrenInfo.class}</p>
        </div>
        <table className="text-xs my-3">
          <tbody>
            <tr>
              <td className="px-2 py-2 text-gray-500 font-semibold">Address</td>
              <td className="px-2 py-2">{props.childrenInfo.adress}</td>
            </tr>
            <tr>
              <td className="px-2 py-2 text-gray-500 font-semibold">
                Date Of Birth{" "}
              </td>
              <td className="px-2 py-2">{props.childrenInfo.dateOfBirth}</td>
            </tr>
            <tr>
              <td className="px-2 py-2 text-gray-500 font-semibold">Teacher</td>
              <td className="px-2 py-2">{props.childrenInfo.teacherName}</td>
            </tr>
          </tbody>
        </table>

        <div className="flex items-center justify-center my-3">
          {/* Progress Bar  */}
          <Progress percentage={+props.childrenInfo.studentLevelRate || 0} />
        </div>
      </div>
    </div>

    // {/* <div
    //   className="bg-white cursor-pointer bg-clip-border rounded-xl transition-shadow duration-500  shadow-md hover:shadow-2xl hover:shadow-slate-400 flex flex-col items-center p-5 gap-3 "
    //   onClick={props.handleNavigat}
    // >
    //   <img
    //     className="w-24 h-24 rounded-full shadow-lg"
    //     src={ParentAvatar}
    //     alt="Child image"
    //   />
    //   <h5 className=" text-xl font-medium text-blue-600 dark:text-white hover:text-white">
    //     {props.childrenInfo.studentName}
    //   </h5>
    //   <div className=" flex flex-col gap-1">
    //     <div className="flex items-center gap-3">
    //       <span className="text-sm dark:text-gray-400">Gender:</span>
    //       <span className="text-sm dark:text-gray-400">
    //         {props.childrenInfo.gender}
    //       </span>
    //     </div>
    //     <div className="flex items-center gap-3">
    //       <span className="text-sm dark:text-gray-400">Class:</span>
    //       <span className="text-sm dark:text-gray-400">
    //         {props.childrenInfo.class}
    //       </span>
    //     </div>
    //     <div className="flex items-center gap-3">
    //       <span className="text-sm font-bold dark:text-gray-400">
    //         Teacher Name:
    //       </span>
    //       <span className="text-sm font-bold dark:text-gray-400">
    //         {props.childrenInfo.teacherName}
    //       </span>
    //     </div>
    //   </div>
    //   {/* Progress Bar  */}
    //   {/* <Progress percentage={+props.childrenInfo.studentLevelRate || 0} /> */}
    // {/* </div> */}
  );
};

export default ChildInfo;
