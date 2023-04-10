import React, { useEffect, useState } from "react";
import Title from "../../../components/SectionTitle/Title";
import Table from "../../../components/Table/Table";
import DashboardRow from "../../../components/Table/RowInfo/TableRow";

const Dashboard = () => {
  // to handle if any action happened then show the submit button
  const [isChanged, setIsChanged] = useState(false);
  ////////////////////////////////////////
  //For next and prev buttons.
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  ////////////////////////////////////////
  const handleChange = (changedValue) => {
    setIsChanged(changedValue);
    console.log(changedValue);
  };
  // Assume data is an array of objects to be paginated
  const data = [
    { name: "ahmad", id: "1" },
    { name: "john", id: "2" },
    { name: "sara", id: "3" },
    { name: "ali", id: "4" },
    { name: "mary", id: "5" },
    { name: "tom", id: "6" },
    { name: "jane", id: "7" },
    { name: "mike", id: "8" },
    { name: "julie", id: "9" },
    { name: "peter", id: "10" },
  ];

  // Calculate the number of pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Function to go to the next page
  const handleNextPage = () => {
    setCurrentPage((currentPage + 1) % totalPages);
  };

  // Function to go to the previous page
  const handlePrevPage = () => {
    setCurrentPage((currentPage + totalPages - 1) % totalPages);
  };

  // Slice the data based on the current page and number of items per page
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const slicedData = data.slice(startIndex, endIndex);

  return (
    <div id="view" className="flex">
      <div className="flex flex-col flex-1 ml-1 gap-5">
        <div>
          <Title h2="Student Information" />
          {/* pass the changed value to table to handle the submit button */}
          <Table th2="Contact" th3="Absence" isChanged={isChanged}>
            {/* pass the function that will change the value if any action happened */}
            {/* Render the sliced data on the current page */}
            {slicedData.map((item) => (
              <DashboardRow
                key={item.id}
                name={item.name}
                id={item.id}
                onChange={handleChange}
              />
            ))}
          </Table>
          {/* Render the next and previous buttons */}
          <div className="flex justify-center">
            <button
              onClick={handlePrevPage}
              className="text-sm text-indigo-50 transition duration-150 hover:bg-green-400 bg-green-500 font-semibold py-2 px-4 rounded-l"
            >
              Prev
            </button>
            <button
              onClick={handleNextPage}
              className="text-sm border-l-4 border-white text-indigo-50 transition duration-150 hover:bg-green-400 bg-green-500  font-semibold py-2 px-4 rounded-r"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
