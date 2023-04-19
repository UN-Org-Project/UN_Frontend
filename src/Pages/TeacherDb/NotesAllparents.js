import React, { useState, useEffect } from "react";
import FormInput from "../../sections/Form/FormInput";
import MessagesLists from "../../components/Lists/MessagesLists";
import { MessageToAll } from "../../Data/MessageToAll";
//react toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
const NotesAllStudent = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getnotesArray() {
      const response = await axios.get(
        "http://localhost:8000/getnotes/6431b22ca8514ea551212e27"
      );
      const notesArray = response.data.notes;
      setData(notesArray);
    }
    getnotesArray();
  }, []);

  //To add new item
  const addItem = async () => {
    setData([...MessageToAll]);

    const response = await axios.post(
      "http://localhost:8000/addNotes/6431b22ca8514ea551212e27",
      { note: MessageToAll }
    );
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
      "http://localhost:8000/deletNotes/6431b22ca8514ea551212e27",
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
    // notify("Send Reports For All Parents successfully", "Error");
    const response = await axios.post(
      "http://localhost:8000/getPdfDoc/6431b22ca8514ea551212e27",
      { id: "6431b22ca8514ea551212e27" }
    );
    console.log(response.data);

    notify("Send Reports For All Parents successfully", "Success");
  };
  return (
    // Body
    <div className=" container ml-32 ">
      <ToastContainer />
      <div className="container ">
        <h1 class="mb-4 flex justify-center -ml-28  text-4xl leading-none tracking-tight text-gray-600 md:text-5xl lg:text-3xl dark:text-white">
          Write Note For All Parents
        </h1>
      </div>
      {/* Container  */}
      <div className="container  mx-auto pl-40  ">
        <br />
        {/* Start-Row */}
        <div class="grid grid-cols-12 gap-10">
          <div class="col-span-6 mt-2">
            {/* Item-1  -->  form */}
            <FormInput
              notify={notify}
              onAdd={addItem}
              onClick={SendReportHandler}
            />
          </div>
          <div class="col-span-6 ">
            {/* Item-2 --> list QA*/}
            <MessagesLists Data={data} deleteOneItem={deleteOneItem} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default NotesAllStudent;
