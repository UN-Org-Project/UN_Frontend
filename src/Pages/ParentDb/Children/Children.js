import ChildInfo from "../../../components/ChildInfo/ChildInfo";
import { Outlet, useNavigate, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Title from "../../../components/SectionTitle/Title";

const Children = () => {
  let Navigate = useNavigate();
  const handleNavigat = () => {
    console.log("go to child details");
    Navigate("/parent/childDetails");
  };
  return (
    <div id="view" className="flex ml-80">
      <div className="flex flex-col flex-1 ml-1 gap-5">
        <div>
          <Title h2="Your Children" />
          <ChildInfo handleNavigat={handleNavigat} />
        </div>
      </div>
    </div>
  );
};

export default Children;
