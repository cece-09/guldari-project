import * as React from "react";
import { Link } from "gatsby";
import Text from "../tag/text";
import { storeItem, storeImage, storeText } from "./store.module.css";

// each store item
const StoreItem = ({ link, img, content }) => {
  return (
    <div className={storeItem}>
      <Link to={link}>
        <img className={storeImage} src={img} />
        <div className={storeText}>
          <Text content={content} />
        </div>
      </Link>
    </div>
  );
};

export default StoreItem;
