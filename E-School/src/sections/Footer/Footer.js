import "./Footer.css";
import { PrimaryButton } from "../../components/index";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="rootFooter">
      <footer className="container mx-auto">
        <div className="main-div-footer container wrapper">
          <span className="span-1 text-base">
            Student Tracking System
            <div className="button-footer">
              <PrimaryButton>Contact us</PrimaryButton>
            </div>
          </span>
          <div className="vert-sep"></div>
          <span className="span-2">
            <ul className="ul-footer">
              <li>Home</li>
              <li>Work</li>
              <li>Blog</li>
              <li>About</li>
            </ul>
          </span>
          <div className="vert-sep"></div>

          <span className="span-3">
            <span>
              <ul className="ul-footer icon-footer">
                <li>
                  <FaFacebookF />
                </li>
                <li>
                  <FaTwitter />
                </li>
                <li>
                  <FaLinkedinIn />
                </li>
              </ul>
            </span>
          </span>
        </div>

        <div className=" container">
          <div className="row">
            <div className="col-lg-12">
              <p>
                Developed with Love ❤️ By Muath | Ahmad | Yaseen | Mohammad{" "}
                <br />
                <a href="/#">Copyright © 2023</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
