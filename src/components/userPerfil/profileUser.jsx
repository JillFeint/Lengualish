import './profileUser.css';
import React, { useState } from 'react';
import Perfil from '../usuario/perfil';
import Cursosgallery from '../cursos/cursosgallery';
import Way from '../way/way';
import Pqrs from '../pqrs/pqrs'

export default function ProfileUser() {
  const [mostrarPerfilUser, setMostrarPerfilUser] = useState(false);
  const [mostrarCursos, setMostrarCursos]  = useState(false);
  const [mostrarWay, setMostrarWay]  = useState(false);
  const [mostrarPqrs, setMostrarPqrs]  = useState(false);

  const profileUserClick = () => {
    setMostrarPerfilUser(true);
    console.log("ejecuto ProfileUser")
  };

  const cursosClick = () => {
    setMostrarCursos(true);
    console.log("ejecuto Cursos")
  };
  const wayClick = () => {
    setMostrarWay(true);
    console.log("ejecuto Way")
  };
  const pqrsClick = () => {
    setMostrarPqrs(true);
    console.log("ejecuto Pqrs")
  };
  return (
<>
{!(mostrarPerfilUser || mostrarCursos || mostrarWay || mostrarPqrs) && (
  <div className={`profileUser-main ${mostrarPerfilUser ? 'profileuser-hidden' : ''}`}>
  <div className="profileUser-container">
    <div className="profileUser-divTexto">
      <h3 className="profileUser-tituloOne">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        vero magnam assumenda maxime, dicta facere dolorem quibusdam ut iure.</h3>
        <br />
        <p className="profileUser-parrafoOne">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam assumenda 
          libero, sed quidem, soluta nobis praesentium maxime veniam, consequuntur 
          error debitis asperiores vel dolorem magni amet culpa pariatur obcaecati adipisci?</p>
          <br />
    </div>
    <div className="profileUser-contenedorBig">
      <div className="caja-profileUser profileUser-c1" onClick={profileUserClick}>
        Perfil
      </div>
      <div className="caja-profileUser profileUser-c2" onClick={cursosClick}>
        Cursos
      </div>
      <div className="caja-profileUser profileUser-c3" onClick={wayClick}>
        Rutas de aprendizaje
      </div>
      <div className="caja-profileUser profileUser-c4">
        blog
      </div>
      <div className="caja-profileUser profileUser-c5" onClick={pqrsClick}>
        Pqrs
      </div>
    </div>
  </div>
</div>
      )}
{mostrarPerfilUser && <Perfil />} 
{mostrarCursos && <Cursosgallery />} 
{mostrarWay && <Way />} 
{mostrarPqrs && <Pqrs />} 
</>
  )
}


