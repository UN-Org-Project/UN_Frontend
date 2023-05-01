import React from "react";

const Table = (props) => {
  return (
    <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md pb-2">
      {/* !----- THIS FOR THE NAME OF THE TABLE -----! */}
      <div className="relative bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-blue-500/40 shadow-lg -mt-6 mb-8 p-5">
        <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white">
          {props.tableName}
        </h6>
      </div>

      {/* !----- THIS IS THE CONTAINER OF THE TABLE -----! */}
      <div className="p-6 overflow-x-scroll xl:overflow-hidden px-0 pt-0 pb-2">
        {/* !----- START TABLE -----! */}
        <table className="w-full min-w-[640px] table-auto">
          {/* !----- START TABLE HEADER-----! */}
          <thead>
            {/* !----- TABLE ROW  -----! */}
            <tr className=" bg-clip-border bg-gradient-to-tr from-blue-600 to-blue-400 ">
              {props.th1 && (
                <th className="py-3 px-5 border-b border-blue-gray-50  text-left text-xs font-semibold text-white uppercase tracking-wider">
                  {props.th1}
                </th>
              )}

              {props.th2 && (
                <th className="py-3 px-5 border-b border-blue-gray-50  text-left text-xs font-semibold text-white uppercase tracking-wider">
                  {props.th2}
                </th>
              )}

              {props.th3 && (
                <th className="py-3 px-5 border-b border-blue-gray-50  text-left text-xs font-semibold text-white uppercase tracking-wider">
                  {props.th3}
                </th>
              )}

              {props.th4 && (
                <th className="py-3 px-5 border-b border-blue-gray-50  text-left text-xs font-semibold text-white uppercase tracking-wider">
                  {props.th4}
                </th>
              )}

              {props.th5 && (
                <th className="py-3 px-5 border-b border-blue-gray-50  text-left text-xs font-semibold text-white uppercase tracking-wider">
                  {props.th5}
                </th>
              )}
            </tr>
          </thead>
          {/* !----- END TABLE HEADER-----! */}

          {/* !----- START TABLE BODY-----! */}
          <tbody>{props.children}</tbody>
          {/* !----- END TABLE BODY-----! */}
        </table>
        {/* !----- END TABLE -----! */}

        {/* // !----- THIS FOR SUBMIT BUTTON THAT WILL DISPLAY WHEN THE USER ADD OR CHANGE ON THE VALUES -----! */}
        {props.isChanged && (
          // !----- START SUBMIT BUTTON -----!
          <div className=" flex justify-center items-center py-2">
            <form onSubmit={props.onClick}>
              <button
                className="text-sm text-indigo-50 bg-clip-border bg-gradient-to-br from-gradientFrom to-gradientTo  transition duration-150 hover:bg-green-400  font-semibold py-3 px-5 rounded"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
          // !----- END SUBMIT BUTTON -----!
        )}
      </div>
      {/* !----- HERE TO PUT A PAGINATION FOR THE TABLE -----! */}
      {props.pagination}
    </div>
  );
};

export default Table;
