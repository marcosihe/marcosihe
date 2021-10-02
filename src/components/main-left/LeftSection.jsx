import React from "react";
import Copy from "../copyright/Copy";
import List from "../lists/List";
import styles from "./LeftSection.module.scss";

const LeftSection = () => {
  const menu = ["Home", "About", "Portfolio", "Education", "Contact"];
  return (
    <section className={styles.leftSectionContainer}>
      <article className={styles.leftArticleContainer}>
        <h2 className={styles.leftSectionTitle}>WELCOME</h2>
          <List
            list={menu}
            ulStyles={styles.leftSectionList}
            route={`/marcosihe/`}
          />
        <Copy
          name={`marcosihe`}
          fecha={"2021"}
          styles={styles.leftSectionCopyStyles}
        />
      </article>
    </section>
  );
};

export default LeftSection;
