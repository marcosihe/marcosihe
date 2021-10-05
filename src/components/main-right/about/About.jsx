import React, { useState } from "react";
import img from "../../../img/marcosFoto2.jpg";
import ProfilePicture from "../../profile/ProfilePicture";
import styles from "./About.module.scss";
import CardBody from "../../card/CardBody";
import CardTitle from "../../card/CardTitle";
import Data from "../../profile/Data";
import Figure from "../../design-img/Figure";
import SkillsModal from "../../modal/SkillsModal";
import Button from "@mui/material/Button";

const About = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  /* INFO */
  const resumeText =
    "Hi, I'm Marcos and Front-End Developer, in continuous training. I'm passionate about technology and programming. I constantly train myself to improve my skills, in order to always be able to provide efficient solutions. I consider myself a creative person and I have a set of skills in different kind of programming languages such as Javascript, React JS, Node Js, Java, among others";
  const title = "MARCOS E. HERRERA";+
  const data = ["Address", "Phone", "E-mail", "Study"];
  const dataContent = [
    "Tucumán - Argentina",
    "+54 9 381 6703322",
    "marcosherrera.ib@gmail.com",
    "U.N.T.",
  ];

  return (
    <section className={styles.aboutContainer}>
      <section className={styles.photoAndDescriptionContainer}>
        {" "}
        {/** Foto de perfil y presentación */}
        <ProfilePicture img={img} />
        <CardBody>
          <CardTitle title={title} />
          <p className={styles.personalDescription}>{resumeText}</p>
        </CardBody>
      </section>
      <section className={styles.dataAndImgContainer}>
        <article className={styles.dataAndButtonContainer}>
          {/* Información Personal*/}
          <section className={styles.dataContainer}>
            <Data list={data} liStyles={styles.liData} />
            <Data list={dataContent} liStyles={styles.liDataContent} />
          </section>
          <Button
            className={styles.skillsButton}
            variant="contained"
            onClick={handleOpen}
          >
            SKILLS
          </Button>
          <SkillsModal open={open} handleClose={handleClose} />
        </article>
        <Figure imgTitle={"developer_activity"} widthStyle={styles.figure} />
      </section>
    </section>
  );
};

export default About;
