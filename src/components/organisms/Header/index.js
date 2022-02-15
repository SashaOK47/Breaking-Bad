import React from "react";
import style from "./styles.module.scss";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import burger from "../../../assets/icons/burger.svg";

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <nav className={style.navigation}>
          <NavLink to="/" className={style.logo}>
            <img src={logo} alt="Logo" />
          </NavLink>
          <NavLink
            end
            to="/characters"
            className={({ isActive }) => `${isActive ? style.active : ""}`}
          >
            <span className={style.catalog}>
              <img src={burger} alt="Burger" />
              <span>Каталог</span>
            </span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
};
export default Header;
