import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section className="home section" id="home">
      <h2 className="section__title">Contact</h2>
      <span className="section__subtitle">Contact moi</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>
          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>
              <h3 className="contact__card-title">email</h3>
              <span className="contact__card-data">user@gmail.com</span>
              <a
                href="mail:ewemplemail@gmail.com.com"
                className="contact__button"
              >
                write me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="contact__content">
          <h3 className="contact__title">écris-moi</h3>

          <form className="contact__form">
            <div className="contact__form-div">
              <label className="contact__form-tag">Name</label>
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="insert ton nom"
              ></input>
            </div>
            <div className="contact__form-div">
              <label className="contact__form-tag">mail</label>
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="insert ton email"
              ></input>
            </div>
            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">Projet</label>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="parle-moi de ton projet"
              ></textarea>
            </div>
            <button type="submit">Envoyer</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
