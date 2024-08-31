import About from "./About";
import Clients from "./Clients";
import Doing from "./Doing";
import Layout from "./Layout";
import Testimonials from "./Testimonials";

export default function MainAbout() {
    return (
        <Layout>
            <About/>
            <Doing/>
            <Testimonials isHide={true}/>
            <Clients isHide={true}/>
        </Layout>
    )
}