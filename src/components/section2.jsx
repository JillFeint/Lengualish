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
            <br />
            <p> ¡Guau, chicos! ¡Echen un vistazo a esta 
              nueva plataforma de aprendizaje de inglés que acabo de encontrar! <br /><br />
              Es una pataforma y aplicación súper buea que te ayuda a aprender 
              inglés de una manera divertida y gratis. <br /><br />
              Ofrece muchas lecciones y ejercicios adaptados a diferentes
               niveles, desde principiantes hasta avanzados. <br />
              Además, te permite crear un perfil personalizado para seguir tu progreso.
              </p>
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
          <br /> 
            <p>¡Sí y sabes, aquí es donde se pone interesante! <br /> <br /> 
            Utiliza el sistema de evaluación basado en los estándares 
              del Marco Común Europeo de Referencia para las Lenguas, así que puedes tener una idea de 
              tu nivel de competencia en inglés, porque te dan información para que infieras en 
              cual puedes estar.</p>
            <br />
            <p> ¡Ah, espera! También tiene características de gamificación para mantenernos motivados
                 mientras aprendemos. <br /> ¡Esto suena como un montón de diversión!</p>
          </article>
        </div>
      </section>
      <section className="main-body-three">
        <div className="articles-three">
          <article className="art-left"><br />
            <p>¡Hey chicos, acabo presentar la evaluación de un curso en la plataforma de aprendizaje de inglés!<br /> <br />
            Bueno, parece que mi nivel de competencia en inglés está justo en el punto intermedio del MCER. 
            <br /><br />

            Además, descubrí que tiene un blog donde discuten sugerencias para cambiar las lecciones o agregar nuevas,
              definitivamente tienen que probarla. <br />
          </p>
          </article>
          <article className="art-right">
            <img className="article-firsRight-img" src={logoboots} alt="" />
          </article>
        </div>
      </section>
      {/* <section className="section-art-separate">
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
      </section> */}
    </>
  );
}
