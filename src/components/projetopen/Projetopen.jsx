import React from "react";
import Projetcard from "./Projetcard";
import "./projetopen.css";

const Projetopen = () => {
  return (
    <section className="projet section" id="portfolio">
      <h2 className="section__title">portfolio</h2>
      <span className="section__subtitle">mes projets</span>
      <Projetcard />
    </section>
  );
};

export default Projetopen;
