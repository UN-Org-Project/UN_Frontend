import React, { useState } from "react";

import TableRow from "./RowInfo/TableRow";

const Table = (props) => {
  return (
    <div className="bg-white p-8 rounded-md w-full">
      <div>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr className="">
                  <th className="px-5 py-3 border-b-2 border-gray-100 bg-blue-500 text-left text-xs font-semibold text-white uppercase tracking-wider ">
                    Student
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-100 bg-blue-500 text-left text-xs font-semibold text-white uppercase tracking-wider">
                    {props.th2}
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-100 bg-blue-500 text-left text-xs font-semibold text-white uppercase tracking-wider">
                    {props.th3}
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-100 bg-blue-500 text-left text-xs font-semibold text-white uppercase tracking-wider">
                    Notes Board
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-100 bg-blue-500 text-left text-xs font-semibold text-white uppercase tracking-wider">
                    rating
                  </th>
                </tr>
              </thead>
              <tbody>{props.children}</tbody>
            </table>

            {/* if the value is true then show the submit button */}
            {props.isChanged && (
              <div className=" flex justify-center items-center py-2">
                <button
                  className="text-sm text-indigo-50 transition duration-150 hover:bg-green-400 bg-green-500  font-semibold py-4 px-5 rounded"
                  onClick={props.handleSubmit}
                >
                  Submit
                </button>
              </div>
            )}
            <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between ">
              <span className="text-xs xs:text-sm text-blue-400">
                Showing 1 of 4 Entries
              </span>
              <div className="inline-flex mt-2 xs:mt-0">
                <button className="text-sm text-indigo-50 transition duration-150 hover:bg-green-400 bg-green-500 font-semibold py-2 px-4 rounded-l">
                  Prev
                </button>
                &nbsp; &nbsp;
                <button className="text-sm text-indigo-50 transition duration-150 hover:bg-green-400 bg-green-500  font-semibold py-2 px-4 rounded-r">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
