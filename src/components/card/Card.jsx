import React from "react";
import styles from "./Card.module.scss";
import img from "../../img/marcosFoto2.jpg";
import List from "../lists/List";

import SocialMediaIcon from "../icon/SocialMediaIcon";

const Card = () => {
  const socialMedia = [
    "linkedin",
    "github",
    "instagram",
    "twitter",
    "whatsapp",
  ].map((item, index) => <SocialMediaIcon key={index} name={item} />);

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
        <List list={socialMedia} styles={styles.socialMediaList} />
      </article>
    </section>
  );
};

export default Card;
