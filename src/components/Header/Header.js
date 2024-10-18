import React, { useState } from "react";
import logo from "../../assets/logo512.png";
import bgImage from "../../assets/img_bgHeader.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className="relative bg-cover bg-center bg-no-repeat h-[20vh] w-full"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="container mx-auto h-full px-4 flex items-center justify-between">
        <img src={logo} alt="Logo" className="h-12 w-auto object-contain" />

        <div className="flex flex-col items-end">
          <h1 className="text-right mb-2">
            <span className="text-yellow-400 text-lg font-bold">
              1er Site de France avec des
            </span>
            <br />
            <span className="text-white text-lg font-bold">
              Avis Garantis 100% Réels
            </span>
          </h1>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white bg-blue-500 px-4 py-2 rounded"
          >
            {isMenuOpen ? "Fermer" : "Menu"}
          </button>

          {/* Menu pour mobile */}
          <nav className={`${isMenuOpen ? "block" : "hidden"} md:block mt-2`}>
            <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
              <li>
                <a href="/" className="text-white hover:text-yellow-400">
                  Accueil
                </a>
              </li>
              <li>
                <a
                  href="/qui-sommes-nous"
                  className="text-white hover:text-yellow-400"
                >
                  Qui Sommes-Nous
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white hover:text-yellow-400">
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/inscrire"
                  className="text-white hover:text-yellow-400"
                >
                  Inscrire Mon Etablissement
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
