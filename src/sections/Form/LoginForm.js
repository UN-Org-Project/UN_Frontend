import React, { useState } from "react";
const LoginForm = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // ! sends a POST request to /api/login with the username and password entered by the user
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const respons = await axios.post("http://localhost:8000/auth/login", {
        username,
        password,
      });

      // the data is  respons.data.loadedUser
      if (respons.data.loadedUser.state === "Teacher") {
        // window.location.href = "/dbTeacher";
        <Link to="/dbTeacher" />;
      } else if (respons.data.loadedUser.state === "Parent") {
        // window.location.href = "/dbParent";
        <Link to="/dbParent" />;
      } else if (respons.data.loadeUser.state === "Admin") {
        // window.location.href = "/dbAdmin";
        <Link to="/dbAdmin" />;
      } else {
        console.log(respons.data.loadeUser);
        // setErrorMessage("Invalid username or password");
      }
    } catch (error) {
      //! display an error message to the user and clear the userName and password input fields.
      setErrorMessage("Invalid username or password");
      setUsername("");
      setPassword("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col max-w-[400] w-full mx-auto  p-8 px-8 rounded-lg justify-center flex-1"
    >
      <h2 className=" text-4xl dark:text-white font-bold text-center">
        SIGN IN
      </h2>
      <div className="flex flex-col text-white py-2">
        <label>User Name:</label>
        <input
          className="rounded-lg  mt-2 p-3 focus:border-blue-500 focus:bg-teal-400 focus:outline-none"
          type="text"
          placeholder="Enter Your ID"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          required
        />
      </div>

      <div className="flex flex-col text-white py-2">
        <label>Password: </label>
        <input
          className="rounded-lg mt-2 p-3 focus:border-blue-500 focus:bg-teal-400 focus:outline-none"
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
      </div>

      <div className="text-white py-2 ">
        <a href="./Login.js" className="hover:text-teal-200 transition">
          Forgot Password ?
        </a>
        <div>{errorMessage}</div>
      </div>

      <button
        type="submit"
        className=" mt-2 w-full py-3 bg-teal-400 shadow-lg shadow-teal-500/50 hover:shadow-teal-600/40 text-white font-semibold rounded-lg transition-shadow"
      >
        Sign in
      </button>
    </form>
  );
};

export default LoginForm;
