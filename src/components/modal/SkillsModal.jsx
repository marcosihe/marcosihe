import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ProgrammingSkills from "../skills/ProgrammingSkills";
import LanguageSkills from "../skills/LanguageSkills";
import OtherTechnologies from "../skills/OtherTechnologies";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 800,
  maxHeight: "80vh",
  overflow: "scroll",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  fontFamily: "roboto",
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
        <Box sx={{display: 'flex'}}>
          <ProgrammingSkills />
          <LanguageSkills />
        </Box>
        <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
          <Typography sx={{mt: 2, ml: 2}}>Other technologies</Typography>
          <OtherTechnologies />
        </Box>
      </Box>
    </Modal>
  );
};

export default SkillsModal;
