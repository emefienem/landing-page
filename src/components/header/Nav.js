import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { useScroll } from "../GlobalState";
import "./Nav.css";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  const { scrollToSection, homeRef, featureRef, rateRef, telegramRef } =
    useScroll();

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
                padding: "13px",
                borderRadius: "5px",
              }}
            />
          </div>
        </div>
        <ul style={styleMenu}>
          <li
            onClick={() => {
              scrollToSection(homeRef);
              toggleMenu();
            }}
          >
            Home
          </li>
          <li
            onClick={() => {
              scrollToSection(featureRef);
              toggleMenu();
            }}
          >
            Features
          </li>
          <li
            onClick={() => {
              scrollToSection(rateRef);
              toggleMenu();
            }}
          >
            Rate
          </li>
          <li
            onClick={() => {
              scrollToSection(telegramRef);
              toggleMenu();
            }}
          >
            Telegram
          </li>
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
