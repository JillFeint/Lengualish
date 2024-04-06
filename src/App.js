import React, { useState } from 'react';
import './App.css';
import Header from './components/header';
import Section1 from './components/section1';
import Section2 from './components/section2';
import Footer from './components/footer';
import Login from './components/login/login';
// import RegisterModal from './components/register/registermodal';

function App() {
  const [showLogin, setShowLogin] = useState(false);

  const handleUsuariosClick = () => {
    setShowLogin(true);
  };
  return (
    <div className="container12">
    {!showLogin && <Header onUsuariosClick={handleUsuariosClick} />}
    {!showLogin && <Section1 />}
    {!showLogin && <Section2 />}
    {!showLogin && <Footer />}
    {showLogin &&   <Login />}
  </div>
  );
}

export default App;
