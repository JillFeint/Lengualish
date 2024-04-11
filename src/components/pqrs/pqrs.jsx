import React from 'react'
import './pqrs.css'


export default function Pqrs() {
  return (
<>
<section className='pqrs-section-one'>
  <div className='pqrs-articles'>
    <article className='pqrs-art-left'>
      <div className='pqrs-container'>
        <h2>Aprende ingles gratis y facil</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, consequatur.
        Obcaecati, ut delectus ad voluptatem aliquam perspiciatis odit labore illum quibusdam 
        distinctio qui eos fuga, exercitationem at excepturi repudiandae accusamus!</p>
      <form className='pqrs-form'>
        <input type="text" className="pqrs-add" />
        <input type="text" className="pqrs-add" />
        <textarea className="pqrs-add--text"></textarea>
        <button type='submit'>Enviar</button>
        <button type='reset'>Limpiar</button>
        {/* <button className='pqrs-saber-button'>
          <span>Saber mas</span>
        </button> */}
      </form>
      </div>
    </article>
  </div>
</section>
</>
  )
}
