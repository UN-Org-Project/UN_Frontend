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
      <div
        id="divider"
        class="rounded-full ring-2 ring-blue-600 lg:w-1/2 lg:mx-auto mt-15"
      ></div>
      <div
        id="about"
        className="pt-20 mb-20 text-3xl font-semibold text-center text-mainColor lg:font-bold uppercase"
      >
        who we are ?{" "}
      </div>

      <div className="lg:items-center lg:flex lg:flex-row-reverse lg:justify-center mb-10">
        <div className="lg:w-2/6 lg:-ml-20 lg:-mt-10 lg:flex lg:flex-col lg:justify-center lg:items-start">
          <p className="pb-5 text-2xl font-semibold text-center text-gradientTo lg:pb-0 lg:-mb-3 lg:text-lg lg:font-bold lg:text-left">
            About As
          </p>
          <p className="p-5 text-4xl font-semibold leading-relaxed text-center text-mainColor lg:pb-4 lg:text-3xl lg:pl-0 lg:font-bold lg:text-left">
            Create/login to an existing account to get started
          </p>
          <p className="p-5 pb-0 pl-10 pr-10 text-2xl leading-10 text-center text-gray-400 lg:w-5/6 lg:pb-0 lg:text-lg lg:text-left lg:p-0 lg:pl-0 lg:pr-0">
            An account is created with your email and a desired password
          </p>
        </div>
        <div className="ml-10 lg:ml-0 lg:w-3/6 overflow-hidden ">
          <img
            className=" lg:-mt-24 lg:-mb-15 mt-3 w-full"
            src={photo01}
            alt=""
          />
        </div>
      </div>

      <div
        id="divider"
        class="rounded-full ring-2 ring-blue-600 lg:w-1/2 lg:mx-auto mt-15 "
      ></div>
      <div
        id="about"
        className="pt-20 mb-20 text-3xl font-semibold text-center text-mainColor lg:font-bold uppercase"
      >
        Our Services{" "}
      </div>

      {/* <div class="lg:items-center lg:flex lg:flex-row lg:justify-end mb-25">
        <div class="lg:w-2/6 lg:-ml-20 lg:-mt-10 lg:flex lg:flex-col lg:justify-center lg:items-start">
          <SubSectionHeader>User data management.</SubSectionHeader>

          <p class="p-5 pb-0 pl-10 pr-10 text-2xl leading-10 text-center text-gray-400 lg:w-5/6 lg:pb-0 lg:text-lg lg:text-left lg:p-0 lg:pl-0 lg:pr-0">
            This system provides administrators with all the tools they need for
            effective data management, including the ability to assign and
            enroll users in classes.
          </p>
        </div>
        <div class="ml-10 lg:ml-0 lg:w-3/6 ">
          <img
            class=" lg:-mt-25 lg:-mb-20 sm:w-full md:w-3/4 "
            src={photo02}
            alt=""
          />
        </div>
      </div>

      <div class="lg:items-center lg:flex lg:flex-row lg:justify-end mb-25">
        <div class="ml-10 lg:ml-0 lg:w-3/6 ">
          <img
            class=" lg:-mt-25 lg:-mb-20 sm:w-full md:w-3/4 "
            src={photo03}
            alt=""
          />
        </div>
        <div class="lg:w-2/6 lg:-ml-20 lg:-mt-10 lg:flex lg:flex-col lg:justify-center lg:items-start">
          <SubSectionHeader>User data management.</SubSectionHeader>

          <p class="p-5 pb-0 pl-10 pr-10 text-2xl leading-10 text-center text-gray-400 lg:w-5/6 lg:pb-0 lg:text-lg lg:text-left lg:p-0 lg:pl-0 lg:pr-0">
            This system provides administrators with all the tools they need for
            effective data management, including the ability to assign and
            enroll users in classes.
          </p>
        </div>
      </div>

      <div class="lg:items-center lg:flex lg:flex-row lg:justify-end mb-25">
        <div class="lg:w-2/6 lg:-ml-20 lg:-mt-10 lg:flex lg:flex-col lg:justify-center lg:items-start">
          <SubSectionHeader>User data management.</SubSectionHeader>

          <p class="p-5 pb-0 pl-10 pr-10 text-2xl leading-10 text-center text-gray-400 lg:w-5/6 lg:pb-0 lg:text-lg lg:text-left lg:p-0 lg:pl-0 lg:pr-0">
            This system provides administrators with all the tools they need for
            effective data management, including the ability to assign and
            enroll users in classes.
          </p>
        </div>

        <div class="ml-10 lg:ml-0 lg:w-3/6 ">
          <img
            class=" lg:-mt-25 lg:-mb-20 sm:w-full md:w-3/4 "
            src={photo04}
            alt=""
          />
        </div>
      </div> */}

      {/* <section id="about" className="flex flex-wrap mb-12 items-center ">
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

          <p class=" text-blue-gray-700 font-sans mb-6">
            Parrots are intelligent birds. They have relatively large brains,
            they can learn, and they can use simple tools. Because some species
            have the ability to make sounds like human voices and have plumages
            with bright colors, many species are kept as pets.
          </p>
        </div>
      </section> */}

      <SectionWrapper>
        <section id="services" className="flex flex-wrap mb-12 items-center">
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
        </section>

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
      </SectionWrapper>
    </>
  );
};

export default News;
