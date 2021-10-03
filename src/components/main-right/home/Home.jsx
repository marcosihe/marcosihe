import React from "react";
import styles from "./Home.module.scss";
import img from "../../../img/marcosFoto2.jpg";
import { IconList } from "../../lists/IconList";
import ProfilePicture from "../../profile/ProfilePicture";
import CardBody from "../../card/CardBody";
import CardTitle from "../../card/CardTitle";

const Home = () => {
  const resumeText =
    "Creative Developer with a set of skills in Front-End technologies, mainly Javascript and React JS.";
  const title = "MARCOS HERRERA";
  
  return (
    <section className={styles.homeContainer}>
      <ProfilePicture img={img} />
      <CardBody>
        <CardTitle title={title} />
        <p className={styles.cardDescription}>{resumeText}</p>
        <IconList ulStyles={styles.socialMediaList} />
      </CardBody>
    </section>
  );
};

export default Home;
