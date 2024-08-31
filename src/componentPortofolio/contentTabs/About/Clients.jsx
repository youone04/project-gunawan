export default function Clients({isHide = false}) {
    return (
        <section className="clients" style={isHide ? {display: 'none'}: {display: 'block'}}>

            <h3 className="h3 clients-title" style={{ color: 'white' }}>Clients</h3>

            <ul className="clients-list has-scrollbar">

                <li className="clients-item">
                    <a href="#">
                        <img src="./assets/images/logo-1-color.png" alt="client logo" />
                    </a>
                </li>

                <li className="clients-item">
                    <a href="#">
                        <img src="./assets/images/logo-2-color.png" alt="client logo" />
                    </a>
                </li>

                <li className="clients-item">
                    <a href="#">
                        <img src="./assets/images/logo-3-color.png" alt="client logo" />
                    </a>
                </li>

                <li className="clients-item">
                    <a href="#">
                        <img src="./assets/images/logo-4-color.png" alt="client logo" />
                    </a>
                </li>

                <li className="clients-item">
                    <a href="#">
                        <img src="./assets/images/logo-5-color.png" alt="client logo" />
                    </a>
                </li>

                <li className="clients-item">
                    <a href="#">
                        <img src="./assets/images/logo-6-color.png" alt="client logo" />
                    </a>
                </li>

            </ul>

        </section>

    )
}