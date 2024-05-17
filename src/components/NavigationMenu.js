import React from 'react';
import { Link } from 'react-router-dom';

const NavigationMenu = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Home</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/clube-dos-livros">Clube dos Livros</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/livros">Livros</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/newsletters">Newsletters</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationMenu;