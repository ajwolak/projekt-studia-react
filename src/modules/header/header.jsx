import "./../../css/header.css";
import adminIcon from "./../../images/icons/admin.png";
import { Nav, Dropdown } from "react-bootstrap";

export const Header = () => {
  return (
    <div className="header pb-2 pt-2" id="mainHeder">
      <div className="container-media-frames">
        <div>
          <p>Cześć, Tomek!</p>
        </div>
        <div>
          <Dropdown>
            <Dropdown.Toggle as={Nav.Link}>
              <img src={adminIcon} alt="" />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Ustawienia konta</Dropdown.Item>
              <Dropdown.Divider />

              <Dropdown.Item href="/">Wyloguj</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};
