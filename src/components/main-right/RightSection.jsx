import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./home/Home";
import About from './about/About'
import styles from "./RightSection.module.scss";

const RightSection = () => {
  return (
    <section className={styles.rightSectionContainer}>
      <Switch>
        <Route exact path="/marcosihe/">
          <Home />
        </Route>
        <Route exact path="/marcosihe/About"><About /></Route>
        <Route exact path="/marcosihe/Education"></Route>
        <Route exact path="/marcosihe/Portfolio"></Route>
        <Route exact path="/marcosihe/Contact"></Route>
        <Route exact path="/marcosihe/*"></Route>
      </Switch>
    </section>
  );
};

export default RightSection;
