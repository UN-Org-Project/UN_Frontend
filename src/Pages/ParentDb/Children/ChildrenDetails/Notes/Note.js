import React from "react";
// import { Notes } from "./AllNotes";
// import { Link, useParams } from "react-router-dom";
// import { SectionHeader, SectionWrapper } from "../../../../components";
import "./Note.css";
const Note = (props) => {
  const noteContent = props.noteContent;

  const N = noteContent.notes.body;
  const T = noteContent.notes.title;
  const D = noteContent.noteDate;
  const handlerReturnPage = (e) => {
    props.shownoteBody(false);
  };

  return (
    <>
      <div className="">
        <div className="flex justify-center  ">
          <div className="bg-blue-gray-50 rounded-3xl mt-14 p-10">
            <div className="">
              <div>
                <div className="text-2xl font-medium text-main-blue mb-10">
                  {T}
                </div>
                <br />
                <div className="flex justify-between">
                  <div>
                    <p className="-mt-14 pb-5 pl-5 text-blue-gray-900">{D}</p>
                  </div>
                  <div className="-mt-16 pb-5 pl-5">
                    <button
                      onClick={handlerReturnPage}
                      className="  relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
                    >
                      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Come back
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className=" weedth-note bg-white text-black p-5 min-w-full  rounded-3xl text-start ">
              {N}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Note;
