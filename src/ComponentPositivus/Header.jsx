import '@/ComponentPositivus/assets/index.css';
import '@/ComponentPositivus/assets/header.css';
import logoPositivius from '@/ComponentPositivus/assets/images/logo-positivius.png';


export default function Header() {
    return (
        <div className='justifiy-content-center align-items-center d-flex'>
                <div className='row-mod' style={{ width: '100%', gap: 40 }}>
                    <h1 className='flex-1' style={{ paddingTop: 10, marginTop: 10 }}>
                        <img src={logoPositivius} alt='logo' />
                    </h1>
                    <div className='flex-3'>
                        <ul className='horizontal-li' style={{ paddingTop: 20, marginTop: 10 }}>
                            <li>About us</li>
                            <li>Services</li>
                            <li>Use Cases</li>
                            <li>Pricing</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    <button 
                    className='justifiy-content-center align-items-center d-flex'
                    style={{
                        marginTop: 10,
                        height: 68,
                        width: 231,
                        border: '1px solid black',
                        borderRadius: 14,
                        backgroundColor: 'white',
                    }}>Request a Quote</button>

                </div>
            </div>

    )
}