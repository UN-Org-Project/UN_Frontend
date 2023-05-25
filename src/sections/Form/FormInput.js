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
      <div className="flex flex-col gap-9">
        <div className="rounded-lg border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
            <h3 className="text-title-sm font-semibold  text-alterColor  dark:text-white">
              Send Events Form
            </h3>
          </div>

          <div className="p-6.5">
            <div className="mb-4.5">
              <label className="text-title-xsm mb-2.5 block bg-clip-text text-alterColor bg-gradient-to-r from-mainColor to-alterColor dark:text-white">
                Events Title
              </label>
              <input
                required={true}
                onChange={(e) => setQu(e.target.value)}
                value={qu}
                type="text"
                placeholder="Enter the title of the Events"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition active:border-blue-600 focus:border-gradientFrom disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </div>

            <div className="mb-6">
              <label className=" text-title-xsm mb-2.5 block bg-clip-text text-alterColor bg-gradient-to-r from-mainColor to-alterColor dark:text-white">
                Your Events
              </label>
              <textarea
                required={true}
                onChange={(e) => setAn(e.target.value)}
                value={an}
                rows="6"
                placeholder="Type your Events"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              ></textarea>
            </div>
            <button
              type="submit"
              onClick={addNewItem}
              className=" text-title-sm flex w-full justify-center rounded-lg bg-clip-border bg-gradient-to-br from-blue-600 to-alterColor p-3 font-medium text-gray"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormInput;
