import { Container } from "react-bootstrap";

const FooterTops = () => {
    return(
        <div data-aos="fade" style={{ backgroundColor: '#F5F7FA'}} className="pb-5">
            <Container>
                <div className="text-center center-text" style={{fontWeight:'bold'}}>
                    <h1 className="pt-3">
                        Pellentesque suscipit fringilla libero eu.
                    </h1>
                    <button className="btn mt-3" style={{background:'#4CAF4F',color:'white'}}>Get Demo &#10132;</button>
                </div>
            </Container>
        </div>
    )
}
export default FooterTops;