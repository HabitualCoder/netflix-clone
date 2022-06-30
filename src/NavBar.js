import React, { useEffect, useState } from 'react';
import './NavBar.css';

function NavBar() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else {
                handleShow(false);
            }
            return () => {
                window.addEventListener("scroll");
            };
        })
    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img
                className="nav__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                alt="Netflix logo"
            />
            <img
                className="nav__avatar"
                src="http://localhost:3000/user.png"
                alt="User logo"
            />
        </div>
    );
}

export default NavBar;