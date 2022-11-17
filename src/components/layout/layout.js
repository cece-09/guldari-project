import * as React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Header from "./header";
import { footer } from "../../styles/components/layout.module.css";
import logo from "../../data/logo.svg";
import culture from "../../data/culture.svg";
import editorial from "../../data/editorial.svg";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div>
        <main>{children}</main>
        <footer className={footer}>
          <div>
            <img alt="logo1" height={30} style={{ margin: 0 }} src={culture} />
            <img alt="logo2" height={30} style={{ margin: 0 }} src={editorial} />
            <img alt="logo3" height={30} style={{ margin: 0 }} src={logo} />

          </div>
          © {new Date().getFullYear()} &middot; Built with Gatsby

        </footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
