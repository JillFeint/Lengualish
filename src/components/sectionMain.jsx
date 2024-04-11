import React from 'react'
import MainLogo from '../img/crobootsderech.png'

export default function SectionMain() {
  return (
    <>
    <div className='container-component--main'>
    <section className='section-main'>
      <div className='articles-main--left'>
        <h2 className='main-title'>Habla idiomas con confianza</h2>
          <p className='main-text'>Aprendizaje de idiomas a tu ritmo, con profesores de confianza.</p> 
          <button className="cssbuttons-io-button">
            Get started
            <div className="icon">
              <svg
                height="24"
                width="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </button>
      </div>
      <div className='articles-main--right'>
      <article className='art-main'>
        <img className='mainlogo-picture' src={MainLogo} alt="Una foto" />
      </article>
      </div>
  </section>
  </div>
  </>
  )
}
