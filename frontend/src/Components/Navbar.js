import './Navbar.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import DropdownMenu from './DropdownMenu';

const Navbar = ({ click }) => {
    // Toggle for dropdown menu
    const [open, setOpen] = useState(false);
    // Variable for pages in dropdown menu
    const [pages, setPages] = useState(['Bitcoin (BTC)', 'Ethereum (ETH)', 'Stellar (XLM)', 'Ripple (XRP)', 'USDC', 'Cardano (ADA)', 'Solana (SOL)' ]);

    return (
        <div className="nav-container">
            <nav className="navbar">
                <Link className="logo" to="/"> USDCNews</Link>
                <ul className="nav-items">
                    <li>
                        <Link to="/" > News</Link>
                    </li>
                    <li>
                        <Link to="/Education"> Education</Link>
                    </li>
                    <li onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
                        <div className="dropdown">
                            <Link to="#" className="link">Analysis</Link>
                            <DropdownMenu isOpen={open} pages={pages}/>
                        </div>
                    </li>
                </ul>
                <div className="hamburgerMenu" onClick={click}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </nav>

        </div >
    )
}

export default Navbar