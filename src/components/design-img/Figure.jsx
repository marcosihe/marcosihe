import React from "react";

const Figure = (props) => {
  const { imgTitle, widthStyle } = props;
  return (
    <figure>
      <img
        src={`${process.env.PUBLIC_URL}/img/design-img/${imgTitle}.svg`}
        alt={`${imgTitle}`}
        className={widthStyle}
      />
    </figure>
  );
};

export default Figure;
