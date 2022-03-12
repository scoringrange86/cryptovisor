import './Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {

    return (
        <div className="footer-wrapper">
            <div className="footer-content">
                <div className="footer-notes">
                    <h3>
                        About Us
                    </h3>
                    <p>
                        US Digital Currency news delivers the latest and greatest in all things cryptocurrency. We aim to provide high quality news, eduation, and resources that will maximize your investments into the constantly expanding cryptocurrency  space.
                    </p>
                </div>
                <div className="footer-links">
                    <Link className="footer-btn" to="/">
                        News
                    </Link>
                    <Link className="footer-btn" to="/Education">
                        Education
                    </Link>
                    <Link className="footer-btn" to="/Analysis">
                        Analysis
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Footer