import React from 'react'
import FooterRedes from '../footerRedes'
import './way.css'


export default function Way() {
  return (
    <>
<header className='main-header'>
  1
</header>
<div className='way-container'>
  <aside className='way-aside--left'>
    <label className='way-label' htmlFor="">Rutas de aprendizaje</label>
    <button className="way-btns--left">Vocabulario</button>
    <button className="way-btns--left">Gramatica</button>
    <button className="way-btns--left">Sintaxis</button>
    <button className="way-btns--left">Ruta aprendizaje visual</button>
    <button className="way-btns--left">Ruta aprendizaje auditivo</button>
  </aside>
  <div className='way-test'> 
    <div className="waygridcenter">1</div>
    <div className="waygridcenter">2</div>
    <div className="waygridcenter">3</div>
  </div>
  <aside className='way-aside--right'>
    <div className='way-div--btns'>
    <button className="way-btns--right">A1</button>
    <button className="way-btns--right">A2</button>
    <button className="way-btns--right">B1</button>
    <button className="way-btns--right">B2</button>
    <button className="way-btns--right">C1</button>
    </div>
    <div className="way-presentation">aquí van las rutas</div>
  </aside>
</div>
    <FooterRedes />
    </>
  )
}
