import React from "react";
import List from "@mui/material/List";
import ItemList from "../lists/ItemList";
import styles from './OtherTechnologies.module.scss'

const OtherTechnologies = () => {
    const tech = ['sass', 'material-ui', 'bootstrap', 'figma', 'git', 'github', 'trello', 'mongodb', 'express', 'mysql', 'php', 'c-sharp', 'python', 'firebase', 'redux']
  return (
    <List className={styles.listContainer}>
      {tech.map( (item, index) => <ItemList key={index} name={item} />)}
    </List>
  );
};

export default OtherTechnologies;
