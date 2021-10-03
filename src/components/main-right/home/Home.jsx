import React from "react";
import styles from "./Home.module.scss";
import img from "../../../img/marcosFoto2.jpg";
import { IconList } from "../../lists/IconList";

const Home = () => {
  return (
    <section className={styles.cardContainer}>
      <figure>
        <img
          src={img}
          alt="Foto de perfil de Marcos Herrera"
          className={styles.fotoDePerfil}
        />
      </figure>
      <article className={styles.descriptionContainer}>
        <h2 className={styles.cardTitle}>MARCOS HERRERA</h2>
        <p className={styles.cardDescription}>
          Creative Developer with a set of skills in Front-End technologies,
          mainly Javascript and React JS.
        </p>
        <IconList ulStyles={styles.socialMediaList} />
      </article>
    </section>
  );
};

export default Home;
