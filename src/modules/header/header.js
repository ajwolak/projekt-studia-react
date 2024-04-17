import { Link } from "react-router-dom";
import "./../../css/header.css";
import adminIcon from "./../../images/icons/admin.png";
import React, { useState } from "react";
import { Navbar, Nav, Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="header pb-2 pt-2" id="mainHeder">
      <div>
        <p>Cześć, Tomek!</p>
      </div>
      <div>
        <Dropdown show={showMenu}>
          <Dropdown.Toggle as={Nav.Link} onClick={handleMenuToggle}>
            <img src={adminIcon} />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>Ustawienia konta</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Wyloguj</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};
