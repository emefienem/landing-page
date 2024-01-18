import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";

import "./Nav.css";

const Nav = () => {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };

  const styleMenu = {
    top: menu ? 0 : "100%",
  };

  return (
    <header>
      <div className="logo">
        <img src="/images/logo.png" alt="" />
        <div className="menu" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} className="menu" />
        </div>
      </div>
      <ul style={styleMenu}>
        <li>Work</li>
        <li>Work</li>
        <li>Work</li>
        <li onClick={toggleMenu}>
          <FontAwesomeIcon icon={faClose} className="menu" />
        </li>
      </ul>
    </header>
  );
};

export default Nav;
