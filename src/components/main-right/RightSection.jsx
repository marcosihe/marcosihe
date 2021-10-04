import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./home/Home";
import About from "./about/About";
import styles from "./RightSection.module.scss";
import Contact from "./contact/Contact";
import Education from "./education/Education";
import Portfolio from "./portfolio/Portfolio";
import ErrorPage from "../error/ErrorPage";

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
        <Route exact path="/marcosihe/education">
          <Education />
        </Route>
        <Route exact path="/marcosihe/portfolio">
          <Portfolio />
        </Route>
        <Route exact path="/marcosihe/contact">
          <Contact />
        </Route>
        <Route exact path="/marcosihe/*">
          <ErrorPage name="page_not_found" content="Page Not Found" />
        </Route>
      </Switch>
    </section>
  );
};

export default RightSection;
