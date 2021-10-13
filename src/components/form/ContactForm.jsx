import React, { useState } from "react";
import sendEmail from "../../helpers/mailer";
import { Card, CardContent, Typography, Grid, Alert } from "@mui/material";
import { TextField, Button } from "@mui/material";
import Close from "@mui/icons-material/Close";
import { red } from "@mui/material/colors";
import { Box } from "@mui/system";

const ContactForm = (props) => {
  const { handleClose } = props;
  const [deliveryStatus, setDeliveryStatus] = useState(false);
  const [error, setError] = useState(undefined);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await sendEmail(e);
    if (res.status === 200) {
      setDeliveryStatus(true);
      setError(false);
    } else {
      setError(true);
      setDeliveryStatus(false);
    }
  };

  return (
    <Card sx={{ maxWidth: 450, m: "0 auto", boxShadow: 0 }}>
      <form onSubmit={handleSubmit}>
        <CardContent>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography gutterBottom variant="h4">
              Contact me
            </Typography>
            <Close sx={{ color: red[500] }} onClick={handleClose} />
          </Box>
          <Typography
            gutterBottom
            variant="body2"
            color="textSecondary"
            component="p"
          >
            Fill up the form and I will get back to you as soon as possible
          </Typography>
          <Grid container spacing={1}>
            <Grid xs={12} sm={6} item>
              <TextField
                label="First Name"
                name="firstName"
                placeholder="Enter first name"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid xs={12} sm={6} item>
              <TextField
                label="Last Name"
                name="lastName"
                placeholder="Enter Last name"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid xs={12} item>
              <TextField
                type="email"
                label="E-mail"
                name="email"
                placeholder="Enter e-mail"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid xs={12} item>
              <TextField
                type="number"
                label="Phone number"
                name="phoneNumber"
                placeholder="Enter phone number"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid xs={12} item>
              <TextField
                type="Message"
                multiline
                rows={4}
                label="Message"
                name="message"
                placeholder="Type your message here"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid xs={12} item>
              <Button
                type="submit"
                variant="outlined"
                color="success"
                fullWidth
              >
                Submit
              </Button>
            </Grid>
            <Grid xs={12} item>
              {deliveryStatus && (
                <Alert severity="success">
                  Your email was sent successfully!
                </Alert>
              )}
              {error && (
                <Alert severity="error">
                  An error has occurred. Please try again later
                </Alert>
              )}
            </Grid>
          </Grid>
        </CardContent>
      </form>
    </Card>
  );
};

export default ContactForm;
