import React from "react";

const Projetcard = ({ project }) => {
  const { title, description, githubLink, videoDesktop } = project;

  return (
    <section className="slide">
      <div className="project_card">
        <div className="project_image_container">
          <video
            className="project_video"
            src={videoDesktop}
            autoPlay
            loop
            muted
            playsInline
          />
        </div>

        <div className="project_text">
          <h3 className="project_title">{title}</h3>
          <p className="project_description">{description}</p>
        </div>

        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="project_github"
        >
          Voir sur GitHub
        </a>
      </div>
    </section>
  );
};

export default Projetcard;
