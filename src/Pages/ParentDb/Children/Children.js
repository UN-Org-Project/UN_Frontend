import ChildInfo from "../../../components/ChildInfo/ChildInfo";
import { Outlet, useNavigate, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Title from "../../../components/SectionTitle/Title";
import { useOutletContext } from "react-router-dom";
import MainTitle from "../../../components/SectionTitle/MainTitle";

const Children = () => {
  const childrenData = useOutletContext();
  const children = childrenData.childe;

  useEffect(() => {
    console.log(children);
  }, []);

  let Navigate = useNavigate();

  const handleNavigat = (id, idTeacher) => {
    console.log("go to child details");
    // Navigate("/parent/childDetails");
    Navigate("/parent/childDetails/644e7e7faa0e7103fd1a8434");
    // enterChild(true, id, idTeacher);
  };
  return (
    <>
      <MainTitle title=" Your Children" />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        {children.map((child, index) => (
          <div key={index} className="flex items-center justify-center">
            <ChildInfo
              key={child._id}
              id={child._id}
              value={child._id}
              childrenInfo={child}
              handleNavigat={() => handleNavigat(child._id, child.teacher_id)}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Children;
