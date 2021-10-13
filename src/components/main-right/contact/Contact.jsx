import React, { useState } from "react";

import Button from "@mui/material/Button";
import FormModal from "../../modal/FormModal";

const Contact = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <section>
      <Button onClick={handleOpen} color="success" size="large" >Contact me</Button>
      <FormModal open={open} handleClose={handleClose} />
    </section>
  );
};

export default Contact;
