import { graphql, useStaticQuery } from "gatsby";

/** TODO : typescript 형식 지정 */
const StoreModel = ({node}) => {
  return(
    {
      name: node.name,
      number: node.number,
      category: node.category,
      slug: node.slug,
      phone: node.phone,
      photo: node.photo,
      body: node.body,
    }
  )
}

const useStoreData = () => {
    const data = useStaticQuery(
        graphql`
          query StoreQuery {
            allContentfulStore {
              edges {
                node {
                  number
                  category
                  phone
                  slug
                  name
                  photo {
                    url
                  }
                  body {
                    raw
                  }
                }
              }
            }
          }
        `
    );
    return data.allContentfulStore.edges.map(node => StoreModel(node))
}

export default useStoreData