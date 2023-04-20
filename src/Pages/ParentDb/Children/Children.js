import ChildInfo from "../../../components/ChildInfo/ChildInfo";
import { Outlet, useNavigate, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Title from "../../../components/SectionTitle/Title";
import { useOutletContext } from "react-router-dom";

const Children = () => {
  const childrenData = useOutletContext();
  const children = childrenData.childe;
  const enterChild = childrenData.enterFunc;

  useEffect(() => {
    console.log(children);
    console.log(enterChild);
    enterChild(false);
  }, []);

  let Navigate = useNavigate();

  const handleNavigat = (id, idTeacher) => {
    console.log("go to child details");
    Navigate("/parent/childDetails/" + id);
    enterChild(true, id, idTeacher);
  };
  return (
    <div id="view" className="flex ">
      <div className="flex flex-col flex-1  gap-5">
        <div>
          <Title h2="Your Children" />
          <div className="flex flex-wrap gap-5">
            {children.map((child) => (
              <ChildInfo
                key={child._id}
                id={child._id}
                value={child._id}
                childrenInfo={child}
                handleNavigat={() => handleNavigat(child._id, child.teacher_id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Children;
