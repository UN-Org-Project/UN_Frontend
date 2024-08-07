import React, { useState } from "react";
import "./Modal.css";
import axios from "axios";
export const Modal = ({ state, closeModal, onSubmit, defaultValue }) => {
  const [ischanged, setischanged] = useState(false);
  const [changedcolor, setchangedColor] = useState("");
  const [studentid, setstudentid] = useState(defaultValue[0]._id);
  const [formState, setFormState] = useState({});
  React.useEffect(() => {
    console.log(studentid);
    // setstudentid(defaultValue[0]._id);
    // defaultValue[0].parent_id._id = studentid;
    setFormState({ ...defaultValue[0].parent_id, ...defaultValue[0] });
    //formState._id= studentid;
  }, []);

  // console.log(formState);

  const [errors, setErrors] = useState("");

  const validateForm = () => {
    if (state == "student") {
      if (
        formState.studentName &&
        formState.gender &&
        formState.dateOfBirth &&
        formState.class &&
        formState.adress &&
        formState.parent_id.name &&
        formState.parent_id.emailAdress &&
        formState.parent_id.telepohoneNumber
      ) {
        setErrors("");
        return true;
      } else {
        let errorFields = [];
        for (const [key, value] of Object.entries(formState)) {
          if (!value) {
            errorFields.push(key);
          }
        }
        setErrors(errorFields.join(", "));
        return false;
      }
    } else if (state == "teacher") {
      if (
        formState.name &&
        formState.gender &&
        formState.dateOfBirth &&
        formState.class &&
        formState.adress &&
        formState.experiance &&
        formState.emailAdress &&
        formState.telepohoneNumber
      ) {
        setErrors("");
        return true;
      } else {
        let errorFields = [];
        for (const [key, value] of Object.entries(formState)) {
          if (!value) {
            errorFields.push(key);
          }
        }
        setErrors(errorFields.join(", "));
        return false;
      }
    }
  };

  const handleChange = (e) => {
    setischanged(true);
    setchangedColor(
      " hover:from-gradientFrom hover:to-gradientTo from-blue-600 to-blue-400"
    );
    setFormState({
      ...formState,

      [e.target.name]: e.target.value
    });

    // console.log(formState);
  };

  const handleSubmit = (e) => {
    setischanged(false);
    setchangedColor("");
    e.preventDefault();

    if (!validateForm()) return;

    onSubmit(formState);

    //////////////////////////////////////////////////////////////////////////////////////////////////////////

    const sendStudentDataToServer = async (data) => {
      try {
        await axios.post(
          "https://trackingsystemserver.onrender.com/sendStudentInfo/" + studentid,
          data
        );
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    const sendTeacherDataToServer = async (data) => {
      try {
        await axios.post(
          "https://trackingsystemserver.onrender.com/sendTeacherInfo/" + studentid,
          data
        );
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    if (state == "student") {
      sendStudentDataToServer(formState);
    } else if (state == "teacher") {
      sendTeacherDataToServer(formState);
    }

    closeModal();
  };

  const handleback = (e) => {
    closeModal();
  };

  if (state == "student") {
    return (
      <div
        className="modal-container"
        onClick={(e) => {
          if (e.target.className === "modal-container") closeModal();
        }}>
        <div className="modal">
          <form>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="student-name"
                  className="block mb-2  mt-4 text-title-[16px] font-medium text-alterColor">
                  Student Name
                </label>
                <input
                  type="text"
                  _id="student-name"
                  className="bg-gray-50 border border-blue-400 text-gray-900 text-sm rounded-lg outline-none focus:border-blue-700 active:focus:border-blue-700 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-700"
                  name="studentName"
                  onChange={handleChange}
                  value={formState.studentName} /////////////////////
                />
              </div>
              <div>
                <label
                  htmlFor="StudentAddress"
                  className="block mb-2 mt-4 text-title-[16px] font-medium text-alterColor ">
                  Student Address
                </label>
                <input
                  type="text"
                  _id="StudentAddress"
                  className="bg-gray-50 border border-blue-400 text-gray-900 text-sm rounded-lg outline-none focus:border-blue-700 active:focus:border-blue-700 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-700"
                  name="adress"
                  onChange={handleChange}
                  value={formState.adress} ///////////////////
                />
              </div>
              <div>
                <label
                  htmlFor="gender"
                  className="block mb-2 text-title-[16px] font-medium text-alterColor">
                  Gender
                </label>
                <select
                  className="bg-gray-50 border border-blue-400 text-gray-900 text-sm rounded-lg outline-none focus:border-blue-700 active:focus:border-blue-700 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-700"
                  type="text"
                  _id="gender"
                  name="gender"
                  onChange={handleChange}
                  value={formState.gender} ////////////////////
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div className="-mt-4">
                <label
                  htmlFor="ParentName"
                  className="block mb-2  mt-4 text-title-[16px] font-medium text-alterColor">
                  Parent Name
                </label>
                <input
                  type="text"
                  _id="ParentName"
                  className="bg-gray-50 border border-blue-400 text-gray-900 text-sm rounded-lg outline-none focus:border-blue-700 active:focus:border-blue-700 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-700"
                  name="name"
                  onChange={handleChange}
                  value={formState.name} ////////////////////
                />
              </div>
              <div>
                <label
                  htmlFor="date"
                  className="block mb-2 text-title-[16px] font-medium text-alterColor ">
                  Date of Breath
                </label>
                <input
                  max="2019-12-31"
                  type="date"
                  _id="date"
                  className="bg-gray-50 border border-blue-400 text-gray-900 text-sm rounded-lg outline-none focus:border-blue-700 active:focus:border-blue-700 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-700"
                  name="dateOfBirth"
                  onChange={handleChange}
                  value={formState.dateOfBirth} /////////////////////
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-title-[16px] font-medium text-alterColor ">
                  Parent's Email
                </label>
                <input
                  type="email"
                  _id="email"
                  className="bg-gray-50 border border-blue-400 text-gray-900 text-sm rounded-lg outline-none focus:border-blue-700 active:focus:border-blue-700 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-700"
                  name="emailAdress"
                  onChange={handleChange}
                  value={formState.emailAdress} /////////////////
                />
              </div>
              <div>
                <label
                  htmlFor="class"
                  className="block mb-2 text-title-[16px] font-medium text-alterColor ">
                  Class
                </label>
                <select
                  className="bg-gray-50 border border-blue-400 text-gray-900 text-sm rounded-lg outline-none focus:border-blue-700 active:focus:border-blue-700 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-700"
                  _id="class"
                  name="class"
                  onChange={handleChange}
                  value={formState.class} /////////////////////
                >
                  <option value="class1">class 1 </option>
                  <option value="class2">class 2 </option>
                  <option value="class3">class 3 </option>
                  <option value="class4">class 4 </option>
                  <option value="class5">class 5 </option>
                  <option value="class6">class 6 </option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block mb-2 text-title-[16px] font-medium text-alterColor  ">
                  Phone number
                </label>
                <input
                  type="tel"
                  _id="phone"
                  className="bg-gray-50 border border-blue-400 text-gray-900 text-sm rounded-lg outline-none focus:border-blue-700 active:border-blue-700 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  name="telepohoneNumber"
                  onChange={handleChange}
                  value={formState.telepohoneNumber} ////////////////////
                />
              </div>
            </div>
            {errors && (
              <div className="error">{`Please include: ${errors}`}</div>
            )}
            <button
              className={`btnm text-white bg-clip-border bg-gradient-to-br ${changedcolor}  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 transition duration-1000  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800`}
              type="submit"
              onClick={handleSubmit}
              disabled={!ischanged}>
              Submit
            </button>
            <br></br>
            <button
              className="btnm  mt-2 text-white bg-clip-border bg-gradient-to-br hover:from-gradientFrom hover:to-gradientTo from-orange-600 to-orange-400 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 transition duration-1000 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              onClick={handleback}>
              back
            </button>
          </form>
        </div>
      </div>
    );

    // student
    //
    //
    //
    //
    //
    //
    //
    // teacher
    //
  } else if (state == "teacher") {
    return (
      <div
        className="modal-container"
        onClick={(e) => {
          if (e.target.className === "modal-container") closeModal();
        }}>
        <div className="modal">
          <form>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="student-name"
                  className="block mb-2  mt-4 text-sm font-medium">
                  Teacher Name
                </label>
                <input
                  type="text"
                  _id="name"
                  className="bg-gray-50 border border-blue-400 text-gray-900 text-sm rounded-lg outline-none focus:border-blue-700 active:focus:border-blue-700 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-700"
                  name="name"
                  onChange={handleChange}
                  value={formState.name} /////////////////////
                />
              </div>
              <div>
                <label
                  htmlFor="StudentAddress"
                  className="block mb-2 mt-4 text-sm font-medium ">
                  Teacher Address
                </label>
                <input
                  type="text"
                  _id="StudentAddress"
                  className="bg-gray-50 border border-blue-400 text-gray-900 text-sm rounded-lg outline-none focus:border-blue-700 active:focus:border-blue-700 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-700"
                  name="adress"
                  onChange={handleChange}
                  value={formState.adress} ///////////////////
                />
              </div>
              <div>
                <label
                  htmlFor="gender"
                  className="block mb-2 text-sm font-medium">
                  Gender
                </label>
                <select
                  className="bg-gray-50 border border-blue-400 text-gray-900 text-sm rounded-lg outline-none focus:border-blue-700 active:focus:border-blue-700 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-700"
                  type="text"
                  _id="gender"
                  name="gender"
                  onChange={handleChange}
                  value={formState.gender} ////////////////////
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div className="-mt-4">
                <label
                  htmlFor="ParentName"
                  className="block mb-2  mt-4 text-sm font-medium">
                  Experiance
                </label>
                <input
                  type="text"
                  _id="experiance"
                  className="bg-gray-50 border border-blue-400 text-gray-900 text-sm rounded-lg outline-none focus:border-blue-700 active:focus:border-blue-700 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-700"
                  name="experiance"
                  onChange={handleChange}
                  value={formState.experiance} ////////////////////
                />
              </div>
              <div>
                <label
                  htmlFor="date"
                  className="block mb-2 text-sm font-medium ">
                  Date of Breath
                </label>
                <input
                  max="2019-12-31"
                  type="date"
                  _id="date"
                  className="bg-gray-50 border border-blue-400 text-gray-900 text-sm rounded-lg outline-none focus:border-blue-700 active:focus:border-blue-700 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-700"
                  name="dateOfBirth"
                  onChange={handleChange}
                  value={formState.dateOfBirth} /////////////////////
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium ">
                  Teacher's Email
                </label>
                <input
                  type="email"
                  _id="email"
                  className="bg-gray-50 border border-blue-400 text-gray-900 text-sm rounded-lg outline-none focus:border-blue-700 active:focus:border-blue-700 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-700"
                  name="emailAdress"
                  onChange={handleChange}
                  value={formState.emailAdress} /////////////////
                />
              </div>
              <div>
                <label
                  htmlFor="class"
                  className="block mb-2 text-sm font-medium ">
                  Class
                </label>
                <select
                  className="bg-gray-50 border border-blue-400 text-gray-900 text-sm rounded-lg outline-none focus:border-blue-700 active:focus:border-blue-700 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-700"
                  _id="class"
                  name="class"
                  onChange={handleChange}
                  value={formState.class} /////////////////////
                >
                  <option value="class1">class 1 </option>
                  <option value="class2">class 2 </option>
                  <option value="class3">class 3 </option>
                  <option value="class4">class 4 </option>
                  <option value="class5">class 5 </option>
                  <option value="class6">class 6 </option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-blue-800 ">
                  Phone number
                </label>
                <input
                  type="tel"
                  _id="phone"
                  className="bg-gray-50 border border-blue-400 text-gray-900 text-sm rounded-lg outline-none focus:border-blue-700 active:border-blue-700 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  name="telepohoneNumber"
                  onChange={handleChange}
                  value={formState.telepohoneNumber} ////////////////////
                />
              </div>
            </div>
            {errors && (
              <div className="error">{`Please include: ${errors}`}</div>
            )}
            <button
              className={`btnm text-white bg-clip-border bg-gradient-to-br ${changedcolor} font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 transition duration-1000 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800`}
              type="submit"
              onClick={handleSubmit}
              disabled={!ischanged}>
              Submit
            </button>
            <br></br>
            <button
              className="btnm mt-2 text-white bg-clip-border bg-gradient-to-br hover:from-gradientFrom hover:to-gradientTo from-orange-600 to-orange-400 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 transition duration-1000 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              onClick={handleback}>
              back
            </button>
          </form>
        </div>
      </div>
    );
  }
};
