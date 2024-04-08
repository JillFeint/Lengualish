import React, { useState } from 'react';
import './App.css';
import './App2.css'
import Header from './components/header';
import Section1 from './components/section1';
import Section2 from './components/section2';
import Footer from './components/footer';
import Login from './components/login/login';
import SectionMain from './components/sectionMain';
import Carrusel from './components/carousel/carrusel';

function App() {
  const [showLogin, setShowLogin] = useState(false);

  const handleUsuariosClick = () => {
    setShowLogin(true);
  };
  return (
    <div className="container12">
    {!showLogin && <Header onUsuariosClick={handleUsuariosClick} />}
    {!showLogin && <SectionMain />}
    {!showLogin && <Section1 />}
    {!showLogin && <Carrusel />}
    {!showLogin && <Section2 />}
    {!showLogin && <Footer />}
    {showLogin &&   <Login />}
  </div>
  );
}

export default App;
