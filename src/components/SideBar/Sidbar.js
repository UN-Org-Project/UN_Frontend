import React, { useState, cloneElement } from "react";

const Sidbar = (props) => {
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);

  const handleButtonClick = (index) => {
    setActiveButtonIndex(index);
  };
  // Map the children of the sidebar and create new React elements
  // with modified or additional props, while preserving the original type and props of the elements.
  const buttons = React.Children.map(props.children, (child, index) => {
    // Add the active and onClick props to each child button component
    return cloneElement(child, {
      active: activeButtonIndex === index,
      onClick: () => handleButtonClick(index),
    });
  });
  return (
    <div
      id="sidebar"
      className="flex flex-col items-center bg-blue-600 md:block shadow-xl px-3  md:w-60 lg:w-60 overflow-x-hidden transition-transform duration-300 ease-in-out  min-h-screen"
    >
      <div
        id="profile"
        className={` mb-8 mt-2 flex justify-between items-center shadow-[0_4px_9px_-4px_rgb(148,177,212)] transition duration-300 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.7),0_4px_18px_0_rgba(59,113,202,0.6)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] p-3 rounded-md  overflow-hidden `}
      >
        <img
          src={props.UserImg}
          alt="Avatar user"
          className="w-10 md:w-16 rounded-full mx-auto"
        />

        <div>
          <h2 className="font-medium text-xs md:text-sm text-center text-white mb-2">
            {props.name}
          </h2>
          <p className="text-xs text-gray-200 text-center">
            {props.dashbordUser}
          </p>
        </div>
      </div>

      <div id="menu" className="flex flex-col space-y-2">
        {buttons}
      </div>
    </div>
  );
};

export default Sidbar;
