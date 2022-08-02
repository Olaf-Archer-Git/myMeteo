import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { checkIsAuth, logout } from "../../store/features/auth/authSlice";
import { toast } from "react-toastify";
import logo from "../../assets/logo.png";

import "./Header.scss";

const Header = () => {
  const isAuth = useSelector(checkIsAuth);
  const dispatch = useDispatch();
  const [active, setActive] = useState("header__menu");
  const [icon, setIcon] = useState("header__switcher");

  const headerActive = () => {
    active === "header__menu"
      ? setActive("header__menu header__active")
      : setActive("header__menu");
  };

  const headerIcon = () => {
    icon === "header__switcher"
      ? setIcon("header__switcher header__icon")
      : setIcon("header__switcher");
  };

  const isRegister = `header__link ${isAuth ? "" : "header__link-auth"}`;

  const logoutHandler = () => {
    dispatch(logout());
    window.localStorage.removeItem("token");
    toast("You log out  of the system");
  };

  return (
    <header className="header">
      <a className="header__logo" href="/">
        <img src={logo} />
      </a>
      <div className={active}>
        <NavLink className="header__link" to="/">
          home
        </NavLink>
        <NavLink className={isRegister} to="/next">
          tomorrow
        </NavLink>
        <NavLink className={isRegister} to="/week">
          week
        </NavLink>
        <NavLink className={isRegister} to="/map">
          map
        </NavLink>
        <div>
          {isAuth ? (
            <span className="header__btn" onClick={logoutHandler}>
              logOut
            </span>
          ) : (
            <Link className="header__btn" to="/login">
              logIn
            </Link>
          )}

          <NavLink className="header__btn" to="/signup">
            signUp
          </NavLink>
        </div>
      </div>
      <div
        onClick={() => {
          headerActive();
          headerIcon();
        }}
        className={icon}
      >
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </header>
  );
};

export default Header;
