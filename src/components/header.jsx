import React from 'react';
import lengualish from '../img/logo-lengualish.png'

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
        <button className="c-button c-button--gooey"> Donaciones
          <div className="c-button__blobs">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </button>
        <button className="c-button c-button--gooey"> Contactenos
          <div className="c-button__blobs">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </button>
        <button className="c-button c-button--gooey" onClick={onUsuariosClick}> Usuario
          <div className="c-button__blobs">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </button>
      </div>
      <div className="navegator-logo">
        <img className='logo-header' src={lengualish} />
      </div>
    </nav>
  );
}
