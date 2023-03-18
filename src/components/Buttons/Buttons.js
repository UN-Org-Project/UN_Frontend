import "./Button.css";

const PrimaryButton = (props) => {
  return (
    <div className="button primary-btn">
      <a href="/#">{props.children}</a>
    </div>
  );
};

export default PrimaryButton;
