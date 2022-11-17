import * as React from "react";
import Layout from "../components/layout/layout";
import Seo from "../components/seo";
import Text from "../components/tag/text";
import TextItems from "../data/pageStaticContent";
import Slide from "../components/slide";
import Store from "../components/store/store";
import Section from "../components/tag/section";
import MainFlexbox from "../components/tag/flexbox";
import "../styles/reset.css";
import "../styles/global.css";
import seoImage from "../data/site-image.png";

const IndexPage = () => {
  return (
    <Layout>
      <Section>
        <MainFlexbox>
          <Text content={TextItems.section1_1} align="left" />
          <Slide />

        </MainFlexbox>
      </Section>
      <Section bgColor="#eee">
        <Text content={TextItems.section1_2} align="center" />
        <Store />
      </Section>
      <Section>
        <Text content={TextItems.section1_3} align="center" />
      </Section>
    </Layout>
  );
};

export const Head = () => <Seo title="Home" imagePath={seoImage}/>;
export default IndexPage;
