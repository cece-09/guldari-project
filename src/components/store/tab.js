import * as React from "react";
import { tab, selected } from "./tab.module.css";

// 탭 컴포넌트
const Tab = ({ items, state, onClick }) => {
  console.log(`current cat : ${state}`);

  return (
    <div className={tab}>
      {items.map((item, i) => (
        <button
          key={i}
          name={item}
          className={`${state === item ? selected : ""}`}
          onClick={onClick}
        >
          {item}
        </button>
      ))}
    </div>
  );
};
export default Tab;