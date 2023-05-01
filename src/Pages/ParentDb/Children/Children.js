// import ChildInfo from "../../../components/ChildInfo/ChildInfo";
// import { Outlet, useNavigate, Link } from "react-router-dom";
// import React, { useEffect, useState } from "react";
// import Title from "../../../components/SectionTitle/Title";
// import { useOutletContext } from "react-router-dom";

// const Children = () => {
//   const childrenData = useOutletContext();
//   const children = childrenData.childe;
//   const enterChild = childrenData.enterFunc;

//   useEffect(() => {
//     console.log(children);
//     console.log(enterChild);
//     enterChild(false);
//   }, []);

//   let Navigate = useNavigate();

//   const handleNavigat = (id, idTeacher) => {
//     console.log("go to child details");
//     Navigate("/parent/childDetails/" + id);
//     enterChild(true, id, idTeacher);
//   };
//   return (
//     <div id="view" className="flex ">
//       <div className="flex flex-col flex-1  gap-5">
//         <div>
//           <Title h2="Your Children" />
//           <div className="flex flex-wrap gap-5">
//             {children.map((child) => (
//               <ChildInfo
//                 key={child._id}
//                 id={child._id}
//                 value={child._id}
//                 childrenInfo={child}
//                 handleNavigat={() => handleNavigat(child._id, child.teacher_id)}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
// );
// };

// export default Children;

import ChildInfo from "../../../components/ChildInfo/ChildInfo";
import { Outlet, useNavigate, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Title from "../../../components/SectionTitle/Title";
import { useOutletContext } from "react-router-dom";

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
    Navigate("/parent/childDetails/" + id);
    // enterChild(true, id, idTeacher);
  };
  return (
    <>
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-title-md2 font-semibold text-mainColor dark:text-white">
          <Title h2="Your Children" />
        </h2>
      </div>
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
