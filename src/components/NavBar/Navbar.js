import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav>
      <ul className={styles.list}>
        <li>
          <NavLink
            to="/"
            exact
            className={styles.link}
            activeClassName={styles.active}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/shop"
            className={styles.link}
            activeClassName={styles.active}
          >
            Stores
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
