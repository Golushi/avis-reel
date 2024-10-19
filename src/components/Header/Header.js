import React, { useState } from "react";
import logo from "../../assets/logo512.png";
import bgImage1 from "../../assets/img_bgHeader1.png";
import bgImage2 from "../../assets/img_bgHeader2.png";
import bgImage3 from "../../assets/img_bgHeader3.png";
import bgImage4 from "../../assets/img_bgHeader4.png";
import bgImage5 from "../../assets/img_bgHeader5.png";
import bgImage6 from "../../assets/img_bgHeader6.png";
import bgImage7 from "../../assets/img_bgHeader7.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fonction pour choisir l'image de fond en fonction de la largeur de l'écran
  const getBackgroundImage = () => {
    const width = window.innerWidth;

    if (width < 416) return bgImage6; // Pour < 416px
    if (width < 584) return bgImage7; // Pour < 584px
    if (width < 670) return bgImage5; // Pour < 670px
    if (width < 928) return bgImage1; // Pour < 928px
    if (width < 1162) return bgImage2; // Pour < 1162px
    if (width < 1552) return bgImage3; // Pour < 1552px
    return bgImage4; // Pour >= 1552px
  };

  return (
    <header className="relative w-full h-64">
      {/* Image de fond qui couvre la moitié supérieure sans déborder */}
      <div
        className="absolute top-0 left-0 w-full h-1/2 bg-cover bg-center"
        style={{
          backgroundImage: `url(${getBackgroundImage()})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      <div className="container mx-auto h-full px-4 flex justify-between relative">
        {/* Colonne 1 : Logo */}
        <div className="flex-shrink-0">
          <img src={logo} alt="Logo" className="h-48 w-auto object-contain" />
        </div>

        {/* Colonne 2 : Texte et menu */}
        <div className="flex flex-col justify-start items-start ml-2 flex-grow">
          <h1 className="text-right font-lobster flex flex-col sm:flex-row sm:items-center">
            <span className="text-vert text-sm sm:text-xl md:text-xl lg:text-xl font-bold mr-1">
              1er Site de France avec des
            </span>
            <span className="text-white text-sm sm:text-xl md:text-xl lg:text-xl font-bold">
              Avis Garantis 100% Réels
            </span>
          </h1>

          {/* Menu sous le texte, avec un peu plus de marge en haut */}
          <nav className={`mt-4 ${isMenuOpen ? "block" : "hidden"} md:block`}>
            <ul
              className={`flex-col space-y-2 bg-[#00ABC7] p-4 ${
                isMenuOpen ? "flex" : "hidden"
              } md:flex`}
            >
              <li>
                <a href="/" className="text-white hover:text-vert">
                  Accueil
                </a>
              </li>
              <li>
                <a
                  href="/qui-sommes-nous"
                  className="text-white hover:text-vert"
                >
                  Qui Sommes-Nous
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white hover:text-vert">
                  Contact
                </a>
              </li>
              <li>
                <a href="/inscrire" className="text-white hover:text-vert">
                  Inscrire Mon Etablissement
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Colonne 3 : Bouton burger */}
        <div className="absolute top-0 right-0 mt-10 mr-4">
          {/* Bouton burger pour mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white px-4 py-2 rounded"
          >
            {/* Affiche les trois barres ou la croix en fonction de l'état du menu */}
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
