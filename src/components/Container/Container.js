import "./Container.css";

const Container = (props) => {
  return (
    <div className="container mx-auto px-4 flex flex-col ">
      {props.children}
    </div>
  );
};

export default Container;
