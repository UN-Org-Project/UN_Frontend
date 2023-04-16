import React from "react";
import "./CardSidbar.css";
import Admin from "./../../components/assets/images/admin-user-icon-4.jpg";

const CardSidbar = (props) => {
  return (
    <>
      {/* Header of sidbar */}
      <div className="w-full max-w-md like-inside p-1 mb-10 bg-main-blue  rounded-lg sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="flow-root">
          <ul
            role="list"
            className="divide-y divide-gray-200 dark:divide-gray-700">
            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 photoimageoo">
                  <img className="w-16 h-16 rounded-full" src={Admin} alt="" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-lg font-medium text-white truncate dark:text-white">
                    {props.name}
                  </p>
                  <p className="text-xs text-gray-200 truncate dark:text-gray-400">
                    {props.role}
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CardSidbar;
