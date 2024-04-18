import './profileUser.css';
import React, { useState } from 'react';
import Perfil from '../usuario/perfil';

export default function ProfileUser() {
  const [mostrarPerfilUser, setMostrarPerfilUser] = useState(false);

  const profileUserClick = () => {
    setMostrarPerfilUser(true);
    console.log("ejecuto")
  };
  return (
<>
<div className={`profileUser-main ${mostrarPerfilUser ? 'oculto-profile-user' : ''}`}>
  <div className="profileUser-container">
    <div className="profileUser-divTexto">
      <h3 className="profileUser-tituloOne">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        vero magnam assumenda maxime, dicta facere dolorem quibusdam ut iure.</h3>
        <p className="profileUser-parrafoOne">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam assumenda 
          libero, sed quidem, soluta nobis praesentium maxime veniam, consequuntur 
          error debitis asperiores vel dolorem magni amet culpa pariatur obcaecati adipisci?</p>
    </div>
    <div className="profileUser-contenedorBig">
      <div className="caja-profileUser profileUser-c1" onClick={profileUserClick}>
        contenedor 1
      </div>
      <div className="caja-profileUser profileUser-c2">
        contenedor 2
      </div>
      <div className="caja-profileUser profileUser-c3">
        contenedor 3
      </div>
      <div className="caja-profileUser profileUser-c4">
        contenedor 4
      </div>
      <div className="caja-profileUser profileUser-c5">
        contenedor 5
      </div>
    </div>
  </div>
</div>
{mostrarPerfilUser && <Perfil />} 
</>
  )
}


