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
import FooterRedes from './components/footerRedes';
import Perfil from './components/usuario/perfil';
import ProfileUser from './components/userPerfil/profileUser';
import Cursosgallery from './components/cursos/cursosgallery';
import './components/cursos/cursosgallery.css'

function App() {
  const [showLogin, setShowLogin] = useState(false);

  const handleUsuariosClick = () => {
    setShowLogin(true);
  };
  return (
    <div className="container12">
    {!showLogin && <Header onUsuariosClick={handleUsuariosClick} />}
    {!showLogin && <SectionMain />}
    {!showLogin && <Carrusel />}
    {!showLogin && <Section2 />}
    {!showLogin && <Section1 />}
    <Perfil/>
    {!showLogin && <Footer />}
    {!showLogin && <FooterRedes/>}
    {showLogin &&   <Login />}
  </div>
  );
}

export default App;
