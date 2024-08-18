import '@/ComponentPositivus/assets/banner.css';
import ilustrastion from '@/ComponentPositivus/assets/images/Illustration.png';
export default function Banner() {
    return (
        <div className='d-flex' style={{ marginTop: 50 }}>
            <div className='flex-1'>
                <div className='desc-positivus'>
                    <h2>Navigating the digital landscape for success</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed natus iusto nesciunt,
                        aperiam neque commodi sint velit. Reiciendis voluptatum, nobis blanditiis
                        eius, laboriosam voluptatibus commodi, quidem neque modi obcaecati aspernatur.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed natus iusto nesciunt.</p>
                    <button className='btn-positivus'>Book a consultation</button>
                </div>
            </div>
            <div className='flex-1'>
                <img src={ilustrastion} alt="ilustrastion" height={515} width={600.46} />
            </div>
        </div>
    )
}