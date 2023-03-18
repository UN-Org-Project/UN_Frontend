import "./Container.css";

const Container = (props) => {
  return (
    <div className="container mx-auto main-container">{props.children}</div>
  );
};

export default Container;
