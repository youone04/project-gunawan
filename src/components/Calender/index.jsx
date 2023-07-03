import { Container } from "react-bootstrap";

const Calender = () => {
    return (
        <Container>
            <div className="row mt-5">
                <div className="col-sm-12 col-md-12 col-lg-4">
                   <img style={{display:'block', margin:'auto'}} src="/images/pana.png" alt="calender"/>
                </div>

                <div className="col-sm-12 col-md-12 col-lg-8">
                    <div className="mt-5 achivement-mod">
                        <h3>
                            How to desaign of spending three years at Pixelgrade
                        </h3>
                        <p style={{fontSize: 11}} className="desc-text">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                        </p>
                        <button className="btn" style={{background:'#4CAF4F',color:'white'}}>Learn More</button>
                    </div>
                </div>

            </div>
        </Container>
    )
}
export default Calender;