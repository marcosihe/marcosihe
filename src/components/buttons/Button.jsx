import React from "react";

const Button = (props) => {
  const { buttonTitle, btnStyles } = props;
  return <button className={btnStyles}>{buttonTitle}</button>;
};

export default Button;
