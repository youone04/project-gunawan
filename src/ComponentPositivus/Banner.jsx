import '@/ComponentPositivus/assets/banner.css';
export default function Banner() {
    return (
        <div className='d-flex'>
            <div className='flex-1' style={{background:'red'}}>
                <h2>Navigating the digital landscape for success</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed natus iusto nesciunt,
                    aperiam neque commodi sint velit. Reiciendis voluptatum, nobis blanditiis
                    eius, laboriosam voluptatibus commodi, quidem neque modi obcaecati aspernatur.</p>
            </div>
            <div className='flex-1' style={{background:'blue'}}>
                <h1>Positivus</h1>

            </div>
        </div>
    )
}