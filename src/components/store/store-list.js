import * as React from "react";
import StoreItem from "./store-item"
import { store } from './store.module.css'

// 전체 점포 리스트
const StoreList = ({ items }) => {
  return (
    <div className={store}>
      {items.map((node, i) => {
        return (
          <div key={i}>
            <StoreItem
              link={`/store/${node.slug}`}
              img={node.photo[0].url}
              content={{ title: node.name, body: node.phone }} />
          </div>
        )
      })}
    </div>
  )
}

export default StoreList