import React from "react";
import { Link } from "react-router-dom";

const Btn = (props) => {
  return (
    <Link
      onClick={props.onClick}
      to={props.path}
      className={`flex ${props.active ? `bg-teal-500` : ``} ${
        props.isEnteredn ? ` visible ` : `invisible`
      } items-center text-sm font-medium text-white py-2 px-2 hover:bg-teal-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out`}
    >
      <img src={props.icon} className=" w-6 h-6 fill-current " />
      <span className="ml-4">{props.btnName}</span>
    </Link>
  );
};

export default Btn;
