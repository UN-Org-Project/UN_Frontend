import "./News.css";
import {
  SectionHeader,
  SectionWrapper,
  SubSectionHeader
} from "../../components/index";

import { BsDatabaseFillGear, BsFillChatDotsFill } from "react-icons/bs";
import { MdOutlineAssignmentTurnedIn } from "react-icons/md";
import { SlNote } from "react-icons/sl";
import { FaGraduationCap } from "react-icons/fa";

import Zoom from "react-reveal/Zoom";
import Jump from "react-reveal/Jump";
import Slide from "react-reveal/Slide";
import LightSpeed from "react-reveal/LightSpeed";

import photo01 from "./../../components/assets/images/img01.png";
import photo02 from "./../../components/assets/images/online-lesson.png";
import photo03 from "./../../components/assets/images/reading 1.png";
import photo04 from "./../../components/assets/images/discussion.png";
import Testimonial from "../Testimonial/Testimonial";

const News = () => {
  return (
    <SectionWrapper >
      <div className="divider"></div>

      <LightSpeed left>
        <SectionHeader className="section-header">Who We Are?</SectionHeader>
      </LightSpeed>

      <Slide left>
        <div className="about-us-section">
          <div className="text-div">
            <SubSectionHeader>About Us</SubSectionHeader>
            <h2 className="main-heading">Student Tracking System</h2>
            <p className="description-text">
              Our tracking student system is designed to help educators and
              administrators keep track of student progress and performance.
              With our system, you can easily monitor attendance, grades, and
              other important information to ensure that students are on track
              to meet their academic goals. We are committed to providing a
              high-quality tracking student system that meets the needs of
              educators and students alike.
            </p>
          </div>
          <div className="image-div">
            <img src={photo01} alt="About Us" className="responsive-image" />
          </div>
        </div>
      </Slide>

      <div className="divider"></div>

      <Jump>
        <SectionHeader className="section-header">Our Services</SectionHeader>
      </Jump>

      <div className="services-container">
        <Zoom>
          <div className="service-item">
            <BsDatabaseFillGear className="icon" />
            <h5 className="service-title">User Data Management</h5>
            <p className="service-description">
              This system provides administrators with all the tools they need
              for effective data management, including the ability to assign and
              enroll users in classes.
            </p>
          </div>
        </Zoom>
        <Zoom>
          <div className="service-item">
            <MdOutlineAssignmentTurnedIn className="icon" />
            <h5 className="service-title">Continuous Follow-up</h5>
            <p className="service-description">
              You always have the ability to track your children's academic
              performance. Our system helps parents to know their children's
              level of academic progress, exam grades, and more.
            </p>
          </div>
        </Zoom>
        <Zoom>
          <div className="service-item">
            <SlNote className="icon" />
            <h5 className="service-title">Effective Parental Involvement</h5>
            <p className="service-description">
              Teachers can also send messages, behavior and grade reports,
              memos, and more to parents so that they can keep track of their
              children's performance and academic progress.
            </p>
          </div>
        </Zoom>
        <Zoom>
          <div className="service-item">
            <BsFillChatDotsFill className="icon" />
            <h5 className="service-title">Improved Parent-Teacher Communication</h5>
            <p className="service-description">
              The system allows parents and teachers to engage in real-time
              conversations regarding their child's progress, academic
              performance, behavior, and other important updates.
            </p>
          </div>
        </Zoom>
      </div>
    
       <Testimonial />   
    </SectionWrapper>
  );
};

export default News;
