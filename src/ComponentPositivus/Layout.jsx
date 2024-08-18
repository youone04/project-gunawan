import Banner from "@ComponentPositivus/Banner";
import Header from "@ComponentPositivus/Header";
import LogoList from "@ComponentPositivus/LogoList";
import { Container } from "react-bootstrap";
import Services from "@ComponentPositivus/Services";

export default function Layout({children}) {
    return(
        <Container>
        <Header/>
        <Banner/>
        <LogoList/>
        <Services/>
            {/* {children} */}
        </Container>
    )
}