import React from "react";
import styles from './ErrorPage.module.scss'

const ErrorPage = (props) => {
    const { name, content } = props
  return (
    <section className={styles.container}>
      <figure>
        <img
          src={`${process.env.PUBLIC_URL}/img/error/${name}.svg`}
          alt="Error message image"
          className={styles.image}
        />
      </figure>
      <h2 className={styles.messageTitle}>{content}</h2>
    </section>
  );
};

export default ErrorPage;
