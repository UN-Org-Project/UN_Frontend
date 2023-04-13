import { TextareaAutosize } from "@mui/base";
import React from "react";
const NotesAllStudent = (props) => {
  return (
    <div style={{ display: "flex", justifyContent: "center", height: "100vh" }}>
      <div style={{ margin: " 40px auto", width: 400 }}>
        <TextareaAutosize
          maxRows={4}
          aria-label="maximum height"
          placeholder="Maximum 4 rows"
          defaultValue="Lorem ipsum dolor sit amet, 
        ut labore et dolore magna aliqua."
          style={{ width: "100%", textAlign: "center" }}
        />
      </div>
    </div>
  );
};
export default NotesAllStudent;
