import "./News.css";
import { SectionHeader, SectionWrapper } from "../../components/index";

import photo01 from "./../../components/assets/images/img01.png";
import photo02 from "./../../components/assets/images/online-lesson.png";
import photo03 from "./../../components/assets/images/reading 1.png";
import photo04 from "./../../components/assets/images/discussion.png";

const News = () => {
  return (
    <>
      <SectionWrapper>
        <div className="about-us-section about-div">
          <div className="image-div">
            <img src={photo01} alt="" />
          </div>
          <div className="text-div">
            <SectionHeader>About Us</SectionHeader>
            <p>
              Parrots are intelligent birds. They have relatively large brains,
              they can learn, and they can use simple tools. Because some
              species have the ability to make sounds like human voices and have
              plumages with bright colors, many species are kept as pets.
            </p>
          </div>
        </div>
        <br />
        <br />
        <h2 className="Services">
          <span>Services</span>
        </h2>
        <br />
        <div className="about-us-section">
          <div className="text-div">
            <SectionHeader>User data management.</SectionHeader>
            <p>
              This system provides administrators with all the tools they need
              for effective data management, including the ability to assign and
              enroll users in classes.
            </p>
          </div>
          <div className="image-div">
            <img src={photo02} alt="" />
          </div>
        </div>

        <div className="about-us-section">
          <div className="image-div">
            <img src={photo03} alt="" />
          </div>
          <div className="text-div">
            <SectionHeader>The continuous follow-up.</SectionHeader>
            <p>
              You always have the ability to track your children's academic
              performance. Our system helps parents to know their children's
              level of academic progress, exam grades, and more.
            </p>
          </div>
        </div>

        <div className="about-us-section">
          <div className="text-div">
            <SectionHeader>Effective parental involvement.</SectionHeader>
            <p>
              Teachers can also send messages, behavior and grade reports,
              memos, and more to parents so that they can keep track of their
              children's performance and academic progress
            </p>
          </div>
          <div className="image-div">
            <img src={photo04} alt="" />
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default News;
