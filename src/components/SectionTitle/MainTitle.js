import React from "react";
import Title from "./Title";

const MainTitle = (props) => {
  return (
    <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <Title img={props.img} h2={props.title} />
    </div>
  );
};

export default MainTitle;
