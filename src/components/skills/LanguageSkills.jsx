import React from "react";
import ProgressBar from "../progress/ProgressBar";
import styles from "./LanguageSkills.module.scss";

const LanguageSkills = () => {
  return (
    <section class={styles.skillsContainer}>
      <h2>English Skills</h2>
      <ProgressBar title="Grammar" prog={70} />
      <ProgressBar title="Vocabulary" prog={70} />
      <ProgressBar title="Reading" prog={85} />
      <ProgressBar title="Listening" prog={80} />
      <ProgressBar title="Speaking" prog={60} />
    </section>
  );
};

export default LanguageSkills;
