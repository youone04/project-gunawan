import {faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Layout({children}) {
    return (
        <article className="resume active" data-page="resume">
             <header>
                <div style={{ display: 'flex', gap: 10, alignItems: 'center'}}>
                    <h2 className="h2 article-title" style={{ color: 'white' }}>Resume</h2>
                    <a href=""><FontAwesomeIcon icon={faFilePdf} className="mb-3" style={{color: 'hsl(45, 100%, 71%)'}} /></a>
                </div>
            </header>
            {children}
        </article>
    )
}