import Banner from "@ComponentPositivus/Banner";
import Header from "@ComponentPositivus/Header";
import LogoList from "@ComponentPositivus/LogoList";
import { Container } from "react-bootstrap";
import Services from "@ComponentPositivus/Services";
import CaseStudy from "@ComponentPositivus/CaseStudy";
import Team from "@ComponentPositivus/Team";
import OnWorkingProcess from "@ComponentPositivus/OnWorkingProcess";

export default function Layout({children}) {
    return(
        <Container>
        <Header/>
        <Banner/>
        <LogoList/>
        <Services/>
        <CaseStudy/>
        <OnWorkingProcess/>
        <Team/>
        </Container>
    )
}