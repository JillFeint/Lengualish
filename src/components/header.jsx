import React from 'react';

export default function Header({ onUsuariosClick }) {
  return (
    <nav className="navegator">
      <div className="navegator-link">
        <button className="c-button c-button--gooey"> Inicio
          <div className="c-button__blobs">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </button>
        <button className="c-button c-button--gooey"> Calificaciones
          <div className="c-button__blobs">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </button>
        <button className="c-button c-button--gooey"> Cursos
          <div className="c-button__blobs">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </button>
        <button className="c-button c-button--gooey" onClick={onUsuariosClick}> Usuarios
          <div className="c-button__blobs">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </button>
      </div>
      <div className="navegator-logo">
        <h1 className="voca-text">lengualish</h1>
      </div>
    </nav>
  );
}
