import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { button } from "../../styles/components/button.module.css";

const Button = ({ children, to }) => {
  return <Link to={to}>
    <div className={button}>{children}</div>
  </Link>;
};

Button.propTypes = {
  children: PropTypes.string,
};

export default Button;
