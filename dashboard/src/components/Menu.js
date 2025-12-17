import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import "./Menu.css";

const Menu = () => {
  const location = useLocation();
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [username, setUsername] = useState("User");

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const { data } = await axios.get(
          "https://zerodha-d3n3.onrender.com/user",
          {
            withCredentials: true,
          }
        );

        if (data?.status && data?.username) {
          setUsername(data.username);
        }
      } catch (err) {
        console.log(err);
      }
    };
    verifyUser();
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post(
        "https://zerodha-d3n3.onrender.com/logout",
        {},
        { withCredentials: true }
      );
      window.location.href = "http://localhost:3000";
    } catch (error) {
      console.log("Logout error", error);
    }
  };

  return (
    <div className="menu-container">
      {/* LEFT : LOGO */}
      <div className="logo">
        <img src="logo.png" alt="Logo" />
      </div>

      <div className="menus">
        <ul>
          <li>
            <Link to="/">
              <span className={isActive("/") ? "menu active" : "menu"}>
                Dashboard
              </span>
            </Link>
          </li>
          <li>
            <Link to="/orders">
              <span className={isActive("/orders") ? "menu active" : "menu"}>
                Orders
              </span>
            </Link>
          </li>
          <li>
            <Link to="/holdings">
              <span className={isActive("/holdings") ? "menu active" : "menu"}>
                Holdings
              </span>
            </Link>
          </li>
          <li>
            <Link to="/positions">
              <span className={isActive("/positions") ? "menu active" : "menu"}>
                Positions
              </span>
            </Link>
          </li>
          <li>
            <Link to="/funds">
              <span className={isActive("/funds") ? "menu active" : "menu"}>
                Funds
              </span>
            </Link>
          </li>
          <li>
            <Link to="/apps">
              <span className={isActive("/apps") ? "menu active" : "menu"}>
                Apps
              </span>
            </Link>
          </li>
        </ul>
      </div>

      <div
        className="profile"
        onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
      >
        <div className="avatar">{username?.[0]?.toUpperCase() || "U"}</div>
        <span className="username">{username}</span>

        {isProfileDropdownOpen && (
          <div className="profile-dropdown">
            <div className="logout-btn" onClick={handleLogout}>
              Logout
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
