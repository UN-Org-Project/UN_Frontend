import Title from "../../../components/SectionTitle/Title";
import Table from "../../../components/Table/Table";
import SelectComp from "../../../components/SelectComponent/SelectComp";
import { AddMarkRow } from "../../../components/Table/RowInfo/TableRow";
import { useState } from "react";

const AddMarks = () => {
  // to handle if any action happed then show the submit button
  const [isChanged, setIsChanged] = useState(false);
  const handleChange = (chandedValue) => {
    setIsChanged(chandedValue);
    console.log(chandedValue);
  };

  ////////////////////////////////////////
  //For next and prev buttons.
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  ////////////////////////////////////////

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
          <div className="flex items-center justify-between">
            <Title h2="Student Infromation" />

            <SelectComp
              lable="Select Subject"
              options={[
                { value: "math", label: "Math" },
                { value: "English", label: "English" },
                { value: "Computer", label: "Computer" },
              ]}
            />
            <SelectComp
              lable="Select Exame"
              options={[
                { value: "First", label: "First" },
                { value: "Second", label: "Second" },
                { value: "Final", label: "Final" },
              ]}
            />
          </div>

          {/* pass the changed value to table to handle the submit button */}
          <Table th2="Contact" th3="Add Marks" isChanged={isChanged}>
            {/* Render the sliced data on the current page */}
            {slicedData.map((item) => (
              <AddMarkRow
                key={item.id}
                name={item.name}
                id={item.id}
                onChange={handleChange}
              />
            ))}
            {/* pass the function that will change the value if any action happend */}
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

export default AddMarks;
