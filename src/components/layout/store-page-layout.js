import * as React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Header from "./header";
import { footer } from "../../styles/components/layout.module.css";
import Sidebar from "./sidebar";
import { storePageLayout } from '../../styles/components/store-page-layout.module.css'

const StorePageLayout = ({ children, currPage }) => {
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
        <div className={storePageLayout}>
          <Sidebar slug={currPage.slug} category={currPage.category} />
          <main>{children}</main>
        </div>
        <footer className={footer}>
          © {new Date().getFullYear()} &middot; Built with Gatsby
        </footer>
      </div>
    </>
  );
};

StorePageLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StorePageLayout;
