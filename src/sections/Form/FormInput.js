import { TextInput } from "flowbite-react";
import React, { useState } from "react";
import { MessageToAll } from "../../Data/MessageToAll";
const FormInput = ({ onAdd, notify, onClick }) => {
  const [qu, setQu] = useState("");
  const [an, setAn] = useState("");
  //push item to array
  const addNewItem = (e) => {
    if (qu === "" || an === "") {
      notify("Please Complete the Information", "Error");
      return;
    }
    MessageToAll.push({ id: Math.random(), title: qu, body: an });
    setQu("");
    setAn("");
    onAdd();
  };
  return (
    <>
      <div className="">
        <div class="">
          <div class="">
            <TextInput
              type="text"
              placeholder="Enter the title of the note"
              required={true}
              onChange={(e) => setQu(e.target.value)}
              value={qu}
            />
          </div>
          <div class="border-b-4 border-blue-300">
            <div class=" mt-2 w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
              <div class="px-4 pt-3 first-letter:py-2 bg-white rounded-t-lg dark:bg-gray-800">
                <label for="comment" class="sr-only">
                  Your comment
                </label>
                <textarea
                  id="comment"
                  rows="4"
                  className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                  placeholder="Write a Note..."
                  required={true}
                  onChange={(e) => setAn(e.target.value)}
                  value={an}></textarea>
              </div>
              <div class="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                <button
                  className=" px-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  type="submit"
                  onClick={addNewItem}>
                  Send the Note
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="  mt-3 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Generate Report{" "}
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Generate a monthly Report of parents via e-mail about their children's
          progress .
        </p>
        <button
          href="#"
          onClick={onClick}
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Send Report
          <svg
            aria-hidden="true"
            class="w-4 h-4 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"></path>
          </svg>
        </button>
      </div>
    </>
  );
};

export default FormInput;
