
import "./News.css";
import {
  SectionHeader,
  SectionWrapper,
  SubSectionHeader,
} from "../../components/index";

import { FaGraduationCap } from "react-icons/fa";
import Zoom from 'react-reveal/Zoom';
import Jump from 'react-reveal/Jump';
import Slide from 'react-reveal/Slide';
import LightSpeed from 'react-reveal/LightSpeed';

import { BsDatabaseFillGear } from "react-icons/bs";
import { MdOutlineAssignmentTurnedIn } from "react-icons/md";
import { SlNote } from "react-icons/sl";
import { BsFillChatDotsFill } from "react-icons/bs";


import photo01 from "./../../components/assets/images/img01.png";
import photo02 from "./../../components/assets/images/online-lesson.png";
import photo03 from "./../../components/assets/images/reading 1.png";
import photo04 from "./../../components/assets/images/discussion.png";
import Testimonial from "../Testimonial/Testimonial";


const News = () => {

  return (
    <>
    <div  class="">
      <div
        id="divider"
        class="rounded-full ring-2 ring-blue-600 lg:w-1/2 lg:mx-auto mt-15"
      >
        
      </div>

      <LightSpeed left>
        <div
          id="about"
          className="pt-20 mb-20 text-3xl font-semibold text-center text-mainColor lg:font-bold uppercase"
        >
          who we are ?{" "}
        </div>
      </LightSpeed>


<Slide left>
      <div className="text-center lg:items-center lg:flex lg:flex-row-reverse lg:justify-center mb-10">
        <div className="lg:w-2/6 lg:-ml-20 lg:-mt-10 lg:flex lg:flex-col lg:justify-center lg:items-start">
          <p className="pb-5 text-2xl font-semibold text-center text-gradientTo lg:pb-0 lg:-mb-3 lg:text-lg lg:font-bold lg:text-left">
            About Us
          </p>
          <p className="p-5 text-4xl font-semibold leading-relaxed text-center text-mainColor lg:pb-4 lg:text-3xl lg:pl-0 lg:font-bold lg:text-left">
            Student Tracking System
          </p>
          <p className="p-5  pb-0 pl-10 pr-10 text-2xl leading-10 text-center text-gray-400 lg:w-5/6 lg:pb-0 lg:text-lg lg:text-left lg:p-0 lg:pl-0 lg:pr-0">
            Our tracking student system is designed to help educators and administrators keep track of student progress and performance. With our system, you can easily monitor attendance, grades, and other important information to ensure that students are on track to meet their academic goals.
            We are committed to providing a high-quality tracking student system that meets the needs of educators and students alike. 
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
</Slide>

      <div
        id="divider"
        class="rounded-full ring-2 ring-blue-600 lg:w-1/2 lg:mx-auto mt-15 "
      ></div>

      
<Jump>      
      <div
        id="about"
        className="pt-20 mb-20 text-3xl font-semibold text-center text-mainColor lg:font-bold uppercase"
      >
        Our Services{" "}
      </div>
</Jump>

    <div class="container-xxl py-5">
    <div class="container">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">



<Zoom>
        <div className="ext service-item text-center pt-3">
          <div className="int p-4 ">
            <div className=" iiicon flex justify-center items-top text-7xl mb-4 ">
              <BsDatabaseFillGear />
            </div>
            <h5 className=" tiitle mb-3 ">User data management</h5>
            <p className="detaile opacity-60">This system provides administrators with all the tools they need for effective data management,
            including the ability to assign and enroll users in classes.</p>
          </div>
        </div>

</Zoom>
<Zoom>
              <div className="ext service-item text-center pt-3">
                <div className="int p-4 ">
                  <div className=" iiicon flex justify-center items-top text-7xl mb-4 ">
                    <MdOutlineAssignmentTurnedIn/>
                  </div>
                  <h5 className=" tiitle mb-3 ">The continuous follow-up</h5>
                  <p className="detaile opacity-60">You always have the ability to track your children's academic
              performance. Our system helps parents to know their children's
              level of academic progress, exam grades, and more.</p>
                </div>
              </div>
</Zoom>
<Zoom>
              <div className="ext service-item text-center pt-3">
                <div className="int p-4 ">
                  <div className=" iiicon flex justify-center items-top text-7xl mb-4 ">
                    <SlNote />
                  </div>
                  <h5 className=" tiitle mb-3 ">Effective parental involvement</h5>
                  <p className="detaile opacity-60">Teachers can also send messages, behavior and grade reports,
              memos, and more to parents so that they can keep track of their
              children's performance and academic progress</p>
                </div>
              </div>

</Zoom>
<Zoom>
              <div className="ext service-item text-center pt-3">
                <div className="int p-4 ">
                  <div className=" iiicon flex justify-center items-top text-7xl mb-4 ">
                    <BsFillChatDotsFill />
                  </div>
                  <h5 className=" tiitle mb-3 ">Improved Parent-Teacher Communication</h5>
                  <p className="detaile opacity-60">
                  The system allows parents and teachers to engage in real-time conversations 
                  regarding their child's progress, academic performance, behavior, and other important updates.</p>
                </div>
              </div>
</Zoom>
        </div>





{/* ////////////////////////////////////////////////////////////////////////////////////////////////// */}




{/* ////////////////////////////////////////////////////////////////////////////////////////////////// */}




    <Testimonial/>

      {/* <div
        id="divider"
        class="rounded-full ring-2 ring-blue-600 lg:w-1/2 lg:mx-auto mt-15 "
      ></div>

      
<Jump>      
      <div
        id="about"
        className="pt-20 mb-20 text-3xl font-semibold text-center text-mainColor lg:font-bold uppercase"
      >
        Our Activities{" "}
      </div>
</Jump> */}


{/* 
<div className="parent">
  <div className="one">
    <a class="relative block overflow-hidden" href="">
    <img class="w-fit" src={photo03} alt=""/>
    </a>
  </div>
  <div className="two">
    two
  </div>
  <div className="three">
    three
  </div>
  <div className="four">
    four
  </div>
</div> */}


</div>
</div>
</div>

    </>
  );
};

export default News;
