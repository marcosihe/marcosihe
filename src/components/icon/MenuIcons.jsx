import React from "react";
import styles from "./MenuIcons.module.scss";

const MenuIcons = (props) => {
  const { name } = props;
  return (
    <figure className={styles.iconContainer}>
      <img
        src={`${process.env.PUBLIC_URL}/img/menu-icons/${name}.svg`}
        alt={name}
        className={styles.icon}
      />
    </figure>
  );
};

export default MenuIcons;
