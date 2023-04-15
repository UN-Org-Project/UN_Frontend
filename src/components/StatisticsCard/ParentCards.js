import React from "react";

const ParentCards = (props) => {
  return (
    <div className="flex flex-wrap flex-row justify-center mt-5">
      {props.children}
    </div>
  );
};

export default ParentCards;
