import React from "react";
import { Link, useParams } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import ShowALlNotes from "./ShowALlNotes";
const Events = (props) => {
  const { id } = useParams();
  const childrenData = useOutletContext();
  const children = childrenData.childe.filter((child) => child._id === id);
  const child = children[0];
  return (
    <>
      <ShowALlNotes allNote={child.allNotes} sender={child.teacherName} />
    </>
  );
};
export default Events;
