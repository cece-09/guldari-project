import * as React from "react";
import { graphql, Link } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import Text from "../components/text";
import TextItems from "../data/pageStaticContent";
import Slide from "../components/slide";
import Store from "../components/store_item";
import "../styles/global.css";

const IndexPage = ({ data }) => {
  // const allStorePages = data.allSitePage.edges;
  return (
    <Layout>
      <Slide />
      <Text content={TextItems.section1_1} />
      <Store />
      {/* {allStorePages.map(({ node }, i) => {
        return (
          <li key={i}>
            <Link to={node.path}>{node.pageContext.store.name}</Link>
          </li>
        );
      })} */}
    </Layout>
  );
};

export const Head = () => <Seo title="Home" />;
// export const query = graphql`
//   query MyQuery {
//     allSitePage(
//       filter: { path: { nin: ["/dev-404-page/", "/404/", "/404.html", "/"] } }
//     ) {
//       edges {
//         node {
//           path
//           pageContext
//         }
//       }
//     }
//   }
// `;
export default IndexPage;
