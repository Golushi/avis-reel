import React from "react";
import ArrowImage from "../../assets/arrow.png"; // Assure-toi d'avoir ce fichier
import BackgroundImage from "../../assets/footer_background3.png"; // Assure-toi d'avoir ce fichier

const Footer = () => {
  return (
    <footer
      className="relative flex flex-col items-center justify-center p-4"
      style={{ height: "100px" }}
    >
      <img
        src={ArrowImage}
        alt="Flèche"
        className="absolute top-[-20px] mb-2 cursor-pointer transition-transform duration-300 hover:translate-y-[-5px]"
        onClick={() => window.scrollTo(0, 0)}
      />

      <div
        className="flex flex-col items-center justify-center w-full h-[80px]" // Réduit la hauteur du background
        style={{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center bottom", // Positionne le background en bas
        }}
      >
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
