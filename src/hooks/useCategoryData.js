import useStoreData from "./useStoreData";

const useCategoryData = () => {
    const storeData = useStoreData()
    /** get unique data from each category field */
    return [...new Set(storeData.map((data) => data.category))]
}
export default useCategoryData