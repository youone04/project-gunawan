import Banner from "./Banner";
import Header from "./Header";

export default function Layout({children}) {
    return(
        <div className="container-mod">
        <Header/>
        <Banner/>
            {/* {children} */}
        </div>
    )
}