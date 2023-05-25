import React, { useEffect, useState } from "react";

import { AddMark, boy, boy1, boy2, boy3 } from "../assets";

import "react-circular-progressbar/dist/styles.css";
import Progress from "../CircularProgressBar/Progress";

const ChildInfo = (props) => {
  const imageUrls = [boy, boy1, boy2, boy3];
  const generateRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    return imageUrls[randomIndex];
  };
  // useEffect(() => {
  //   // console.log(props.childrenInfo);
  // }, [props]);

  return (
    <div
      className=" group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-[1.05]  transition-all duration-[0.5s] bg-gradient-to-bl from-gradientFrom to-gradientTo text-white cursor-pointer bg-clip-border rounded-xl  shadow-md hover:shadow-2xl hover:shadow-slate-400 py-2"
      onClick={props.handleNavigat}
    >
      <div className="photo-wrapper p-2">
        <img
          className="w-24 h-24 rounded-full mx-auto"
          src={generateRandomImage()}
          alt="Child image"
        />
      </div>
      <div className="p-2">
        <h3 className="text-center text-title-md text-gray font-semibold leading-8">
          {props.childrenInfo.studentName}
        </h3>
        <div className="text-center text-gray-2 text-title-xsm font-semibold capitalize">
          <p>{props.childrenInfo.class}</p>
        </div>
        <table className="text-xs my-3">
          <tbody>
            <tr>
              <td className="px-2 py-2 text-whiten font-semibold text-title-xsm">
                Address
              </td>
              <td className="px-2 py-2 text-[16px] text-gray font-medium">
                {props.childrenInfo.adress}
              </td>
            </tr>
            <tr>
              <td className="px-2 py-2 text-whiten font-semibold text-title-xsm">
                Date Of Birth{" "}
              </td>
              <td className="px-2 py-2 text-[16px] text-gray font-medium">
                {props.childrenInfo.dateOfBirth}
              </td>
            </tr>
            <tr>
              <td className="px-2 py-2 text-whiten font-semibold text-title-xsm">
                Teacher
              </td>
              <td className="px-2 py-2 text-[16px] text-gray font-medium">
                {props.childrenInfo.teacherName}
              </td>
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
