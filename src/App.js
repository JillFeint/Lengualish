import React, { useState } from 'react';
import './App.css';
import './App2.css';
import './components/usuario/perfil.css';
import Header from './components/header';
import Section1 from './components/section1';
import Section2 from './components/section2';
import Footer from './components/footer';
import Login from './components/login/login';
import SectionMain from './components/sectionMain';
import Carrusel from './components/carousel/carrusel';
import FooterRedes from './components/footerRedes';
import './components/cursos/cursosgallery.css'
import RegisterModal from './components/register/registermodal';
import './components/footerRedes.css'


function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [mostrarRegisGet, changeShowRegisGet] = useState(false);

  const handleUsuariosClick = () => {
    setShowLogin(true);
  };
  const showRegisterGetModal = () => {
    changeShowRegisGet(true);
  };
  return (
    <div className="app-container--main">
      {!showLogin && !mostrarRegisGet && <Header onUsuariosClick={handleUsuariosClick} />}
      {!showLogin && !mostrarRegisGet && <SectionMain onRegisClick={showRegisterGetModal} />}
      {!showLogin && !mostrarRegisGet && <Carrusel />}
      {!showLogin && !mostrarRegisGet && <Section2 />}
      {!showLogin && !mostrarRegisGet && <Section1 />}
      {!showLogin && !mostrarRegisGet && <Footer />}
      {!showLogin && !mostrarRegisGet && <FooterRedes />}
      {showLogin && <Login />}
      {mostrarRegisGet && <RegisterModal />}
    </div>
  );
}

export default App;
