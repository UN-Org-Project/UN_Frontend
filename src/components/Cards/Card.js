import "./Card.css";
import { Link } from "react-router-dom";

import { BsArrowRightCircle } from "react-icons/bs";

const Card = (props) => {
  return (
    <div>
      <Link to="/login" className="nav-link">
        <div className="most-popular-item">
          <div className="card-wrapper">
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
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
