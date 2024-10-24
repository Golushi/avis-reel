// src/App.js
import React from "react";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent"; // Import du nouveau composant

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <MainContent /> {/* Utilisation du composant MainContent */}
      </main>
    </div>
  );
}

export default App;
