import React from "react";
import styles from "./SocialMediaIcon.module.scss";

const SocialMediaIcon = (props) => {
  const { name } = props;
  return (
    <figure className={styles.iconContainer}>
      <img
        src={`${process.env.PUBLIC_URL}/img/sm-icons/${name}.svg`}
        alt={`${name} Logo`}
      />
    </figure>
  );
};

export default SocialMediaIcon;
