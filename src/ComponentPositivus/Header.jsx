import '@/ComponentPositivus/assets/index.css';
import '@/ComponentPositivus/assets/header.css';

export default function Header() {
    return (
        <div className='justifiy-content-center align-items-center d-flex'>
                <div className='row-mod' style={{ width: '100%', gap: 40 }}>
                    <h1 className='flex-1' style={{ paddingTop: 10, marginTop: 10 }}>LEFT</h1>
                    <div className='flex-3'>
                        <ul className='horizontal-li' style={{ paddingTop: 20, marginTop: 10 }}>
                            <li>About us</li>
                            <li>Services</li>
                            <li>Use Cases</li>
                            <li>Pricing</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    <div 
                    className='justifiy-content-center align-items-center d-flex'
                    style={{
                        marginTop: 10,
                        height: 55,
                        width: 150,
                        border: '1px solid black',
                        borderRadius: 10
                    }}>Request a Quote</div>


                </div>
            </div>

    )
}