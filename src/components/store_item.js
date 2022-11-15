import { graphql, Link, useStaticQuery } from "gatsby";
import * as React from "react";
import Button from "./button";
import { tab, selected } from "../styles/components/store_item.module.css";

// const StoreItem = () => {
//   return (
//     <div>
//       <Link to="/">
//         <img src="/"></img>
//         <h1></h1>
//         <p></p>
//       </Link>
//     </div>
//   );
// };

const Store = () => {
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
  const storeData = data.allContentfulStore.edges;
  const [cat, setCat] = React.useState(0);

  const Tab = () => {
    const categoryArr = storeData.map((data) => data.node.category);
    const catData = [...new Set(categoryArr)];

    console.log(`current cat : ${cat}`);

    const onSelected = (e) => {
      console.log(`set cat : ${e.target.name}`);
      setCat(e.target.name);
    };
    return (
      <div className={tab}>
        {catData.map((data, i) => (
          <button
            key={i}
            name={i}
            className={`${cat === i ? selected : ""}`}
            onClick={onSelected}
          >
            {data}
          </button>
        ))}
      </div>
    );
  };

  return (
    <div>
      <Tab />
    </div>
  );
};

export default Store;
