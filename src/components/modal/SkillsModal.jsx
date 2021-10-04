import React from "react";
import Box from "@mui/material/Box";
//import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ProgrammingSkills from "../skills/ProgrammingSkills";
import styles from "./SkillsModal.module.scss";
import LanguageSkills from "../skills/LanguageSkills";
import OtherTechnologies from "../skills/OtherTechnologies";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 800,
  minHeight: 400,
  overflow:'scroll',
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const SkillsModal = ({ open, handleClose }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="skills"
      aria-describedby="programming-languages-skills"
    >
      <Box sx={style}>
        <section className={styles.skillsContainer}>
          <ProgrammingSkills />
          <LanguageSkills />
        </section>
        <section>
          <h2>Other Technologies</h2>
          <OtherTechnologies />
        </section>
      </Box>
    </Modal>
  );
};

export default SkillsModal;
