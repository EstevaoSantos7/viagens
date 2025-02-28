import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import "./App.css";
import Destinos from "./components/Destinos"
import Header from "./components/Header"
import Viagens from "./components/Viagens"
import Formulario from "./components/Forrmulario";
import Depoimentos from "./components/Depoimentos";

function App() {
  return (
    <div className="App">
      <Header />

      <section className="hero">
        <div className="hero-content">
          <h2>Explore o Mundo com a Senai Viagens</h2>
          <p>
            Oferecemos os melhores pacotes de viagens para você e sua família.
            Experiências inesquecíveis aguardam você!
          </p>
          <div className="hero-buttons">
            <button className="btn-saiba-mais">Saiba Mais</button>
            <button className="btn-reserve-agora">Reserve Agora</button>
          </div>
        </div>
      </section>
      <Destinos />
      <Viagens />
      <Depoimentos />
      <Formulario />
     




      <footer className="footer">
        <div className="social-links">
          <a href="#facebook">
            <FaFacebook /> Facebook
          </a>
          <a href="#twitter">
            <FaTwitter /> Twitter
          </a>
          <a href="#instagram">
            <FaInstagram /> Instagram
          </a>
        </div>
        <p>
          Desenvolvido por {"Estevão Santos "}
          <a
            href="https://github.com/EstevaoSantos7"
            target="_blank"
            rel="noopener noreferrer"
          >
            
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
