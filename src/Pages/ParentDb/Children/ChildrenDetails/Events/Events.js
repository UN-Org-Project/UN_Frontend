import React from "react";
import { useParams } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import ShowAllNotes from "../Notes/ShowALlNotes";
import MainTitle from "../../../../../components/SectionTitle/MainTitle";
import { EnventImg } from "../../../../../components/assets";

const Events = (props) => {
  const { id } = useParams();
  const childrenData = useOutletContext();
  const children = childrenData.childe.filter((child) => child._id === id);
  const child = children[0];
  return (
    <>
      <MainTitle title="Events" img={EnventImg} />
      <div className="mb-4 grid grid-cols-1 gap-6 relative top-1/2 translate-y-1/2">
        <ShowAllNotes allNote={child.allevents} sender={child.teacherName} />
      </div>
    </>
  );
};
export default Events;
