import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ClubeDosLivrosPage from './pages/ClubeDosLivrosPage';
import LivrosPage from './pages/LivrosPage';
import NewslettersPage from './pages/NewslettersPage';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div>
        <Router>
          <div className="App container">
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route path="/clube-dos-livros" element={<ClubeDosLivrosPage />} />
              <Route path="/livros" element={<LivrosPage />} />
              <Route path="/newsletters" element={<NewslettersPage />} />
            </Routes>
          </div>
        </Router>
        <Footer />
      </div>
    </>
  );
}

export default App;
