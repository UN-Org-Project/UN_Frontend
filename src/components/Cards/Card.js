import "./Card.css";
import { Link } from "react-router-dom";

import { BsArrowRightCircle } from "react-icons/bs";

const Card = (props) => {
  return (
    <Link
      to="/login"
      className="card-wrapper flex flex-col justify-center items-center"
    >
      <img className="most-popular-item-image" src={props.img} alt="" />
      <div className="most-popular-item-content">
        <h4 className="most-popular-item-titel">
          {props.title} <br />
        </h4>
        <ul>
          <li>
            <span className=" flex items-center arrow-icon">
              <BsArrowRightCircle />
            </span>
          </li>
        </ul>
      </div>
    </Link>
  );
};

export default Card;
