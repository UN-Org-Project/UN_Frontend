import React from 'react'
import "./Testimonial.css"

import Jump from 'react-reveal/Jump';
import Rotate from 'react-reveal/Rotate';
import {
  SectionHeader,
  SectionWrapper,
  SubSectionHeader
} from "../../components/index";
import t1 from "./../../components/assets/images/team-1.jpg";
import t2 from "./../../components/assets/images/team-2.jpg";
import t3 from "./../../components/assets/images/team-3.jpg";
import t4 from "./../../components/assets/images/team-4.jpg";



const Testimonial = () => {
  return (



    <div className=''>


      
<Jump>      
      <div
        id="about"
        className="pt-20 mb-20 text-3xl  font-semibold text-center text-mainColor lg:font-bold uppercase"
      >
        <SectionHeader className='border-b-4 border-blue-600 '>Testimonial{" "}</SectionHeader>
      </div>
</Jump>

    <div class="container-xxl py-5">
    <div class="container">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">


<Rotate top left>
              <div className="ext service-item text-center rounded-2xl ">
                <div class="testimonial">
                <span class="icon fa fa-quote-left"></span>
                <p class="description">
                  "The Student Tracking System has been a game-changer for our school!
                  With real-time updates on marks, absence notifications,
                  and easy communication with parents,
                  it has revolutionized how we monitor student progress.
                  Highly recommended!"
                </p>
                <div class="testimonial-content">
                  <div class="pic w-40 h-40">
                    <img  src={t1} alt=""/>
                  </div>
                  <h3 class="name">Ahmad </h3>
                  <span class="title">School Administrator</span>
                </div>
              </div>
              </div>
</Rotate>
<Rotate top left>
              <div className="ext service-item text-center rounded-2xl">
                <div class="testimonial">
                  <span class="icon fa fa-quote-left"></span>
                  <p class="description">
                    "I can't imagine navigating my child's education without the Student Tracking System.
                    It keeps me informed about their marks, alerts me of absences instantly,
                    and provides a convenient chat platform with teachers.
                    It's an invaluable tool for any parent."
                  </p>
                  <div class="testimonial-content">
                    <div class="pic w-40 h-40">
                      <img src={t2} alt=""/>
                    </div>
                    <h3 class="name"> Sarah </h3>
                    <span class="title">Parent</span>
                  </div>
                </div>
              </div>
</Rotate>

<Rotate top left>
              <div className="ext service-item text-center rounded-2xl">
                <div class="testimonial">
                  <span class="icon fa fa-quote-left"></span>
                  <p class="description">
                    "Thanks to the Student Tracking System,
                    I'm always in the loop about my child's academic journey.
                    It's user-friendly, comprehensive,
                    and provides real-time updates on marks and attendance.
                    I highly recommend it to all parents!"
                  </p>
                  <div class="testimonial-content">
                    <div class="pic w-40 h-40">
                      <img src={t3} alt=""/>
                    </div>
                    <h3 class="name"> Hisham </h3>
                    <span class="title">Parent</span>
                  </div>
                </div>
              </div>
</Rotate>

<Rotate top left>
              <div className="ext service-item text-center rounded-2xl">
                <div class="testimonial">
                  <span class="icon fa fa-quote-left"></span>
                  <p class="description">
                    "The Student Tracking System has made a significant positive impact on our school community.
                    It streamlines academic monitoring,
                    improves communication between teachers and parents,
                    and enhances student progress.
                    A must-have for any educational institution!"
                  </p>
                  <div class="testimonial-content">
                    <div class="pic w-40 h-40">
                      <img src={t4} alt=""/>
                    </div>
                    <h3 class="name"> Sohaila </h3>
                    <span class="title">Teacher</span>
                  </div>
                </div>
              </div>
</Rotate>



          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;