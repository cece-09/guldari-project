import * as React from "react";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { INLINES, BLOCKS, MARKS } from "@contentful/rich-text-types";
import Carousel from "../components/carousel";
import Layout from "../components/layout/layout";
import Seo from "../components/seo";
import Section from "../components/tag/section";
import {
  storeTemplateLayout,
  storeTemplateBody,
  storeTemplateSlide,
  storeTemplateMarkdown,
  label,
} from "../styles/page/store-template.module.css";
import Sidebar from "../components/layout/sidebar";

const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <b className="font-bold">{text}</b>,
  },
  renderNode: {
    [INLINES.HYPERLINK]: (node, children) => {
      const { uri } = node.data;
      return (
        <a href={uri} className="underline">
          {children}
        </a>
      );
    },
    [BLOCKS.HEADING_1]: (node, children) => {
      return <h1>{children}</h1>;
    },
    [BLOCKS.HEADING_2]: (node, children) => {
      return <h2>{children}</h2>;
    },
  },
};

const Label = ({ prop, val }) => {
  return val != null ? (
    <div class={label}>
      <div>{prop}</div>
      <div>{val}</div>
    </div>
  ) : (
    <></>
  );
};

const storeTemplate = ({ pageContext }) => {
  const { name, number, phone, category, photo, slug, body } =
    pageContext.store;

  return (
    <Layout>
      <Section>
        <div className={storeTemplateLayout}>
          <h1>{name}</h1>
          <Label prop="호수" val={`제 ${number}호`} />
          <Label prop="연락처" val={phone} />
          <Label prop="카테고리" val={category} />
        </div>
      </Section>
      <Sidebar />
      <Section className={storeTemplateBody}>
        <div className={storeTemplateMarkdown}>
          {renderRichText(body, options)}
        </div>
        <div className={storeTemplateSlide}>
          <Carousel images={photo} />
        </div>
      </Section>
    </Layout>
  );
};
export const Head = () => <Seo title="Store" />;
export default storeTemplate;
