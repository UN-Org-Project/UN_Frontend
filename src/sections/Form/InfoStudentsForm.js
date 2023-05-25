import React from "react";
import { BsPlusLg } from "react-icons/bs";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const InfoStudentsForm = (props) => {
  return (
    <>
      <ToastContainer />
      <div className="rounded-lg border border-stroke bg-clip-border bg-gradient-to-br from-blue-600 to-blue-400 placeholder:text-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
          <h3 className="font-medium text-white dark:text-white">
            Contact Form
          </h3>
        </div>

        <div className="p-6.5">
          <form onSubmit={props.handleSubmit}>
            {/* !----- START STUDENT INFO FORM */}
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              {/* !----- STUDENT NAME INPUT  -----! */}
              <div>
                <label
                  htmlFor="student-name"
                  className="mb-2.5 block text-white dark:text-white">
                  Student Name <span className="text-meta-1">*</span>
                </label>
                <input
                  id="student-name"
                  type="text"
                  placeholder="Enter Student Name"
                  className=" bg-white w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-gradientTo active:border-gradientTo disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary placeholder:text-slate-200"
                  value={props.studentName}
                  onChange={(e) => props.setStudentName(e.target.value)}
                  required
                />
              </div>

              {/* !----- PARENT NAME INPUT  -----! */}
              <div>
                <label
                  htmlFor="parent-name"
                  className="mb-2.5 block text-white dark:text-white">
                  Parent Name <span className="text-meta-1">*</span>
                </label>
                <input
                  id="parent-name"
                  type="text"
                  placeholder="Enter Parent Name"
                  className=" bg-white w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-gradientTo active:border-gradientTo disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary placeholder:text-slate-200"
                  value={props.ParentName}
                  onChange={(e) => props.setParentName(e.target.value)}
                  required
                />
              </div>

              {/* !----- EMAIL ADDRESS  INPUT  -----! */}
              <div>
                <label
                  htmlFor="email-address"
                  className="mb-2.5 block text-white dark:text-white">
                  Email <span className="text-meta-1">*</span>
                </label>
                <input
                  id="email-address"
                  type="email"
                  className="bg-white w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-gradientTo active:border-gradientTo  disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary placeholder:text-slate-200"
                  placeholder="o@gmail.com"
                  value={props.email}
                  onChange={(e) => props.setEmail(e.target.value)}
                  required
                />
              </div>

              {/* !----- PHONE NUMBER INPUT  -----! */}
              <div>
                <label
                  htmlFor="phone-num"
                  className="mb-2.5 block text-white dark:text-white">
                  Phone <span className="text-meta-1">*</span>
                </label>
                <input
                  id="phone-num"
                  type="text"
                  maxLength="10"
                  className="bg-white w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-gradientTo active:border-gradientTo  disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary placeholder:text-slate-200"
                  placeholder="+962-790-641-545"
                  value={props.phoneNumber}
                  onChange={(e) => {
                    const inputValue = e.target.value;
                    const numbersOnly = inputValue.replace(/[^0-9]/g, "");
                    if (/^[0-9]{0,10}$/.test(numbersOnly)) {
                      props.setPhoneNumber(numbersOnly);
                    }
                  }}
                  required
                />
              </div>

              {/* !-----  STUDENT'S LOCATION INPUT  -----! */}
              <div>
                <label
                  htmlFor="location"
                  className="mb-2.5 block text-white dark:text-white">
                  Student's Location <span className="text-meta-1">*</span>
                </label>
                <input
                  type="text"
                  id="location"
                  className="bg-white w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-gradientTo active:border-gradientTo  disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary placeholder:text-slate-200  "
                  placeholder="Enter Student Location"
                  value={props.StudentAddress}
                  onChange={(e) => props.setStudentAddress(e.target.value)}
                  required
                />
              </div>

              {/* !-----  STUDENT'S GENDER INPUT  -----! */}
              <div>
                <label
                  htmlFor="gender"
                  className="mb-2.5 block text-white dark:text-white">
                  Gender <span className="text-meta-1">*</span>
                </label>

                <select
                  name="gender"
                  type="text"
                  id="gender"
                  className="bg-white w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-gradientTo active:border-gradientTo  disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary  placeholder:text-slate-200  "
                  // defaultValue="Male"
                  value={props.gender}
                  onChange={(e) => props.setGender(e.target.value)}
                  required>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>

              {/* !-----  STUDENT'S BARETH DATE INPUT  -----! */}
              <div>
                <label
                  htmlFor="date"
                  className="mb-2.5 block text-white dark:text-white">
                  Date of Breath <span className="text-meta-1">*</span>
                </label>
                <input
                  type="date"
                  id="date"
                  className="bg-white w-full  rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-gradientTo active:border-gradientTo dark:border-form-strokedark dark:bg-form-input dark:focus:border-gradientTo placeholder:text-slate-200"
                  name="arrive"
                  value={props.dateOfBirth}
                  onChange={(e) => props.setDateOfBirth(e.target.value)}
                />
              </div>

              {/* !-----  STUDENT'S CLASS  INPUT  -----! */}
              <div>
                <label
                  htmlFor="class"
                  className="mb-2.5 block text-white dark:text-white">
                  Class <span className="text-meta-1">*</span>
                </label>
                <select
                  id="class"
                  className="bg-white w-full  rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-gradientTo active:border-gradientTo dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary placeholder:text-slate-200"
                  // defaultValue="class1"
                  value={props.classValue}
                  onChange={(e) => props.setClassValue(e.target.value)}
                  required>
                  <option value="class1">CLASS 1 </option>
                  <option value="class2">CLASS 2 </option>
                  <option value="class3">CLASS 3 </option>
                  <option value="class4">CLASS 4 </option>
                  <option value="class5">CLASS 5 </option>
                  <option value="class6">CLASS 6 </option>
                </select>
              </div>
            </div>
            {/* !----- END STUDENT INFO FORM */}

            <button
              type="SUBMIT"
              className="flex items-center w-fit m-auto gap-1 justify-center rounded bg-clip-border bg-gradient-to-tr from-gradientFrom to-gradientTo p-3 font-medium text-gray">
              ADD STUDENT{" "}
              <span>
                <BsPlusLg style={{ color: "white", fontSize: "20px" }} />
              </span>
            </button>
            {/* <div style={{ display: "flex", alignItems: "center", gap: "55px" }}>
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
            </div> */}
          </form>
        </div>
        {/* <form onSubmit={props.handleSubmit}>
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
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
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
        </form> */}
      </div>
    </>
  );
};

export default InfoStudentsForm;
