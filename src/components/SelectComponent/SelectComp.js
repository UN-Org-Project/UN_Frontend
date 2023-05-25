import React, { useState, useEffect } from "react";
import Select from "react-select";

const SelectComp = (props) => {
  const onChangeHandler = (e) => {
    props.onChange(e.value);
  };

  return (
    <div className="relative flex flex-col items-center gap-3 mr-12 w-full justify-center">
      <label className="text-white text-title-sm  uppercase font-bold  ">
        {props.lable}
      </label>
      <Select
        onChange={onChangeHandler}
        options={props.options}
        className=" min-w-[16rem] text-blue-500 "
      />
    </div>
  );
};

export default SelectComp;
