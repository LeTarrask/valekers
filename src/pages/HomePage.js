import React from 'react';
import NavigationMenu from '../components/NavigationMenu';
import { Link } from 'react-router-dom';

// Home Page Component
const HomePage = () => (
  <div>
    <NavigationMenu />
    <header className="hero d-flex flex-column justify-content-center align-items-center text-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h1 className="display-4">Valekers Imperdíveis</h1>
            <p className="lead">Bem-vindo ao melhor lugar secreto da internet! Um grupo pessoal de apoiadores da escritora Aline Valek.</p>
            <hr className="my-4" />
            <p className="mb-5">Descubra mais sobre Aline Valek e nosso grupo abaixo.</p>
            <button className="btn btn-primary btn-lg" onClick={() => document.getElementById('about').scrollIntoView()}>Saiba mais</button>
          </div>
        </div>
      </div>
    </header>

    <section className="my-5 py-5 scrollable-section" id="about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 px-md-5">
            <h2 className="h3">Sobre Aline Valek</h2>
            <p>Aline Valek conta histórias através de várias formas de mídia. </p>
            <p>Ela é a autora dos romances “As águas-vivas não sabem de si” e “Cidades afundam em dias normais”, além de uma variedade de contos, crônicas e ensaios. Aline também é conhecida por seus zines, sua newsletter “Uma Palavra” e seu podcast “Bobagens Imperdíveis”. Ela é frequentemente avistada no território da newsletter, compartilhando suas ideias e histórias com seus leitores.</p>

            <Link className="btn btn-primary" to="https://apoia.se/alinevalek" role="button">Apoie o trabalho da Aline</Link>
          </div>
          <div className="col-md-6 pt-5">
            <img src="https://via.placeholder.com/350" className="img-fluid rounded" alt="Aline Valek" />
          </div>
        </div>
      </div>
    </section>

    <section className="my-5 py-5 scrollable-section" id="valekers">
      <div className="container">
        <div className="row align-items-center">
          
          <div className="col-md-6 pt-5 px-md-5">
            <img src="https://via.placeholder.com/350" className="img-fluid rounded" alt="Aline Valek" />
          </div>

          <div className="col-md-6 ">
            <h2 className="h3">Valekers Imperdíveis</h2>
            <p>Esta página é dedicada aos apoiadores de Aline Valek na plataforma Apoia.se. Aqui, os fãs e seguidores de Aline podem se reunir para apoiar seu trabalho e participar de discussões sobre suas histórias e ideias.</p>

            <p>Seja bem-vindo ao melhor lugar secreto da internet, um espaço dedicado à apreciação e apoio ao trabalho de Aline Valek. Junte-se a nós e faça parte desta comunidade de apoiadores da literatura e da arte.</p>
            <Link className="btn btn-primary" to="https://apoia.se/alinevalek" role="button">Junte-se a nós</Link>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default HomePage;