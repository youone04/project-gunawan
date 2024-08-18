import Banner from "@ComponentPositivus/Banner";
import Header from "@ComponentPositivus/Header";
import LogoList from "@ComponentPositivus/LogoList";
import { Container } from "react-bootstrap";

export default function Layout({children}) {
    return(
        <Container>
        <Header/>
        <Banner/>
        <LogoList/>
            {/* {children} */}
        </Container>
    )
}