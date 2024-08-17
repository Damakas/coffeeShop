import React from 'react';
import Main from './components/main/main';
import OurCoffe from './components/ourcoffe/ourcoffe';
import ForYourPleasure from './components/foryourpleasure/foryuorpleasure';
import NavBar from './components/navBar/navBar';
import Footer from './components/footer/footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <NavBar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/ourcoffee" element={<OurCoffe />} />
          <Route path="/foryourpleasure" element={<ForYourPleasure />} />

        </Routes>
      </div>
      <footer>
        <Footer />
      </footer>
    </Router>
  );
}

export default App;
