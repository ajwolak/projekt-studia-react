import { Link } from "react-router-dom";
import "./../../css/header.css";
import adminIcon from "./../../images/icons/admin.png";
export const Header = () => {
  return (
    <div className="header pb-2 pt-2" id="mainHeder">
      <div>
        <p>Cześć, Xyz</p>
      </div>
      <div>
        <Link to="/users/editUser/"></Link>
        <img src={adminIcon} />
      </div>
    </div>
  );
};
