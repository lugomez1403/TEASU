import React, { useRef } from "react";
import "../App.css";
// import Quien from "../Views/quien";

function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    return (
        <header className="App">
            <nav ref={navRef} >
                <a href={"../Views/quien"} className="quienes" >¿Quienes somos?</a>
                <a href="/#" className="servicios">Servicios</a>
                <a href="../Views/contact" className="contactanos">Contactanos</a>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>

            </button>
        </header>
    );
}

export default Navbar;