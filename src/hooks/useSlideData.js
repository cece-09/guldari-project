import { graphql, useStaticQuery } from "gatsby";

/** TODO : typescript 형식 지정 */
const SlideModel = ({node}) => {
  return (
    {
      alt: node.image.filename,
      url: node.image.url,
    }
  )
}

const useSlideData = () => {
    const data = useStaticQuery(
        graphql`
          query SlideQuery {
            allContentfulSlide {
              edges {
                node {
                  image {
                    filename
                    url
                  }
                }
              }
            }
          }
        `
    );
    return data.allContentfulSlide.edges.map(node => SlideModel(node))
}

export default useSlideData