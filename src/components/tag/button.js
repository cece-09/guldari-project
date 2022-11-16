import * as React from "react";
import PropTypes from "prop-types";
import { button } from "../../styles/components/button.module.css";

const Button = ({ children }) => {
  return <button className={button}>{children}</button>;
};

Button.propTypes = {
  children: PropTypes.string,
};

export default Button;
