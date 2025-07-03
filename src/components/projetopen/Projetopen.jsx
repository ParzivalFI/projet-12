import React from "react";
import Projetcard from "./Projetcard";
import "./projetopen.css";
import Slider from "react-slick";
// import bookiImg from "../../assets/Booki.webp";
// import ohmyfoodImg from "../../assets/OMFDesk.webp";
// import kasaImg from "../../assets/KazaDesk.webp";
// import sophiebluelImg from "../../assets/SophieBlue.webp";
import BookiDesk from "../../assets/videos/BookiDesk.mp4";
import KasaDesk from "../../assets/videos/KasaDesk.mp4";
import OMFDesk from "../../assets/videos/OMFDesk.mp4";

const Projetopen = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Pour les écrans plus petits
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  //tableau des projets
  const projects = [
    {
      id: 0,
      title: "Booki - Agence de Voyage",
      description:
        "Booki est un projet qui m'a permis d'explorer les fondements du développement web tout en travaillant sur un produit ayant une réelle utilité pour les utilisateurs. Ce projet m'a permis de renforcer mes compétences en HTML, CSS, tout en découvrant l'importance de l'accessibilité. Grâce à ce projet, j'ai pu transformer une maquette en site web accessible et adaptable à tous les écrans. Une structuration du contenu avec HTML sémantique et une mise en page responsive en CSS, une fidélité au design Figma fournie. Respect de l’accessibilité et compatibilité multi-appareils",
      videoDesktop: BookiDesk,
      githubLink: "https://github.com/ParzivalFI/p3",
    },
    {
      id: 1,
      title: "OhMyFood - Site en mobile first",
      description:
        "OhMyFood est un projet qui m'a permis de me plonger dans le concept mobile first en créant un site web responsive pour les gourmands. Ce projet utilise HTML, SASS et des animations CSS modernes. Il m'a permis de mettre en place un système de navigation entre les pages et d'ajouter des animations CSS fluides pour améliorer l'expérience utilisateur. J'ai également structuré mon code HTML5 et organisé mon CSS avec SASS, et une validation HTML/CSS via les outils W3C.",
      videoDesktop: OMFDesk,
      githubLink: "https://github.com/ParzivalFI/P4",
      layout: "right",
    },
    {
      id: 2,
      title: "Kasa - Locations Immobilières",
      description:
        "Kasa est un projet axé sur la location immobilière, conçu pour répondre aux besoins des voyageurs modernes en quête d'un hébergement de qualité. Dans ce projet, j'ai dû structurer un projet front-end complet en React. J'ai également pu apprendre à créer des composants réutilisables. J'ai également ajouté des animations CSS pour améliorer l'expérience utilisateur et configurer le routage et les appels d'API.",
      videoDesktop: KasaDesk,
      githubLink: "https://github.com/ParzivalFI/Projet8",
    },
  ];

  return (
    <div className="projects" id="projet">
      <h2 className="section__title">Projet</h2>
      <span className="section__subtitle">expérience</span>
      <Slider {...settings}>
        {projects.map((project) => (
          <div key={project.id}>
            <Projetcard project={project} />
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default Projetopen;
// {
//   return (
//     <section className="projet section" id="portfolio">
//       <h2 className="section__title">portfolio</h2>
//       <span className="section__subtitle">mes projets</span>
//       <Projetcard />
//     </section>
//   );
// };
