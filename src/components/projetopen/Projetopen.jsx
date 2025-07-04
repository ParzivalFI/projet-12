import React from "react";
import Projetcard from "./Projetcard";
import "./projetopen.css";
import Slider from "react-slick";

// Vidéos de démonstration
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
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const projects = [
    {
      id: 0,
      title: "Booki - Agence de Voyage",
      description:
        "Booki est un projet qui m'a permis d'explorer les fondements du développement web tout en travaillant sur un produit ayant une réelle utilité pour les utilisateurs.",
      objectif:
        "Transformer une maquette Figma en un site responsive avec HTML/CSS, en respectant les standards d'accessibilité.",
      travaux: [
        "Intégration HTML/CSS conforme à la maquette",
        "Utilisation du HTML sémantique pour l'accessibilité",
        "Responsive design (media queries)",
        "Compatibilité sur les principaux navigateurs",
      ],
      videoDesktop: BookiDesk,
      githubLink: "https://github.com/ParzivalFI/p3",
    },
    {
      id: 1,
      title: "OhMyFood - Site en mobile first",
      description:
        "OhMyFood est un projet qui m'a permis de me plonger dans le concept mobile first en créant un site web responsive pour les gourmands.",
      objectif:
        "Amélioration de l'interface d'un site mobile avec des animations CSS",
      travaux: [
        "Approche mobile-first",
        "Animations CSS modernes (loader, like, etc.)",
        "Organisation SASS (variables, mixins, etc.)",
        "Respect des bonnes pratiques front-end",
      ],
      videoDesktop: OMFDesk,
      githubLink: "https://github.com/ParzivalFI/P4",
    },
    {
      id: 2,
      title: "Kasa - Locations Immobilières",
      description:
        "Kasa est un projet axé sur la location immobilière, conçu pour répondre aux besoins des voyageurs modernes en quête d'un hébergement de qualité.",
      objectif: "Structurer un projet front-end complet avec React.",
      travaux: [
        "Création de composants réutilisables",
        "Mise en place du routage",
        "Affichage de données depuis JSON",
        "Ajout d’animations CSS pour améliorer l’expérience utilisateur",
      ],
      videoDesktop: KasaDesk,
      githubLink: "https://github.com/ParzivalFI/Projet8",
    },
  ];

  return (
    <div className="projects section" id="projet">
      <h2 className="section__title">Projets</h2>
      <span className="section__subtitle">
        Expériences professionnelles & personnelles
      </span>

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
