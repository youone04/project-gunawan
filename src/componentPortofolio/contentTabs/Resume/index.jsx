import Education from "./Education";
import Experience from "./Experience";
import Layout from "./Layout";
import Skills from "./Skills";

export default function MainResume() {
    return (
      <Layout>
        <Education/>
        <Experience/>
        <Skills isHide={true}/>
      </Layout>
    )
}