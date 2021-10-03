import React from "react";
import styles from "./ProfilePicture.module.scss";

const ProfilePicture = (props) => {
  const { img } = props;
  return (
    <figure className={styles.figure}>
      <img
        src={img}
        alt="Foto de perfil de Marcos Herrera"
        className={styles.profilePicture}
      />
    </figure>
  );
};

export default ProfilePicture;
