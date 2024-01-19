import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";

import "./Nav.css";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const styleMenu = {
    top: menu ? 0 : "100%",
  };

  return (
    <div className={`${scrolled ? "scrolled" : ""}`}>
      <header>
        <div className="logo">
          <img src="/images/logo.png" alt="" />
          <div className="menu" onClick={toggleMenu}>
            <FontAwesomeIcon
              icon={faBars}
              className="menu"
              style={{
                background: "#583acf",
                padding: "10px",
                borderRadius: "5px",
              }}
            />
          </div>
        </div>
        <ul style={styleMenu}>
          <li>Home</li>
          <li>Features</li>
          <li>Rate</li>
          <li>Telegram</li>
          <li onClick={toggleMenu}>
            <FontAwesomeIcon
              icon={faClose}
              className="menu"
              style={{
                background: "whitesmoke",
                color: "#000",
                padding: "10px",
                borderRadius: "5px",
              }}
            />
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Nav;
