import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./home/Home";
import About from "./about/About";
import styles from "./RightSection.module.scss";

const RightSection = () => {
  return (
    <section className={styles.rightSectionContainer}>
      <Switch>
        <Route exact path="/marcosihe/">
          <Home />
        </Route>
        <Route exact path="/marcosihe/about">
          <About />
        </Route>
        <Route exact path="/marcosihe/education"></Route>
        <Route exact path="/marcosihe/portfolio"></Route>
        <Route exact path="/marcosihe/contact"></Route>
        <Route exact path="/marcosihe/*"></Route>
      </Switch>
    </section>
  );
};

export default RightSection;
