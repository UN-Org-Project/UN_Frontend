import React, { useState, useEffect } from "react";
import FormInput from "../../../sections/Form/FormInput";
import MessagesLists from "../../../components/Lists/MessagesLists";
import { MessageToAll } from "../../../Data/MessageToAll";
//react toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import GenerateReporte from "../../../sections/Form/GeneratReporte/GenerateReporte";
import "../TeacherDb.css";
const NotesAllStudent = (props) => {
  const id = localStorage.getItem("userData");
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getnotesArray() {
      const response = await axios.get("http://localhost:8000/getnotes/" + id);
      const notesArray = response.data.notes;
      setData(notesArray);
    }
    getnotesArray();
  }, []);

  //To add new item
  const addItem = async () => {
    setData([...MessageToAll]);

    const response = await axios.post("http://localhost:8000/addNotes/" + id, {
      note: MessageToAll
    });
    const updateNote = response.data.notes;
    setData(updateNote);
    notify("Added Successfully", "Success");
  };

  //To delete one item form array
  const deleteOneItem = async (items, ID) => {
    console.log(ID);
    setData([...items]);
    /////// print////////////////////////

    const response = await axios.post(
      "http://localhost:8000/deletNotes/" + id,
      { id: ID }
    );

    const updateNote = response.data.notes;
    setData(updateNote);
    notify("Note deleted successfully", "Success");
  };

  const notify = (message, type) => {
    if (type === "Error") toast.error(message);
    else if (type === "Success") toast.success(message);
  };
  const SendReportHandler = async () => {
    console.log("Reports");
    setIsLoading(true);
    // notify("Send Reports For All Parents successfully", "Error");
    const response = await axios.post("http://localhost:8000/getPdfDoc/" + id);
    if (!response.ok) setIsLoading(false);

    notify("Send Reports For All Parents successfully", "Success");
  };
  return (
    // Body
    <>
      <ToastContainer />
      {/* HEADER FOR THE SECTION */}
      <div className="mb-8 flex justify-center items-center ">
        <h2 className="sm:text-title-md2 font-semibold text-blue-400 dark:text-white text-title-md">
          Write Note For All Parents
        </h2>
      </div>

      {/* BODY OF THIS SECTION  */}
      <div className="mb-4 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* MESSAGE NOTE FORM TO SEND IT TO ALL PARENTS */}
        <FormInput notify={notify} onAdd={addItem} />

        {/* LIST OF MESSAGE NOTES */}
        <MessagesLists Data={data} deleteOneItem={deleteOneItem} />
      </div>
      {isLoading && <div className="spinner"> </div>}
      <div className="flex justify-center items-center">
        {/* GENERAT REPORTE AND SEND IT TO PARENTS */}
        <GenerateReporte onClick={SendReportHandler} />
      </div>
    </>
  );
};
export default NotesAllStudent;
