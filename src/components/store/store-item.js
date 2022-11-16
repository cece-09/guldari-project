import * as React from "react";
import { Link } from "gatsby"
import Text from "../text"
import { storeItem, storeImage } from './store.module.css'

// 각 점포 아이템
const StoreItem = ({ link, img, content }) => {
  return (
    <div className={storeItem}>
      <Link to={link}>
        <img className={storeImage} src={img} />
        <Text content={content} />
      </Link>
    </div>
  )
}

export default StoreItem