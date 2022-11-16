import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { header } from "../../styles/components/header.module.css";
import logo from "../../data/logo.svg";

const Header = ({ siteTitle }) => (
  <header className={header}>
    <Link to="/">
      <img alt="Site logo" height={30} style={{ margin: 0 }} src={logo} />
    </Link>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
