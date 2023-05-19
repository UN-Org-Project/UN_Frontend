import React from "react";
import "./LoginForm.css";
const LoginForm = (props) => {
  return (
    <div className="container mx-auto p-4  ">
      <div className="flex flex-col bg-clip-border rounded-xl blure absolute top-2/4 left-2/4 w-full max-w-[27rem] h-[25rem] -translate-y-2/4 -translate-x-2/4   ">
        <div className=" relative inset-[2px] flex flex-col rounded-xl h-full  ">
          <div className="relative mx-4 mb-4 grid h-28 place-items-center ">
            <h3 className="block antialiased tracking-normal font-sans text-3xl font-semibold leading-snug text-white">
              Sign In
            </h3>
          </div>
          <form
            onSubmit={props.handleSubmit}
            className="p-7 flex flex-col gap-4 z-10 inset-[2px]"
          >
            <div className=" relative w-full min-w-[200px] h-11">
              <input
                type="text"
                className="peer w-full h-full bg-transparent font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-700 placeholder-shown:border-t-blue-gray-700 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-3 rounded-md  focus:border-blue-500"
                placeholder=" "
                value={props.username}
                onChange={(event) => props.setUserName(event.target.value)}
                required
              />
              <label className=" text-white flex w-full h-full select-none pointer-events-none absolute left-0 font-normal peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[4.1] text-blue-gray-400 peer-focus:text-blue-500 before:border-blue-gray-200 peer-focus:before:border-blue-500 after:border-blue-gray-200 peer-focus:after:border-blue-500">
                Your ID
              </label>
            </div>

            <div className=" relative w-full min-w-[200px] h-11">
              <input
                type="password"
                className="peer w-full h-full bg-transparent font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-700 placeholder-shown:border-t-blue-gray-700 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-3 rounded-md  focus:border-blue-500"
                placeholder=" "
                value={props.password}
                onChange={(event) => props.setPassword(event.target.value)}
                required
              />
              <label className="text-white flex w-full h-full select-none pointer-events-none absolute left-0 font-normal peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[4.1] text-blue-gray-400 peer-focus:text-blue-500 before:border-blue-gray-200 peer-focus:before:border-blue-500 after:border-blue-gray-200 peer-focus:after:border-blue-500">
                Password
              </label>
            </div>

            <button
              type="submit"
              className=" mt-13 w-full py-3 bg-gradient-to-tl from-mainColor to-alterColor shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 text-white font-semibold rounded-lg transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none active:opacity-[0.75]"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
