import React from "react";
import "./home.css";
import AboutImg from "../../assets/cobra-shenmue-3-astroboy-interview-retro-avec-shib_7377.png";
import Info from "../info/Info";

const Home = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">Profil</h2>
      <span className="section__subtitle">Mon introduction</span>

      <div className="about__container container grid">
        <img src={AboutImg} alt="" className="about__img" />
        <div className="about__data">
          <Info />
          <p className="about__description">
            azdfi pfaezinezi nfzn eviv nnv infi onie cnic no iz nc eio noz
            ecnoizcnoi zcnozi cnzioc nzeoi cnze oicn zoiec nzo icnzo icnze oic
            nzeoi cnz oic nz eocno izcnoi neznoi dazd cazdaz dad adzd azdada azd
            az d azd ad a dazd adz azd ad
          </p>

          {/* <a href="" className="button button--flex"></a> */}
        </div>
      </div>
    </section>
  );
};

export default Home;
