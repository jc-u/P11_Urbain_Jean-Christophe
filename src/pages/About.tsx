import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Accordion from "../components/Accordion";

const About = () => {
  return (
    <div>
      <Header />
      <div className="about__container">
        <div className="about__banner"></div>
      </div>
      <div className="about__info">
        <Accordion
          header="Fiabilité"
          content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes." defaultClosed={true}        />
        <Accordion
          header="Respect"
          content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." defaultClosed={true}        />
        <Accordion
          header="Service"
          content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question." defaultClosed={true}        />
        <Accordion
          header="Sécurité"
          content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." defaultClosed={true}        />
      </div>
      <Footer />
    </div>
  )
}

export default About