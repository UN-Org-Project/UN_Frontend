import React from "react";
import { BsPlusLg, BsCheck2All } from "react-icons/bs";
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const InfoStudentsForm = (props) => {
  return (
    <>
    <ToastContainer />
      <form onSubmit={props.handleSubmit}>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="student-name"
              className="block mb-2  mt-4 text-sm font-medium text-white dark:text-white"
            >
              Student Name
            </label>
            <input
              type="text"
              id="student-name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Student Name"
              value={props.studentName}
              onChange={(e) => props.setStudentName(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              htmlFor="StudentAddress"
              className="block mb-2 mt-4 text-sm font-medium text-white dark:text-white"
            >
              Student Address
            </label>
            <input
              type="text"
              id="StudentAddress"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Student Address"
              value={props.StudentAddress}
              onChange={(e) => props.setStudentAddress(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              htmlFor="gender"
              className="block mb-2 text-sm font-medium text-white dark:text-white"
            >
              Gender
            </label>
            <select
              className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="gender"
              type="text"
              id="gender"
              defaultValue={props.gender}
              value={props.gender}
              onChange={(e) => props.setGender(e.target.value)}
              required
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className="-mt-4">
            <label
              htmlFor="ParentName"
              className="block mb-2  mt-4 text-sm font-medium text-white dark:text-white"
            >
              Parent Name
            </label>
            <input
              type="text"
              id="ParentName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Parent Name"
              value={props.ParentName}
              onChange={(e) => props.setParentName(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              htmlFor="date"
              className="block mb-2 text-sm font-medium text-white dark:text-white"
            >
              Date of Breath
            </label>
            <input
              type="date"
              id="date"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="arrive"
              value={props.dateOfBirth}
              onChange={(e) => props.setDateOfBirth(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-white dark:text-white"
            >
              Parent's Email
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="o@gmail.com"
              value={props.email}
              onChange={(e) => props.setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              htmlFor="class"
              className="block mb-2 text-sm font-medium text-white dark:text-white"
            >
              Class
            </label>
            <select
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              id="class"
              defaultValue={props.classValue}
              value={props.classValue}
              onChange={(e) => props.setClassValue(e.target.value)}
              required
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
              className="block mb-2 text-sm font-medium text-white dark:text-white"
            >
              Phone number
            </label>
            <input
              type="tel"
              id="phone"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="+962-790-641-545"
              value={props.phoneNumber}
              onChange={(e) => props.setPhoneNumber(e.target.value)}
              required
            />
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "55px" }}>
          <div>
            <button
              type="submit"
              className="text-white bg-main-green hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              style={{ display: "flex", alignItems: "center" }}
            >
              ADD STUDENT
              <span>
                <BsPlusLg />
              </span>
            </button>
          </div>
          
        </div>
      </form>
    </>
  );
};

export default InfoStudentsForm;