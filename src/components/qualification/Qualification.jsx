import React from "react";
import "./qualification.css";

const Qualification = () => {
  return (
    <section lassName="qualification section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">expérience</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className="qualification__button qualification__active button--flex">
            <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
            Education
          </div>
        </div>

        <div className="qualification__sections">
          <div className="qualification__content qualification__content-active">
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title"></h3>
                <span className="qualification__subtitle">openclaasroom</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2024 - present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title"></h3>
                <span className="qualification__subtitle">simplon swift</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2024 - present
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title"></h3>
                <span className="qualification__subtitle">devops 2</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2024 - present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title"></h3>
                <span className="qualification__subtitle">devops</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2024 - present
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
