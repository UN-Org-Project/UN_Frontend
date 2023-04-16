import React, { useState } from "react";
import FormInput from "../../sections/Form/FormInput";
import MessagesLists from "../../components/Lists/MessagesLists";
import { MessageToAll } from "../../Data/MessageToAll";
//react toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const NotesAllStudent = () => {
  const [data, setData] = useState(MessageToAll);
  //To add new item
  const addItem = () => {
    localStorage.setItem("items", JSON.stringify([...MessageToAll]));
    setData([...MessageToAll]);
    notify("Added Successfully", "Success");
  };
  //To delete one item form array
  const deleteOneItem = (items) => {
    localStorage.setItem("items", JSON.stringify([...MessageToAll]));
    setData([...items]);
    notify("Note deleted successfully", "Success");
    if (items.length <= 0) {
      deleteAllItems();
    }
  };
  //To Push Notifecation
  const notify = (message, type) => {
    if (type === "Error") toast.error(message);
    else if (type === "Success") toast.success(message);
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
            <FormInput notify={notify} onAdd={addItem} />
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

