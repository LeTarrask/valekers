import React from 'react';

const Footer = () => (
  <footer className="footer mt-auto py-3">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <h5>Sobre a Comunidade</h5>
          <p>
            Este site é dedicado às obras de <a href="http://www.alinevalek.com.br" target="_blank" rel="noopener noreferrer">Aline Valek</a>.
          </p>
        </div>
        <div className="col-md-4">
          <h5>Apoie a Aline</h5>
          <p>
            Você pode apoiar o trabalho da Aline em sua página no <a href="https://apoia.se/alinevalek" target="_blank" rel="noopener noreferrer">Apoia.se</a>.
          </p>
        </div>
        <div className="col-md-4">
          <h5>Créditos do Site</h5>
          <p>
            Este site foi desenvolvido por <a href="http://www.tarrask.com" target="_blank" rel="noopener noreferrer">Tarrask</a> usando React e Bootstrap.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col text-center">
          <span className="text-muted">© {new Date().getFullYear()} Todos os direitos reservados.</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
