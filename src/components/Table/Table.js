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
                    {props.th1}
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
                <form onSubmit={props.onClick}>
                  <button
                    className="text-sm text-indigo-50 transition duration-150 hover:bg-green-400 bg-green-500  font-semibold py-4 px-5 rounded"
                    type="submit"
                  >
                    Submit
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
