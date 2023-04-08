import React from "react";
const LoginForm = (props) => {
  return (
    <form
      onSubmit={props.handleSubmit}
      className="flex flex-col max-w-[400] w-full mx-auto  p-8 px-8 rounded-lg justify-center flex-1">
      <h2 className=" text-4xl dark:text-white  text-white font-bold text-center">
        SIGN IN
      </h2>
      <div className="flex flex-col text-white py-2">
        <label>User Name:</label>
        <input
          className="rounded-lg  mt-2 p-3 focus:border-blue-500 focus:bg-teal-400 focus:outline-none"
          type="text"
          placeholder="Enter Your ID"
          value={props.username}
          onChange={(event) => props.setUserName(event.target.value)}
          required
        />
      </div>

      <div className="flex flex-col text-white py-2">
        <label>Password: </label>
        <input
          className="rounded-lg mt-2 p-3 focus:border-blue-500 focus:bg-teal-400 focus:outline-none"
          type="password"
          placeholder="Enter Password"
          value={props.password}
          onChange={(event) => props.setPassword(event.target.value)}
          required
        />
      </div>

      <div className="text-white py-2 ">
        <a href="./Login.js" className="hover:text-teal-200 transition">
          Forgot Password ?
        </a>
        <div>{props.errorMessage}</div>
      </div>

      <button
        type="submit"
        className=" mt-2 w-full py-3 bg-teal-400 shadow-lg shadow-teal-500/50 hover:shadow-teal-600/40 text-white font-semibold rounded-lg transition-shadow">
        Sign in
      </button>
      {props.isLoading && <p>Loading ...</p>}
    </form>
  );
};

export default LoginForm;
