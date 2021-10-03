import React from "react";
import styles from "./CardTitle.module.scss";

const CardTitle = (props) => {
  const { title } = props;
  return <h2 className={styles.cardTitle}>{title}</h2>;
};

export default CardTitle;
