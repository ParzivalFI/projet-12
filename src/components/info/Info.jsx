import React from "react";

const info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class="bx bx-award about__icon"></i>

        <h3 className="about__title">experience</h3>
        <span className="about__subtitle">1 ans</span>
      </div>

      <div className="about__box">
        <i class="bx bx-briefcase-alt about__icon"></i>

        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">12 Projects</span>
      </div>
    </div>
  );
};

export default info;
