import React from "react";
import { Link, useParams } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
const Events = (props) => {
  const { id } = useParams();
  const childrenData = useOutletContext();
  const children = childrenData.childe.filter((child) => child._id === id);
  const child = children[0];
  return (<>
  
  
    <Link to="/parent/showNotes">
        <button className="border border-green-300 bg-teal-300 px-5 py-2 rounded-lg text-white">
          show all notes 
        </button>
      </Link>
  
  </>
    );
};
export default Events;
