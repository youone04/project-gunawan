import FilterImages from "./FilterImages";
import InfinityScroll from "./InfinityScroll";
import SizeImages from "./SizeImages";

export default function MainHandleImages() {
    return (
        <>
        <SizeImages/>
        <hr/>
        <FilterImages/>
        <hr/>
        <InfinityScroll/>
        </>
    )
}