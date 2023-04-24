import React from "react";

const AbsenceTable = (props) => {
  return (
    <div className="  flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md  ">
      <div className="p-6  px-0 pt-0 pb-2">
        <table className="w-full min-w-[640px] table-auto">
          <thead>
            <tr>
              <th className="border-b border-blue-gray-50 py-3 px-5 text-left">
                <p className="block antialiased font-sans text-[11px] font-bold uppercase text-blue-gray-400">
                  Attendance
                </p>
              </th>
              <th className="border-b border-blue-gray-50 py-3 px-5 text-left">
                <p className="block antialiased font-sans text-[11px] font-bold uppercase text-blue-gray-400">
                  Rating
                </p>
              </th>
              <th className="border-b border-blue-gray-50 py-3 px-5 text-left">
                <p className="block antialiased font-sans text-[11px] font-bold uppercase text-blue-gray-400">
                  Notes
                </p>
              </th>
              <th className="border-b border-blue-gray-50 py-3 px-5 text-left">
                <p className="block antialiased font-sans text-[11px] font-bold uppercase text-blue-gray-400">
                  Date
                </p>
              </th>
            </tr>
          </thead>
          <tbody>{props.children}</tbody>
        </table>
      </div>
    </div>
  );
};

export default AbsenceTable;
