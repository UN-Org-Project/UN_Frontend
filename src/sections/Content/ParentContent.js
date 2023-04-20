import React from "react";
const ParentContent = ({children }) => {
  
  return (
    <>
      <div className="p-4 mt-24 sm:ml-64 w-full">
        {/* <div className="p-4 border-2 w-full  border-gray-200 border-dashed rounded-lg dark:border-gray-700">  */}
        {children}
        {/* </div> */}
      </div>
    </>
  );
};

export default ParentContent;
