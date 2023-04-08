import axios from "axios";
import React, { useEffect } from "react";

const AdminDb = () => {
  const [userdata, setUserData] = useState({});

  useEffect(() => {
    axios
      .post("/api/user", { token: window.localStorage.getItem("token") })
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>{userdata.name}</h1>
      <h1>{userdata.email}</h1>
    </div>
  );
};

export default AdminDb;
