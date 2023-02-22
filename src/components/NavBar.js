import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../App.css";

function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    return (
        <header className="App">
            <nav ref={navRef} >
                <a href="/#" className="quienes" >¿Quienes somos?</a>
                <a href="/#" className="servicios">Servicios</a>
                <a href="/#" className="contactanos">Contactanos</a>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    );
}

export default Navbar;