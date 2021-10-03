import React from "react";
import img from "../../../img/marcosFoto.jpg";
import ProfilePicture from "../../profile/ProfilePicture";
import styles from "./About.module.scss";
import CardBody from "../../card/CardBody";
import CardTitle from "../../card/CardTitle";

const About = () => {
  const resumeText =
    "Creative Developer with a set of skills in Front-End technologies, mainly Javascript and React JS.";
  const title = "MARCOS HERRERA";

  return (
    <section className={styles.aboutContainer}>
      <section className={styles.photoAndDescriptionContainer}> {/** Foto de perfil y presentación */}
        <article>
          <ProfilePicture img={img} />
        </article>
        <article className={styles.cardContainer}>
          <CardBody>
            <CardTitle title={title} />
            <p className={styles.cardDescription}>{resumeText}</p>
          </CardBody>
        </article>
      </section>
      <section>
        <article>{/* Información Persnal*/}
          <section>info personal</section>
          <button>Skills</button>
        </article>
        <article>imagen svg</article>
      </section>
    </section>
  );
};

export default About;
