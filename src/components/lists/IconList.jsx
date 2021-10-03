import React from "react";
import styles from "./IconList.module.scss";
import SocialMediaIcon from "../icon/SocialMediaIcon";

export const IconList = (props) => {
  const { ulStyles } = props;
  return (
    <ul className={ulStyles}>
      <li className={styles.iconListLi}>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/marcoseherrera/"
          className={styles.iconListAnchor}
        >
          <SocialMediaIcon name={"linkedin"} />
        </a>
      </li>
      <li className={styles.iconListLi}>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://github.com/marcosihe"
          className={styles.iconListAnchor}
        >
          <SocialMediaIcon name={"github"} />
        </a>
      </li>
      <li className={styles.iconListLi}>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://wa.link/q3b6z8"
          className={styles.iconListAnchor}
        >
          <SocialMediaIcon name={"whatsapp"} />
        </a>
      </li>
    </ul>
  );
};
