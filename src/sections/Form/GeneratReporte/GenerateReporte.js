import React from "react";

const GenerateReporte = ({ onClick }) => {
  return (
    <div className="  mt-3 p-6 bg-clip-border bg-gradient-to-br from-blue-600 to-blue-400 rounded-lg shadow text-white dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Generate Report{" "}
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Generate a monthly Report of parents via e-mail about their children's
        progress .
      </p>
      <div className="flex justify-center items-center">
        <button
          href="#"
          onClick={onClick}
          className="text-title-xsm inline-flex items-center px-3 py-4 font-medium text-center text-white bg-clip-border bg-gradient-to-br from-gradientFrom to-gradientTo rounded-lg hover:bg-blue-800  focus:outline-none  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Send Report
          <svg
            aria-hidden="true"
            className="w-4 h-4 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default GenerateReporte;
