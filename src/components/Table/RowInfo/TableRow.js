import React from "react";
import Rating from "../../Rating/Rating";
import Avatar from "@mui/material/Avatar";
import RatingComp from "../../Rating/Rating";
const DashboardRow = (props) => {
  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-100 bg-white text-sm">
        <div className="flex items-center">
          <div className="flex-shrink-0 w-10 h-10">
            <Avatar alt={props.name} src={props.imgSrc} />
          </div>
          <div className="ml-3">
            <p className="text-blue-400 whitespace-no-wrap">{props.name}</p>
          </div>
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-100 bg-white text-sm  text-left">
        <button
          type="button"
          className="bg-blue-500  inline-block rounded bg-info px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)]"
        >
          Contact
        </button>
      </td>
      <td className="px-5 py-5 border-b border-gray-100 bg-white text-sm">
        <div className=" flex flex-wrap sm:gap-1">
          <div className="flex items-center mr-4">
            <input
              id={props.id + "Absent"}
              type="radio"
              value=""
              name="colored-radio"
              className="w-4 h-4 cursor-pointer"
            />
            <label
              htmlFor={props.id + "Absent"}
              className="ml-2 text-sm font-medium text-blue-600 dark:text-gray-300 cursor-pointer"
            >
              Absent
            </label>
          </div>
          <div className="flex items-center mr-4">
            <input
              id={props.id + "Present"}
              type="radio"
              value=""
              name="colored-radio"
              className="w-4 h-4 cursor-pointer"
            />
            <label
              htmlFor={props.id + "Present"}
              className="ml-2 text-sm font-medium text-blue-600 dark:text-gray-300 cursor-pointer"
            >
              Present
            </label>
          </div>
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-100 bg-white text-sm">
        <button
          type="button"
          className="bg-blue-500 inline-block rounded bg-info px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)]"
        >
          SEND NOTE
        </button>
      </td>
      <td className="px-5 py-5 border-b border-gray-100 bg-white text-sm">
        <Rating />
      </td>
    </tr>
  );
};

export const AddMarkRow = (props) => {
  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-100 bg-white text-sm">
        <div className="flex items-center">
          <div className="flex-shrink-0 w-10 h-10">
            <Avatar alt={props.name} src={props.imgSrc} />
          </div>
          <div className="ml-3">
            <p className="text-blue-400 whitespace-no-wrap">{props.name}</p>
          </div>
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-100 bg-white text-sm  text-left">
        <button
          type="button"
          className="bg-blue-500  inline-block rounded bg-info px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)]"
        >
          Contact
        </button>
      </td>
      <td className="px-5 py-5 border-b border-gray-100 bg-white text-sm">
        <div className=" flex flex-wrap sm:gap-1">
          <div className="flex items-center mr-4">
            <input
              id={props.id + "Absent"}
              type="radio"
              value=""
              name="colored-radio"
              className="w-4 h-4 cursor-pointer"
            />
            <label
              htmlFor={props.id + "Absent"}
              className="ml-2 text-sm font-medium text-blue-600 dark:text-gray-300 cursor-pointer"
            >
              Absent
            </label>
          </div>
          <div className="flex items-center mr-4">
            <input
              id={props.id + "Present"}
              type="radio"
              value=""
              name="colored-radio"
              className="w-4 h-4 cursor-pointer"
            />
            <label
              htmlFor={props.id + "Present"}
              className="ml-2 text-sm font-medium text-blue-600 dark:text-gray-300 cursor-pointer"
            >
              Present
            </label>
          </div>
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-100 bg-white text-sm">
        <button
          type="button"
          className="bg-blue-500 inline-block rounded bg-info px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)]"
        >
          SEND NOTE
        </button>
      </td>
      <td className="px-5 py-5 border-b border-gray-100 bg-white text-sm">
        <RatingComp />
      </td>
    </tr>
  );
};

export default DashboardRow;
