import "./Button.css";

const PrimaryButton = (props) => {
  return <div className="button primary-btn">{props.children}</div>;
};

export default PrimaryButton;
