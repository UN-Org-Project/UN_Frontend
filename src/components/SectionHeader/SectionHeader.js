import "./SectionHeader.css";

const SectionHeader = (props) => {
  return (
    <h2 className="w-full text-center border-b border-blue-500 border-solid my-[0.7rem] mx-0 leading-[0.1rem] text-[1.5rem] mb-12 ">
      <span className=" font-semibold px-[0.6] py-0 text-blue-500 bg-white">
        {props.children}
      </span>
    </h2>
  );
};

export default SectionHeader;
