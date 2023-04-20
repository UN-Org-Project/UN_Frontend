import React from "react";
import { useParams } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
const Events = (props) => {
  const { id } = useParams();
  const childrenData = useOutletContext();
  const children = childrenData.childe.filter((child) => child._id === id);
  const child = children[0];
  return <p>Events</p>;
};
export default Events;
