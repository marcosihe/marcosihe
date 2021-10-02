import React from "react";
import { Link } from "react-router-dom";
import styles from "./List.module.scss";

const List = (props) => {
  //Se espera recibir, mediante props, un array con elementos 
  //a listar y además los estilos para esta lista
  const { list, ulStyles, route } = props;

  return (
    <ul className={ulStyles}>
      {list.map((item, index) => (
        <li key={index} className={styles.genericLi}>
          <Link to={`${route}${item === 'Home' ? '' : item}`} className={styles.genericLink}>
            {item}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default List;
