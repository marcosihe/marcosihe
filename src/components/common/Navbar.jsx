import React from "react";
import { Link } from "react-router-dom";
import MenuIcons from "../icon/MenuIcons";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const menu = ["home", "about", "portfolio", "education", "contact"];
  const route = "/marcosihe/";
  return (
    <nav className={styles.navbarContainer}>
      <h2 className={styles.navbarLogo}>MH</h2>
      <ul className={styles.ulContainer}>
        {menu.map((item, index) => (
          <li key={index} className={styles.liStyles}>
            <Link to={`${route}${item === 'home' ? '' : item}`}>
              <MenuIcons name={item} />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
