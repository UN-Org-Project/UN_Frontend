import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Note from "./Note";
import Table from "../../../../../components/Table/Table";
import { EventsRow } from "../../../../../components/Table/RowInfo/TableRow";
import MessageDialog from "../../../../../components/MessageDialog/Dialgo";

const ShowAllNotes = (props) => {
  const [allnotes, setAllnotes] = useState([]);
  const [shownoteBody, setShownoteBody] = useState(false);
  const [conentNote, setContentNote] = useState({});

  useEffect(() => {
    setAllnotes(props.allNote);
  }, [props]);
  let Navigate = useNavigate();

  const handleNavigat = (note) => {
    // Navigate("/parent/showNotes/Note/" + id);
    setShownoteBody(true);
    setContentNote(note);
  };

  return (
    <>
      {allnotes.length < 1 ? (
        <h1>there is no notes</h1>
      ) : (
        !shownoteBody && (
          <Table
            tableName="Events"
            th1="Event"
            th2="Sender"
            th3="Date"
            th4="Display"
          >
            {allnotes.map((item, index) => (
              <EventsRow
                key={index}
                id={index}
                event={item.notes.title}
                sender={props.sender}
                date={item.noteDate}
                display={
                  <MessageDialog
                    btnName="Show"
                    title={item.notes.title}
                    body={item.notes.body}
                  />
                  // <button
                  //   className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-blue-600 to-blue-400 group-hover:from-blue-600 group-hover:to-blue-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
                  //   onClick={() => handleNavigat(item)}
                  // >
                  //   <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  //     Show
                  //   </span>
                  // </button>
                }
              />
            ))}
          </Table>

          // <div className="relative overflow-x-auto ">
          //   <table className="w-5/6 ml-20 table-fixed text-sm text-left text-gray-500 dark:text-gray-400">
          //     <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          //       <tr>
          //         <th scope="col" className="px-6 py-3">
          //           subject
          //         </th>
          //         <th scope="col" className="px-6 py-3">
          //           Sender
          //         </th>
          //         <th scope="col" className="px-6 py-3">
          //           Date
          //         </th>
          //         <th scope="col" className="px-6 py-3">
          //           Display
          //         </th>
          //       </tr>
          //     </thead>
          //     <tbody>
          //       {allnotes.map((item) => {
          //         return (
          //           <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          //             <th
          //               scope="row"
          //               className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          //             >
          //               {item.notes.title}
          //             </th>
          //             <td className="px-6 py-4">{props.sender}</td>
          //             <td className="px-6 py-4">{item.noteDate}</td>
          //             <td className=" py-4">
          //               <button
          //                 className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
          //                 onClick={() => handleNavigat(item)}
          //               >
          //                 <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          //                   Show
          //                 </span>
          //               </button>
          //             </td>
          //           </tr>
          //         );
          //       })}
          //     </tbody>
          //   </table>
          // </div>
        )
      )}
      {shownoteBody && (
        <Note noteContent={conentNote} shownoteBody={setShownoteBody} />
      )}
    </>
  );
};

export default ShowAllNotes;
