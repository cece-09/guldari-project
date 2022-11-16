import * as React from "react";
import StoreItem from "./store-item";
import { store } from "./store.module.css";

// 전체 점포 리스트
const StoreList = ({ items }) => {
  return (
    <div className={store}>
      {items.map((node, i) => {
        return (
          <StoreItem
            key={i}
            link={`/store/${node.slug}`}
            img={node.photo[0].url}
            content={{ title: node.name, body: `제 ${node.number}호` }}
          />
        );
      })}
    </div>
  );
};

export default StoreList;
