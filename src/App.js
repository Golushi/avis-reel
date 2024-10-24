import React from "react";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import LatestReviews from "./components/LatestReviews/LatestReviews";
import Footer from "./components/Footer/Footer"; // Import du nouveau Footer

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <LatestReviews /> {/* Ajout de la section des derniers avis */}
      <Footer />
    </div>
  );
}

export default App;
