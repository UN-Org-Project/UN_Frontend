import React from "react";
import { SectionImg } from "../assets";
const Title = (props) => {
  return (
    <div className="flex flex-wrap items-center -mt-6 py-2.5">
      <img
        src={SectionImg}
        alt="Section Title Logo"
        className="md:w-10 rounded-full mr-4 -top-1.5 relative"
      />

      <h2 className="sm:text-title-md2 font-semibold bg-clip-text text-blue-500 bg-gradient-to-r from-blue-500 to-blue-400 dark:text-white text-lg">
        {props.h2}
      </h2>
    </div>
  );
};

export default Title;
