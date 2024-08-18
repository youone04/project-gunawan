import Banner from "@ComponentPositivus/Banner";
import Header from "@ComponentPositivus/Header";

export default function Layout({children}) {
    return(
        <div className="container-mod">
        <Header/>
        <Banner/>
            {/* {children} */}
        </div>
    )
}