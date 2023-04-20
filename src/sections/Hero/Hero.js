import { SectionWrapper } from "../../components";
import { HeroImg } from "../../components/assets";
import "./Hero.css";

const Hero = () => {
  return (
    <SectionWrapper>
      <div className="w-full">
        <div className="hero-main mt-8 relative rounded-lg bg-indigo-700 container mx-auto flex flex-col items-center pt-12 sm:pt-24 pb-24 sm:pb-32 md:pb-48 lg:pb-56 xl:pb-64 ">
          <img
            className="mr-2 lg:mr-12 mt-2 lg:mt-12 absolute right-0 top-0"
            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg2.svg"
            alt="bg"
          />

          <img
            className="ml-2 lg:ml-12 mb-2 lg:mb-12 absolute bottom-0 left-0"
            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg3.svg"
            alt="bg"
          />
          <div className="w-11/12 sm:w-2/3 mb-2 sm:mb-10 absolute top-1/3">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center  text-green-400 font-bold leading-tight">
              Welcome To{" "}
              <span className="text-white">Student Tracking System</span>
            </h1>
          </div>
        </div>
      </div>
    </SectionWrapper>

    // <div className="hero-main">
    //   <div className="hero-text">
    //     <h4 className="hero-title">
    //       <span className="title-hero">Welcome To Our </span>
    //       <em>School</em>
    //     </h4>
    //   </div>
    // </div>
  );
};

export default Hero;
