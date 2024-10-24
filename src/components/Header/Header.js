import React, { useState } from "react";
import logo from "../../assets/logo512.png";
import bgImage1 from "../../assets/img_bgHeader1.png";
import bgImage2 from "../../assets/img_bgHeader2.png";
import bgImage3 from "../../assets/img_bgHeader3.png";
import bgImage4 from "../../assets/img_bgHeader4.png";
import bgImage5 from "../../assets/img_bgHeader5.png";
import bgImage6 from "../../assets/img_bgHeader6.png";
import bgImage7 from "../../assets/img_bgHeader7.png";
import menuIcon from "../../assets/menuIcon.png"; // Remplace par ton icône de point en jpg

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getBackgroundImage = () => {
    const width = window.innerWidth;

    if (width < 416) return bgImage6;
    if (width < 584) return bgImage7;
    if (width < 670) return bgImage5;
    if (width < 928) return bgImage1;
    if (width < 1162) return bgImage2;
    if (width < 1552) return bgImage3;
    return bgImage4;
  };

  return (
    <header className="relative w-full h-64">
      <div
        className="absolute top-0 left-0 w-full h-1/2 bg-cover bg-center"
        style={{
          backgroundImage: `url(${getBackgroundImage()})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      <div className="container mx-auto h-full px-4 flex justify-between relative">
        <div className="flex-shrink-0">
          <img src={logo} alt="Logo" className="h-48 w-auto object-contain" />
        </div>

        <div className="flex flex-col justify-start items-start ml-2 flex-grow">
          <h1 className="text-right font-lobster flex flex-col sm:flex-row sm:items-center">
            <span className="text-vert text-sm sm:text-xl md:text-xl lg:text-xl font-bold mr-1">
              1er Site de France avec des
            </span>
            <span className="text-white text-sm sm:text-xl md:text-xl lg:text-xl font-bold">
              Avis Garantis 100% Réels
            </span>
          </h1>

          {/* Menu */}
          <nav
            className={`mt-4 ${
              isMenuOpen ? "block" : "hidden"
            } md:flex md:items-center md:justify-between md:w-full`}
            style={{ zIndex: 50 }} // Ajout du z-index ici
          >
            <ul
              className={`flex-col space-y-2 bg-[#00ABC7] p-4 md:flex md:flex-row md:space-y-0 md:space-x-4`}
            >
              {[
                { name: "Accueil", link: "/" },
                { name: "Qui Sommes-Nous", link: "/qui-sommes-nous" },
                { name: "Contact", link: "/contact" },
                { name: "Inscrire Mon Etablissement", link: "/inscrire" },
              ].map((item, index) => (
                <li key={index} className="flex items-center md:inline-block">
                  <img
                    src={menuIcon}
                    alt="Icon"
                    className="w-4 h-4 mr-2 hidden md:inline-block"
                  />
                  <a
                    href={item.link}
                    className="text-white hover:text-vert px-2 py-1 rounded transition-colors duration-300"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bouton burger */}
        <div className="absolute top-0 right-0 mt-10 mr-4 z-50">
          {" "}
          {/* Assurez-vous que le z-index est ici */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white px-4 py-2 rounded"
          >
            <span className="block relative">
              {isMenuOpen ? (
                <span className="absolute right-0 top-0 text-3xl text-white">
                  ✕
                </span>
              ) : (
                <div className="flex flex-col justify-between h-6">
                  <span className="block w-8 h-1 bg-white"></span>
                  <span className="block w-8 h-1 bg-white"></span>
                  <span className="block w-8 h-1 bg-white"></span>
                </div>
              )}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
