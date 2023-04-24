import React from "react";
const TeacherContent = ({children }) => {
  
  return (
    <>
      <div className="p-4 mt-24  container mx-auto pl-56 px-32">
        {/* <div className="p-4 border-2 w-full  border-gray-200 border-dashed rounded-lg dark:border-gray-700">  */}
        {children}
        {/* </div> */}
      </div>
    </>
  );
};

export default TeacherContent;
