import useStoreData from "./useStoreData";

const useFilteredStore = (state) => {
    const data = useStoreData();
    return data.filter(node => node.category === state);
}
export default useFilteredStore