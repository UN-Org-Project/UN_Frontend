import React from "react";
import { SectionImg } from "../assets";
const Title = (props) => {
  return (
    <div className=" px-4 lg:px-6 py-2.5 flex flex-wrap  -mt-8">
      <img
        src={SectionImg}
        alt="Section Title Logo"
        className="md:w-10 rounded-full mr-4 -top-1.5 relative"
      />

      <h2 className="text-blue-500 text-2xl"> {props.h2}</h2>
    </div>
  );
};

export default Title;
