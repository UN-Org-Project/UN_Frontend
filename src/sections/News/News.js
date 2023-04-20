import "./News.css";
import {
  SectionHeader,
  SectionWrapper,
  SubSectionHeader,
} from "../../components/index";

import photo01 from "./../../components/assets/images/img01.png";
import photo02 from "./../../components/assets/images/online-lesson.png";
import photo03 from "./../../components/assets/images/reading 1.png";
import photo04 from "./../../components/assets/images/discussion.png";

const News = () => {
  return (
    <>
      <SectionWrapper>
        {/* <div className="image-div">
            <img src={photo01} alt="" />
          </div> */}
        {/* <div className="text-div" id="about">
            <SectionHeader>About Us</SectionHeader>
            <p className="">
              Parrots are intelligent birds. They have relatively large brains,
              they can learn, and they can use simple tools. Because some
              species have the ability to make sounds like human voices and have
              plumages with bright colors, many species are kept as pets.
            </p>
          </div> */}

        <div className="flex flex-wrap mb-12 items-center">
          <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pr-6 mb-6 lg:mb-0 md:flex-1 sm:flex-none">
            <div
              className="relative overflow-hidden bg-no-repeat bg-cover rounded-lg"
              style={{ backgroundPosition: 50 + "%" }}
            >
              <img src={photo01} className="w-full" alt="Louvre" />
            </div>
          </div>
          <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pl-6 md:flex-1 sm:flex-none">
            <SectionHeader>About Us</SectionHeader>

            <p class="text-gray-500 mb-6">
              Parrots are intelligent birds. They have relatively large brains,
              they can learn, and they can use simple tools. Because some
              species have the ability to make sounds like human voices and have
              plumages with bright colors, many species are kept as pets.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <SectionHeader>Services</SectionHeader>

        <div className="flex flex-wrap mb-12 items-center">
          <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pr-6 mb-6 lg:mb-0 md:flex-1 sm:flex-none">
            <div
              className="relative overflow-hidden bg-no-repeat bg-cover rounded-lg"
              style={{ backgroundPosition: 50 + "%" }}
            >
              <img src={photo02} className="sm:w-full md:w-3/4 " alt="Louvre" />
            </div>
          </div>
          <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pl-6 md:flex-1 sm:flex-none">
            <SubSectionHeader>User data management.</SubSectionHeader>

            <p class="text-gray-500 mb-6">
              This system provides administrators with all the tools they need
              for effective data management, including the ability to assign and
              enroll users in classes.
            </p>
          </div>
          {/* <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pr-6 mb-6 lg:mb-0">
            <img src={photo02} alt="" className="w-full" />
          </div> */}
        </div>

        <div className="flex flex-wrap lg:flex-row-reverse mb-12 items-center">
          <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pr-6 mb-6 lg:mb-0 md:flex-1 sm:flex-none">
            <div
              className="relative overflow-hidden bg-no-repeat bg-cover rounded-lg"
              style={{ backgroundPosition: 50 + "%" }}
            >
              <img src={photo03} className="sm:w-full md:w-3/4 " alt="Louvre" />
            </div>
          </div>
          <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pl-6 md:flex-1 sm:flex-none">
            <SubSectionHeader>The continuous follow-up.</SubSectionHeader>

            <p class="text-gray-500 mb-6">
              You always have the ability to track your children's academic
              performance. Our system helps parents to know their children's
              level of academic progress, exam grades, and more.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap  mb-12 items-center">
          <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pr-6 mb-6 lg:mb-0 md:flex-1 sm:flex-none">
            <div
              className="relative overflow-hidden bg-no-repeat bg-cover rounded-lg"
              style={{ backgroundPosition: 50 + "%" }}
            >
              <img src={photo04} className="sm:w-full md:w-3/4 " alt="Louvre" />
            </div>
          </div>
          <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pl-6 md:flex-1 sm:flex-none">
            <SubSectionHeader>Effective parental involvement.</SubSectionHeader>

            <p class="text-gray-500 mb-6">
              Teachers can also send messages, behavior and grade reports,
              memos, and more to parents so that they can keep track of their
              children's performance and academic progress
            </p>
          </div>
        </div>

        {/* <div className="about-us-section">
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
        </div> */}

        {/* <div className="about-us-section">
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
        </div> */}
      </SectionWrapper>
    </>
  );
};

export default News;
