import React from 'react';
import crobootsderech from '../img/crobootsderech.png';
import cocoright from '../img/cocoright.jpg'
import logoboots from '../img/logoboots.png'

export default function Section2() {
  return (
    <>
      <section className="main-body">
        <div className="articles">
          <article className="art-left">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi illum a natus illo voluptas sapiente 
            voluptatibus corrupti soluta quae voluptates
            nemo architecto laudantium at, est sit unde reiciendis ipsam provident.</p>
            <br />
            <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi illum a natus illo voluptas sapiente 
            voluptatibus corrupti soluta quae voluptates
            nemo architecto laudantium at, est sit unde reiciendis ipsam provident.</p>
          </article>
          <article className="art-right">
            <img className="article-firsRight-img" src={crobootsderech} alt="" />
          </article>
        </div>
      </section>
      <section className="main-body-two">
        <div className="articles-two">
          <article className="art-right">
            <img className="article-firsRight-img" src={cocoright} alt="" />
          </article>
          <article className="art-left">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi illum a natus illo voluptas sapiente 
            voluptatibus corrupti soluta quae voluptates
            nemo architecto laudantium at, est sit unde reiciendis ipsam provident.</p>
            <br />
            <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi illum a natus illo voluptas sapiente 
            voluptatibus corrupti soluta quae voluptates
            nemo architecto laudantium at, est sit unde reiciendis ipsam provident.</p>
          </article>
        </div>
      </section>
      <section className="main-body-three">
        <div className="articles-three">
          <article className="art-left">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi illum a natus illo voluptas sapiente 
            voluptatibus corrupti soluta quae voluptates
            nemo architecto laudantium at, est sit unde reiciendis ipsam provident.</p>
            <br />
            <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi illum a natus illo voluptas sapiente 
            voluptatibus corrupti soluta quae voluptates
            nemo architecto laudantium at, est sit unde reiciendis ipsam provident.</p>
          </article>
          <article className="art-right">
            <img className="article-firsRight-img" src={logoboots} alt="" />
          </article>
        </div>
      </section>
      <section className="section-art-separate">
        <div className="art-separate">
          <article>
            <div>
              <h2>Así es como funciona</h2>
              <p>¿Tienes curiosidad por descubrir tu experiencia de aprendizaje?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi illum a natus illo voluptas sapiente 
              voluptatibus corrupti soluta quae voluptates
              nemo architecto laudantium at, est sit unde reiciendis ipsam provident.</p>
              <br />
              <br />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi illum a natus illo voluptas sapiente 
              voluptatibus corrupti soluta quae voluptates
              nemo architecto laudantium at, est sit unde reiciendis ipsam provident.</p>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi illum a natus illo voluptas sapiente 
              voluptatibus corrupti soluta quae voluptates
              nemo architecto laudantium at, est sit unde reiciendis ipsam provident.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi illum a natus illo voluptas sapiente 
              voluptatibus corrupti soluta quae voluptates
              nemo architecto laudantium at, est sit unde reiciendis ipsam provident.</p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
