import React, { useState } from "react";
import "./styles/dashboard.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useUser } from "./UserContext"; 
const Menu = () => {
  const { loggedInUsername } = useUser();

  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const navigate = useNavigate();

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const handleLogout = async () => {
    try {
      await axios.get(`${import.meta.env.VITE_API_BASE_URL}/auth/logout`,{withCredentials:true});
      navigate("/login");
      alert("Logged out.");
    } catch (error) {
      alert("Logout failed.");
    }
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="/public/media/images/flag.svg" style={{ width: "40px" }} alt="flag" />
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/dashboard"
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/dashboard/orders"
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/dashboard/holdings"
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/dashboard/positions"
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/dashboard/funds"
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/dashboard/apps"
              onClick={() => handleMenuClick(6)}
            >
              <p className={selectedMenu === 6 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
  <div className="avatar">{loggedInUsername.slice(0, 1).toUpperCase()}</div>
  <p className="username" style={{ marginTop: "12px" }}>{loggedInUsername}</p>

  {/* Dropdown menu shown only if open */}
  {isProfileDropdownOpen && (
    <div className="profile-dropdown" style={{backgroundColor:"#f8f9fa",width:"160px",border:"1px solid #ced4da"}}>
      <ul>
       <div className="droppedprofile" style={{borderBottom:"1px solid lightgrey",marginRight:"14px",paddingBottom:"10px"}}> <Link to="/dashboard/orders">My Orders</Link></div>
       <div className="droppedprofile" style={{borderBottom:"1px solid lightgrey",marginRight:"14px",paddingBottom:"10px"}}>
        <Link to="/dashboard/holdings">My Holdings</Link></div>
        <div className="droppedprofile" style={{marginRight:"14px",paddingBottom:"10px"}}> <Link to="/logout" onClick={handleLogout}>Logout</Link>
        </div>
      </ul>
    </div>
  )}
</div>
      </div>
    </div>
  );
};

export default Menu;
