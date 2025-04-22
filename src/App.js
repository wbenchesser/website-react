import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Settings from './pages/Settings';
import BlogList from './pages/BlogList';
import BlogPost from './pages/BlogPost';
import PoemList from './pages/PoemList';
import PoemPage from './pages/PoemPage';
import Gallery from './pages/Gallery';

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <hr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/poems" element={<PoemList />} />
          <Route path="/poem/:id" element={<PoemPage />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;