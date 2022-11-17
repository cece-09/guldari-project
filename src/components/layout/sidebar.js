import { Link } from "gatsby";
import * as React from "react";
import useCategoryData from "../../hooks/useCategoryData";
import useStoreData from "../../hooks/useStoreData";
import {
  sidebar,
  categoryMenu,
  storeMenu,
  currentCategory,
  currentStore,
} from "../../styles/components/sidebar.module.css";

const Sidebar = ({ slug, category }) => {
  const categoryData = useCategoryData();
  const storeData = useStoreData();

  return (
    <div className={sidebar}>
      {categoryData.map((cat, i) => (
        <ul key={i}
          className={`${categoryMenu} ${cat === category ? currentCategory : ''}`}>
          <h1>{cat}</h1>
          {storeData
            .filter((node) => node.category === categoryData[i])
            .map((node, j) => (
              <Link to={`/store/${node.slug}`}>
                <li key={j}
                className={`${storeMenu} ${node.slug === slug ? currentStore : ''}`}>
                  {node.name}
                </li>
                <div></div>
              </Link>
            ))}
        </ul>
      ))}
    </div>
  );
};

export default Sidebar;
