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

  const handleNavigat = (id) => {
    console.log("go to child details");
    Navigate("/parent/childDetails/" + id);
    enterChild(true, id);
  };
  return (
    <div id="view" className="flex ml-80">
      <div className="flex flex-col flex-1  gap-5">
        <div>
          <Title h2="Your Children" />
          {children.map((child) => (
            <ChildInfo
              key={child._id}
              id={child._id}
              value={child._id}
              childrenInfo={child}
              handleNavigat={() => handleNavigat(child._id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Children;
