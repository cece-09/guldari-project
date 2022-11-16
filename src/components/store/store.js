import * as React from "react";
import useCategoryData from "../../hooks/useCategoryData";
import useFilteredStore from '../../hooks/useFilteredStore';
import Tab from './tab'
import StoreList from "./store-list";

const Store = () => {
  const catData = useCategoryData();
  const [state, setState] = React.useState(catData[0]);
  const filter = useFilteredStore(state); 

  /* when each tab is selected */
  const onSelected = (e) => {
    setState(e.target.name);
  };

  return (
    <div>
      <Tab items={catData} state={state} onClick={onSelected} />
      <StoreList items={filter} />
    </div>
  );
};

export default Store;
