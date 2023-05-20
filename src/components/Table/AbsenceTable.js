import React from "react";

const AbsenceTable = (props) => {
  return (
    <div className="relative flex flex-col bg-clip-border rounded-xl bg-gradient-to-br from-blue-600 to-blue-400 text-white text-gray-700 shadow-md lg:col-span-2 lg:mt-0 mt-4">
      <div className="relative bg-clip-border mx-0 rounded-l overflow-hidden bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-blue-500/40 shadow-lg -mt-6 mb-8 p-5">
        <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white">
          Child Attendance
        </h6>
      </div>
      <div className="p-6 overflow-x-scroll xl:overflow-hidden px-0 pt-0 pb-2">
        <table className="w-full min-w-[640px] table-auto">
          <thead>
            <tr>
              <th className="border-b border-blue-gray-50 py-3 px-6  text-left">
                <p className="block antialiased font-sans text-[11px] font-bold uppercase text-blue-gray-400">
                  Attendance
                </p>
              </th>
              <th className="border-b border-blue-gray-50 py-3 px-6  text-left">
                <p className="block antialiased font-sans text-[11px] font-bold uppercase text-blue-gray-400">
                  Rating
                </p>
              </th>
              <th className="border-b border-blue-gray-50 py-3 px-6  text-left">
                <p className="block antialiased font-sans text-[11px] font-bold uppercase text-blue-gray-400">
                  Notes
                </p>
              </th>
              <th className="border-b border-blue-gray-50 py-3 px-6  text-left">
                <p className="block antialiased font-sans text-[11px] font-bold uppercase text-blue-gray-400">
                  Date
                </p>
              </th>
            </tr>
          </thead>
          <tbody>{props.children}</tbody>
        </table>
      </div>
      {props.Pagination}
    </div>
  );
};

export default AbsenceTable;
