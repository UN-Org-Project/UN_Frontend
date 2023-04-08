import React from "react";

const NotificationBtn = () => {
  return (
    <div className="relative inline-flex w-fit cursor-pointer">
      <div className="absolute top-0 right-0 bottom-auto left-auto z-10 inline-block translate-x-2/4 -translate-y-1/2 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 rounded-full bg-green-400 p-1.5 text-xs"></div>
      <div className="flex items-center justify-center rounded-md bg-blue-600 px-2 py-2 text-center text-white  dark:text-gray-200 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-300 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.7),0_4px_18px_0_rgba(59,113,202,0.6)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-5 w-5"
        >
          <path
            fillRule="evenodd"
            d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

export default NotificationBtn;
