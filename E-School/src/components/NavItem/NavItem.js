import "./NavItem.css";

const NavItem = (props) => {
  return <li className="mr-10">{props.children}</li>;
};

export default NavItem;
