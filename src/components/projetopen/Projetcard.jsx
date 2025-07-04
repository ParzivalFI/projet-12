import React from "react";

const Projetcard = ({ project }) => {
  const { title, description, objectif, travaux, githubLink, videoDesktop } =
    project;

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
          <div className="project_objectif">
            <strong>🎯 Objectif</strong>
            <p>{objectif}</p>
          </div>
          <div className="project_travaux">
            <strong>🛠️ Travail réalisé</strong>
            <ul>
              {travaux.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="project_github_container">
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project_github"
            >
              🔗 Voir sur GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projetcard;
