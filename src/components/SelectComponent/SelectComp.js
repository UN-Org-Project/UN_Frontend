import React from "react";
import Select from "react-select";

const SelectComp = (props) => {
  return (
    <div className="flex flex-col items-start gap-3">
      <label className="text-blue-500">{props.lable}</label>
      <Select
        options={props.options}
        className=" min-w-[13rem] text-blue-500 "
      />
    </div>
  );
};

export default SelectComp;
