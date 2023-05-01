import React from "react";
import { MessageToAll } from "../../Data/MessageToAll";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
const MessagesLists = ({ Data, deleteOneItem }) => {
  //   // to delete one item from array
  const onDeleteItem = (ID) => {
    const index = MessageToAll.findIndex((item) => item.id === ID);
    MessageToAll.splice(index, 1);
    deleteOneItem(MessageToAll, ID); //Note:- this function return a MessageToAll.
  };

  return (
    <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md ">
      <div className="relative bg-clip-border rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none m-0 p-4">
        <h5 className="text-blue-400 block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900">
          Notes
        </h5>
      </div>

      <Accordion className="flex flex-col gap-4 p-4 " allowMultiple>
        {Date.length != 0 ? (
          Data.map((item, index) => {
            return (
              <AccordionItem
                key={index}
                className="relative block w-full text-base font-regular px-4 py-4 rounded-lg bg-blue-500 text-white dark:!border-white/10"
              >
                <h2>
                  <AccordionButton className="flex justify-between">
                    <div className="absolute top-4 left-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-6 w-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                        ></path>
                      </svg>
                    </div>
                    <span className="ml-8 mr-12 text-left font-bold text-navy-900 dark:text-white ">
                      {item.title}
                    </span>
                    <AccordionIcon className="text-left !text-navy-900 dark:!text-white" />
                  </AccordionButton>
                </h2>
                <AccordionPanel className="flex flex-col justify-center">
                  <div
                    className="text-left text-medium mt-2 !text-navy-900 dark:!text-white"
                    pb={4}
                  >
                    {item.body}
                  </div>

                  <button
                    className=" w-fit mt-2 text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    onClick={() => onDeleteItem(item.id)}
                  >
                    Delete
                  </button>
                </AccordionPanel>
              </AccordionItem>
            );
          })
        ) : (
          <h2 className="text-center font-sans sm:text-title-md2 font-semibold bg-clip-text text-blue-500 bg-gradient-to-r from-blue-500 to-blue-400 dark:text-white text-lg">
            There Is No Notes!
          </h2>
        )}
      </Accordion>
    </div>
  );
};
export default MessagesLists;
