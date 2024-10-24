import React, { useState, useEffect } from "react";

const LatestReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Remplacer par un appel API réel
    setTimeout(() => {
      setReviews([
        {
          id: 1,
          name: "Restaurant Le Gourmet",
          review: "Super expérience, à recommander !",
        },
        {
          id: 2,
          name: "Hôtel Belle Vue",
          review: "Très propre et accueillant.",
        },
        {
          id: 3,
          name: "Salon de coiffure Chics et Chocs",
          review: "Excellent service.",
        },
      ]);
    }, 1000); // Simule un délai d'une seconde
  }, []);

  return (
    <section className="bg-gray-100 p-8 flex flex-col items-center">
      <h2 className="text-xl font-bold mb-4">Derniers Avis</h2>
      {reviews.length > 0 ? (
        <ul className="flex flex-col items-center">
          {reviews.map((review) => (
            <li
              key={review.id}
              className="mb-4 p-4 bg-white shadow-md rounded-lg w-full max-w-md"
            >
              <strong>{review.name} :</strong> {review.review}
            </li>
          ))}
        </ul>
      ) : (
        <p>Chargement des avis...</p>
      )}
    </section>
  );
};

export default LatestReviews;
