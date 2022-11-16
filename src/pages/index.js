import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Text from "../components/text";
import TextItems from "../data/pageStaticContent";
import Slide from "../components/slide";
import Store from "../components/store/store";
import Section from '../components/section';
import "../styles/global.css";
import Flexbox from "../components/flexbox";

const IndexPage = () => {
  return (
    <Layout>
      <Section>
        <Flexbox>
          <Text content={TextItems.section1_1} align='left' />
          <Slide />
        </Flexbox>
      </Section>
      <Section bgColor='#eee'>
        <Text content={TextItems.section1_2} align='center' />
        <Store />
      </Section>
      <Section>
        <Text content={TextItems.section1_2} align='center' />
      </Section>
    </Layout>
  );
};

export const Head = () => <Seo title="Home" />;
export default IndexPage;
