import React from "react";
import ArrowImage from "../../assets/arrow.png"; // Assure-toi d'avoir ce fichier
import BackgroundImage from "../../assets/footer_background7.png"; // Assure-toi d'avoir ce fichier

const Footer = () => {
  return (
    <footer
      className="relative flex flex-col items-center justify-center w-full"
      style={{
        minHeight: "50px", // Ajuste la hauteur minimale pour couvrir correctement
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <img
        src={ArrowImage}
        alt="Flèche"
        className="absolute top-[-35px] cursor-pointer transition-transform duration-300 hover:translate-y-[-5px]"
        onClick={() => window.scrollTo(0, 0)}
      />
      <div className="flex flex-col items-center justify-center w-full h-full p-4">
        <div className="flex gap-4 mb-2">
          <a
            href="#accueil"
            className="text-white font-bold hover:text-vert transition-colors duration-300"
          >
            Accueil
          </a>

          <a
            href="#plan-du-site"
            className="text-white font-bold hover:text-vert transition-colors duration-300"
          >
            Plan du Site
          </a>
        </div>
        <p className="text-white text-center">
          Avis Réel - ©AvisReel.fr - Maj : 24/10/2024
        </p>
      </div>
    </footer>
  );
};

export default Footer;
