import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        <img className="fab fa-typo3" src="whatsapp-image-2023-02-18-at-11-35-1.png"></img>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"} />
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="./como" className="nav-links" onClick={closeMobileMenu}>
                                ¿Cómo trabajamos?
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Services" className="nav-links" onClick={closeMobileMenu}>
                                Services
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/contact"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                Contacto
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
