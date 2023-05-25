import React from "react";

const Title = (props) => {
  return (
    <div className="flex flex-wrap items-center -mt-6 py-2.5">
      <img
        src={props.img}
        alt="Section Title Logo"
        className="md:w-10 mr-4 relative "
      />

      <h2 className="sm:text-title-md2 font-semibold  text-blue-600  dark:text-white text-title-xl">
        {props.h2}
      </h2>
    </div>
  );
};

export default Title;
