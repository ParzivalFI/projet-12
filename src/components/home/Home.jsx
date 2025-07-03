import React from "react";
import "./home.css";
import AboutImg from "../../assets/profil.png";
import Info from "../info/Info";

const Home = () => {
  return (
    <section className="about section" id="profil">
      <h2 className="section__title">Profil</h2>
      <span className="section__subtitle">Mon introduction</span>

      <div className="about__container container grid">
        <img src={AboutImg} alt="" className="about__img" />
        <div className="about__data">
          <Info />
          <p className="about__description">
            Je suis passionné d'informatique depuis mon enfance. Je faisais déjà
            du code quand j'étais petit sur Garrysmod. Cette passion ne s'est
            jamais arrêtée, même pendant mon CAP et mon bac en Électrotechnique
            j'ai toujours voulu faire de l'informatique. Après ça, je me suis
            dit qu'il fallait que je me reconverti et c'est là que j'ai refait
            un bac en DevOps, pendant mon bac DevOps, j'ai vu la lumière, et
            c'est là que j'ai compris. Je veux devenir Intégrateur web.
          </p>

          {/* <a href="" className="button button--flex"></a> */}
        </div>
      </div>
    </section>
  );
};

export default Home;
