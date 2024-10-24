import React, { useState } from "react";
import GoButtonImage from "../../assets/go_button.png";
import GoButtonImageHover from "../../assets/go_button_hover.png"; // Assure-toi d'avoir ce fichier

const MainContent = () => {
  // Création de deux états pour les boutons gauche et droit
  const [isHoveringLeft, setIsHoveringLeft] = useState(false);
  const [isHoveringRight, setIsHoveringRight] = useState(false);

  return (
    <div className="flex justify-center gap-8 items-start h-[75vh] p-4">
      {/* Rectangle gauche */}
      <div className="w-[280px] h-[340px] bg-bleu p-8 text-white relative flex flex-col justify-between rounded-xl">
        <h2 className="text-2xl font-lobster text-black font-bold mb-4">
          Donnez votre avis
        </h2>
        <label htmlFor="code" className="block font-bold mb-2">
          Entrez votre Code Sticker :
        </label>
        <input
          id="code"
          type="text"
          className="w-full p-2 text-black mb-4"
          placeholder="Votre code"
        />
        <button
          className="bg-transparent self-center"
          onMouseEnter={() => setIsHoveringLeft(true)}
          onMouseLeave={() => setIsHoveringLeft(false)}
        >
          <img
            src={isHoveringLeft ? GoButtonImageHover : GoButtonImage}
            alt="Go"
            className="w-24"
          />
        </button>
      </div>

      {/* Rectangle droit */}
      <div className="w-[280px] h-[340px] bg-vert p-8 text-white relative flex flex-col justify-between rounded-xl">
        <h2 className="text-2xl font-lobster text-black font-bold mb-4">
          Recherchez un Avis
        </h2>
        <label htmlFor="quoi" className="block text-black font-bold mb-2">
          Quoi :
        </label>
        <input
          id="quoi"
          type="text"
          className="w-full p-2 text-black mb-4"
          placeholder="Type d'établissement"
        />
        <label htmlFor="ou" className="block text-black font-bold mb-2">
          Où :
        </label>
        <input
          id="ou"
          type="text"
          className="w-full p-2 text-black mb-4"
          placeholder="Lieu"
        />
        <button
          className="bg-transparent self-center"
          onMouseEnter={() => setIsHoveringRight(true)}
          onMouseLeave={() => setIsHoveringRight(false)}
        >
          <img
            src={isHoveringRight ? GoButtonImageHover : GoButtonImage}
            alt="Go"
            className="w-24"
          />
        </button>
      </div>
    </div>
  );
};

export default MainContent;
