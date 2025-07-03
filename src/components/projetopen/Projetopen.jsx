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
        "Booki est un projet qui m'a permis d'explorer les fondements du développement web tout en travaillant sur un produit ayant une réelle utilité pour les utilisateur-ices. Ce projet m'a permis de renforcer mes compétences en HTML, CSS et JavaScript, tout en découvrant l'importance de l'accessibilité et du web sémantique.",
      videoDesktop: BookiDesk,
      githubLink: "https://github.com/ParzivalFI/p3",
    },
    {
      id: 1,
      title: "OhMyFood - Site en mobile first",
      description:
        "OhMyFood est un projet qui m'a permis de me plonger dans le concept du mobile first, en créant un site responsive destiné aux amateur-ices de gastronomie. J'ai été ravie de relever le défi de concevoir un site qui s'adapte parfaitement aux appareils mobiles, tout en conservant une esthétique attrayante.",
      videoDesktop: OMFDesk,
      githubLink: "https://github.com/ParzivalFI/P4",
      layout: "right",
    },
    {
      id: 2,
      title: "Kasa - Locations Immobilières",
      description:
        "Kasa est un projet axé sur la location immobilière, conçu pour répondre aux besoins des voyageur-euses modernes à la recherche d'un hébergement de qualité. J'ai particulièrement apprécié l'approche centrée sur l'utilisateur-ice, où chaque élément de l'interface visait à faciliter la recherche de propriétés. Créer une expérience fluide et agréable a été un véritable défi, mais aussi une source de motivation.",
      videoDesktop: KasaDesk,
      githubLink: "https://github.com/ParzivalFI/Projet8",
    },
  ];

  return (
    <div className="projects">
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
