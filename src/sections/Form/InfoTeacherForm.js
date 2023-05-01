import React from "react";
import { BsPlusLg, BsCheck2All } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const InfoTeacherForm = (props) => {
  return (
    <div>
      <ToastContainer />
      <ToastContainer />
      <div className="rounded-lg border border-stroke bg-clip-border bg-gradient-to-br from-blue-600 to-blue-400 placeholder:text-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
          <h3 className="font-medium text-white dark:text-white">
            Teacher Info Form
          </h3>
        </div>

        <div className="p-6.5">
          <form onSubmit={props.handleSubmit}>
            {/* !----- START TEACHER INFO FORM */}
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              {/* !----- TEACHER NAME INPUT  -----! */}
              <div>
                <label
                  htmlFor="teacher-name"
                  className="mb-2.5 block text-white dark:text-white"
                >
                  Teacher Name <span className="text-meta-1">*</span>
                </label>
                <input
                  type="text"
                  id="teacherName"
                  placeholder="Enter Teacher Name"
                  className=" bg-white w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-gradientTo active:border-gradientTo disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary placeholder:text-slate-200"
                  value={props.teacherName}
                  onChange={(e) => props.setTeacherName(e.target.value)}
                  required
                />
              </div>

              {/* !----- TEACHER EXPERINECES  -----! */}
              <div>
                <label
                  htmlFor="Experience"
                  className="mb-2.5 block text-white dark:text-white"
                >
                  Experience <span className="text-meta-1">*</span>
                </label>
                <input
                  type="text"
                  id="Experience"
                  placeholder="Enter The Experience Of The Teacher"
                  className=" bg-white w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-gradientTo active:border-gradientTo disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary placeholder:text-slate-200"
                  value={props.experience}
                  onChange={(e) => props.setExperience(e.target.value)}
                  required
                />
              </div>

              {/* !----- EMAIL ADDRESS  INPUT  -----! */}
              <div>
                <label
                  htmlFor="email-address"
                  className="mb-2.5 block text-white dark:text-white"
                >
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
                  className="mb-2.5 block text-white dark:text-white"
                >
                  Phone <span className="text-meta-1">*</span>
                </label>
                <input
                  id="phone-num"
                  type="email"
                  className="bg-white w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-gradientTo active:border-gradientTo  disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary placeholder:text-slate-200 "
                  placeholder="+962-790-641-545"
                  value={props.phoneNumber}
                  onChange={(e) => props.setPhoneNumber(e.target.value)}
                  required
                />
              </div>

              {/* !-----  TEACHER'S LOCATION INPUT  -----! */}
              <div>
                <label
                  htmlFor="location"
                  className="mb-2.5 block text-white dark:text-white"
                >
                  Teacher Location <span className="text-meta-1">*</span>
                </label>
                <input
                  type="text"
                  id="location"
                  className="bg-white w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-gradientTo active:border-gradientTo  disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary placeholder:text-slate-200  "
                  placeholder="Enter Teacher's Location"
                  value={props.TeacherAddress}
                  onChange={(e) => props.setTeacherAddress(e.target.value)}
                  required
                />
              </div>

              {/* !-----  TEACHER'S GENDER INPUT  -----! */}
              <div>
                <label
                  htmlFor="gender"
                  className="mb-2.5 block text-white dark:text-white"
                >
                  Gender <span className="text-meta-1">*</span>
                </label>

                <select
                  name="gender"
                  type="text"
                  id="gender"
                  className="bg-white w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-gradientTo active:border-gradientTo  disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary  placeholder:text-slate-200  "
                  value={props.gender}
                  onChange={(e) => props.setGender(e.target.value)}
                  required
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>

              {/* !-----  TEACHER'S BARETH DATE INPUT  -----! */}
              <div>
                <label
                  htmlFor="date"
                  className="mb-2.5 block text-white dark:text-white"
                >
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

              {/* !-----  TEACHER'S CLASS  INPUT  -----! */}
              <div>
                <label
                  htmlFor="class"
                  className="mb-2.5 block text-white dark:text-white"
                >
                  Class <span className="text-meta-1">*</span>
                </label>
                <select
                  id="class"
                  className="bg-white w-full  rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-gradientTo active:border-gradientTo dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary placeholder:text-slate-200"
                  // defaultValue="class1"
                  value={props.classValue}
                  onChange={(e) => props.setClassValue(e.target.value)}
                  required
                >
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
              className="flex items-center w-fit m-auto gap-1 justify-center rounded bg-clip-border bg-gradient-to-tr from-gradientFrom to-gradientTo p-3 font-medium text-gray"
            >
              ADD TEACHER{" "}
              <span>
                <BsPlusLg style={{ color: "white", fontSize: "20px" }} />
              </span>
            </button>
          </form>
        </div>
      </div>

      {/* <form onSubmit={props.handleSubmit}>
        <div class="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="teacherName"
              className="block mb-2 mt-4 text-sm font-medium text-white dark:text-white"
            >
              Teacher Name
            </label>
            <input
              type="text"
              id="teacherName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Teacher Name"
              value={props.teacherName}
              onChange={(e) => props.setTeacherName(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              htmlFor="gender"
              className="block mb-2 mt-4 text-sm font-medium text-white dark:text-white"
            >
              Gender
            </label>
            <select
              class="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
              htmlFor="Experience"
              className="block mb-2  mt-4 text-sm font-medium text-white dark:text-white"
            >
              Experience
            </label>
            <input
              type="text"
              id="Experience"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Teacher Experience"
              value={props.experience}
              onChange={(e) => props.setExperience(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              htmlFor="date"
              class="block mb-2 text-sm font-medium text-white dark:text-white"
            >
              Date of Breath
            </label>
            <input
              type="date"
              id="date"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
              Teacher's Email
            </label>
            <input
              type="email"
              id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="o@gmail.com"
              value={props.email}
              onChange={(e) => props.setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              htmlFor="class"
              class="block mb-2 text-sm font-medium text-white dark:text-white"
            >
              Class
            </label>
            <select
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
              class="block mb-2 text-sm font-medium text-white dark:text-white"
            >
              Phone number
            </label>
            <input
              type="tel"
              id="phone"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="+962-790-641-545"
              value={props.phoneNumber}
              onChange={(e) => props.setPhoneNumber(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              htmlFor="Teacheraddress"
              className="block mb-2 text-sm font-medium text-white dark:text-white"
            >
              Teacher Address
            </label>
            <input
              type="text"
              id="Teacheraddress"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Teacher Address"
              value={props.TeacherAddress}
              onChange={(e) => props.setTeacherAddress(e.target.value)}
              required
            />
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "55px" }}>
          <div>
            <button
              type="submit"
              class="text-white bg-main-green hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              style={{ display: "flex", alignItems: "center" }}
            >
              ADD TEACHER
              <span>
                <BsPlusLg />
              </span>
            </button>
          </div>
        </div>
      </form> */}
    </div>
  );
};

export default InfoTeacherForm;
