import { Accordion } from "flowbite-react";
import React from "react";
import { MessageToAll } from "../../Data/MessageToAll";
const MessagesLists = ({ Data, deleteOneItem }) => {
  const dataLocal = JSON.parse(localStorage.getItem("items"));
  // to delete one item from array
  const onDeleteItem = (ID) => {
    if (localStorage.getItem("items") != null) {
      const index = MessageToAll.findIndex((item) => item.id === ID);
      MessageToAll.splice(index, 1);
      deleteOneItem(MessageToAll); //Note:- this function return a MessageToAll.
    }
  };
  return (
    <>
      <div class=" w-full">
        <Accordion className="mt-2  " alwaysOpen={true}>
          {localStorage.getItem("items") != null ? (
            dataLocal.map((item, index) => {
              return (
                <Accordion.Panel key={index}>
                  <Accordion.Title> {item.q} </Accordion.Title>
                  <Accordion.Content>
                    <div className="flex justify-between ">
                      <p className="mb-2 text-gray-500 dark:text-gray-400 inline">
                        {item.a}
                        <br/>
                        <button
                        className=" mt-2 text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                        onClick={() => onDeleteItem(item.id)}
                      >
                        Delete
                      </button>
                      </p>
                      
                    </div>
                  </Accordion.Content>
                </Accordion.Panel>
              );
            })
          ) : (
            <h1 className="text-4xl p-20">There is no notes.</h1>
          )}
        </Accordion>
      </div>
    </>
  );
};

export default MessagesLists;
