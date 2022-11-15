import * as React from "react"
import { Link } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types'
import Layout from "../components/layout"
import Seo from "../components/seo"

const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <b className="font-bold">{text}</b>,
  },
  renderNode: {
    [INLINES.HYPERLINK]: (node, children) => {
      const { uri } = node.data
      return (
        <a href={uri} className="underline">
          {children}
        </a>
      )
    },
    [BLOCKS.HEADING_2]: (node, children) => {
      return <h2>{children}</h2>
    },
  },
}

const storeTemplate = ({ pageContext }) => {
  
  const {name, number, phone, category, photo, slug, body} = pageContext.store
  
  return(
  <Layout>
    {photo.map((pho, i) => {return <img key={i} src={pho.url}/>})}
    <div>{name}</div>
    <div>{`제 ${number}호`}</div>
    <div>{phone}</div>
    <div>{category}</div>
    <div>{renderRichText(body, options)}</div>
  </Layout>
  )
}
export const Head = () => <Seo title="Store" />
export default storeTemplate