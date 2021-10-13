import React from "react";
import Alert from "@mui/material/Alert";
import PropTypes from "prop-types";

const Alert = (props) => {
  const { severity } = props;
  return <Alert severity={severity}>{props.children}</Alert>;
};

Alert.propTypes = {
  severity: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default Alert;
