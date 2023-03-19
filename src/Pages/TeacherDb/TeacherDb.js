import React from "react";
import AdminAv from "../../components/assets/images/Adminavatar.png";
import Addstd from "../../components/assets/images/AddUsericon.png";
const TeacherDb = () => {
  return (
    <div
      id="view"
      className="h-full w-screen flex flex-row"
      x-data="{ sidenav: true }"
    >
      {/* <button
          // @click="sidenav = true"
          className="p-2 border-2 bg-white rounded-md border-gray-200 shadow-lg text-gray-500 focus:bg-teal-500 focus:outline-none focus:text-white absolute top-0 left-0 sm:hidden"
        >
          <svg
            className="w-5 h-5 fill-current"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button> */}
      <div
        id="sidebar"
        className="bg-blue-600 h-screen md:block shadow-xl px-3 w-30 md:w-60 lg:w-80 overflow-x-hidden transition-transform duration-300 ease-in-out"
        x-show="sidenav"
        // @click.away="sidenav = false"
      >
        <div className="space-y-6 md:space-y-10 mt-4">
          <div
            id="profile"
            className="space-y-3 flex justify-between items-center shadow-md shadow-blue-500 shadow-black-400 p-3 rounded-md"
          >
            <img
              src={AdminAv}
              alt="Avatar user"
              className="w-10 md:w-16 rounded-full mx-auto"
            />
            <div>
              <h2 className="font-medium text-xs md:text-sm text-center text-white mb-2">
                Eduard Pantazi
              </h2>
              <p className="text-xs text-gray-200 text-center">
                Admin Dashboard
              </p>
            </div>
          </div>

          <div id="menu" className="flex flex-col space-y-2">
            <a
              href=""
              className="flex items-center text-sm font-medium text-white py-2 px-2 hover:bg-teal-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out"
            >
              <img src={Addstd} className=" w-6 h-6 fill-current " />
              <span className="ml-4">Add Student</span>
            </a>
            <a
              href=""
              className="flex items-center text-sm font-medium text-white py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
            >
              <img src={Addstd} className=" w-6 h-6 fill-current " />
              <span className="ml-4">Add Student</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDb;
