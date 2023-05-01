import React from "react";
import { useParams } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import ShowAllNotes from "../Notes/ShowALlNotes";

const Events = (props) => {
  const { id } = useParams();
  const childrenData = useOutletContext();
  const children = childrenData.childe.filter((child) => child._id === id);
  const child = children[0];
  return (
    <div className="mb-4 grid grid-cols-1 gap-6 relative top-1/2 translate-y-1/2">
      <ShowAllNotes allNote={child.allNotes} sender={child.teacherName} />
    </div>
  );
};
export default Events;
