import React, { useContext, useEffect, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();
  // for scrolling effect
  const [navbar, setNavbar] = useState(false);
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showBtn = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showBtn();
  }, []);

  const changeBg = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBg);
  window.addEventListener("resize", showBtn);

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };
  return (
    <div className={navbar ? " navbar navbar-bg" : " navbar"}>
      <div className="navbar-content">
      <Link to="/">
        <h2>INSIGHT</h2>
        {/* <img src={assets.insight_logo} alt="" className="logo" /> */}
      </Link>
      <ul className={click ? "navbar-menu active" : "navbar-menu"}>
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </Link>
        <Link
          to={"/about"}
          onClick={() => setMenu("about")}
          className={menu === "about" ? "active" : ""}
        >
          About
        </Link>
        <Link to={"/product"} onClick={() => setMenu("product")}
          className={menu === "product" ? "active" : ""}>
            Products
        </Link>
        <a
          href="#app-download"
          onClick={() => setMenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          Mobile-App
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact")}
          className={menu === "contact" ? "active" : ""}
        >
          Contact-Us
        </a>
      </ul>
      <div className="navbar-right">
        <img className="navbar-search" src={assets.search_icon} />
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        {!token ? (
          <button onClick={() => setShowLogin(true)}>Sign In</button>
        ) : (
          <div className="navbar-profile">
            <img src={assets.profile_icon} alt="" />
            <ul className="navbar-profile-dropdown">
              <li onClick={() => navigate("/myorders")}>
                <img src={assets.bag_icon} alt="" />
                <p>Orders</p>
              </li>
              <hr />
              <li onClick={logout}>
                <img src={assets.logout_icon} alt="" />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
      </div>
    </div>
  );
};

export default Navbar;
