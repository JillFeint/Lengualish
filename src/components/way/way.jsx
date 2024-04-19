import React from 'react'
import { useState } from 'react';
import FooterRedes from '../footerRedes'
import './way.css'
import './menuLateral.css'
import Ningles from '../../img/nivelesingls.png'
import SectionMain from '../sectionMain';
import MenuLateral from './menuLateral';
import { FaBars } from 'react-icons/fa';

export default function Way() {
  const [showNav, setShowNav] = useState(false)

  const [showA1Way, switchA1Way] = useState(false);
  const [showA2Way, switchA2Way] = useState(false);
  const [showB1Way, switchB1Way] = useState(false);
  const [showB2Way, switchB2Way] = useState(false);
  const [showC1Way, switchC1Way] = useState(false);
  const [showVocabWay, switchVocabWay] = useState(false); 
  const [showGramWay, switchGramWay] = useState(false); 
  const [showSintWay, switchSintWay] = useState(false); 
  const [showVisualLearnWay, switchVisualLearnWay] = useState(false); 
  const [showSoundLearnWay, switchSoundLarnWay] = useState(false); 
  
  const funcSwitchA1 = () => {
    switchA1Way(true);
    switchA2Way(false);
    switchB1Way(false);
    switchB2Way(false);
    switchC1Way(false);
  };
  const funcSwitchA2 = () => {
    switchA1Way(false);
    switchA2Way(true);
    switchB1Way(false);
    switchB2Way(false);
    switchC1Way(false);
  };
  const funcSwitchB1 = () => {
    switchA1Way(false);
    switchA2Way(false);
    switchB1Way(true);
    switchB2Way(false);
    switchC1Way(false);
  };
  const funcSwitchB2 = () => {
    switchA1Way(false);
    switchA2Way(false);
    switchB1Way(false);
    switchB2Way(true);
    switchC1Way(false);
  }; 
  const funcSwitchC1 = () => {
    switchA1Way(false);
    switchA2Way(false);
    switchB1Way(false);
    switchB2Way(false);
    switchC1Way(true);
  };
  const funcSwitchVocab = () => {
    switchVocabWay(true);
    switchGramWay(false);
    switchSintWay(false);
    switchVisualLearnWay(false);
    switchSoundLarnWay(false);
  };
  const funcSwitchGram = () => {
    switchVocabWay(false);
    switchGramWay(true);
    switchSintWay(false);
    switchVisualLearnWay(false);
    switchSoundLarnWay(false);
  };
  const funcSwitchSint = () => {
    switchVocabWay(false);
    switchGramWay(false);
    switchSintWay(true);
    switchVisualLearnWay(false);
    switchSoundLarnWay(false);
  };
  const funcSwitchVisualLearn = () => {
    switchVocabWay(false);
    switchGramWay(false);
    switchSintWay(false);
    switchVisualLearnWay(true);
    switchSoundLarnWay(false);
  }; 
  const funcSwitchSoundLarnWay = () => {
    switchVocabWay(false);
    switchGramWay(false);
    switchSintWay(false);
    switchVisualLearnWay(false);
    switchSoundLarnWay(true);
  };
  return (
    <>
    <header className='header-lateral'>
      <FaBars onClick={() => setShowNav(!showNav)}/>
    </header>
    <MenuLateral show={showNav}/>
  <div className='way-container'>
  <aside className='way-aside--left'>
    <label className='way-label' htmlFor="">Rutas de aprendizaje</label>
    <button className="way-btns--left" onClick={funcSwitchVocab}>Vocabulario</button>
    <button className="way-btns--left" onClick={funcSwitchGram}>Gramatica</button>
    <button className="way-btns--left" onClick={funcSwitchSint}>Sintaxis</button>
    <button className="way-btns--left" onClick={funcSwitchVisualLearn}>Ruta aprendizaje visual</button>
    <button className="way-btns--left" onClick={funcSwitchSoundLarnWay}>Ruta aprendizaje auditivo</button>
  </aside>
  <div className='way-test'> 
    <div className="waygridcenter">
      <p className={`way-text--a1 ${showVocabWay ? '' : 'way-hidden-text'}`}>
        1
      </p>
      <p className={`way-text--a1 ${showGramWay ? '' : 'way-hidden-text'}`}>
        <SectionMain />
      </p>
      <p className={`way-text--a1 ${showSintWay ? '' : 'way-hidden-text'}`}>
        3
      </p>
      <p className={`way-text--a1 ${showVisualLearnWay ? '' : 'way-hidden-text'}`}>
        4
      </p>
      <p className={`way-text--a1 ${showSoundLearnWay ? '' : 'way-hidden-text'}`}>
        5
      </p>
    </div>
  </div>
  <aside className='way-aside--right'>
    <img className='way-img--ningles' src={Ningles} alt="imagen niveles ingles " />
    <div className='way-div--btns'>
    <button className="way-btns--right" onClick={funcSwitchA1}>A1</button>
    <button className="way-btns--right" onClick={funcSwitchA2}>A2</button>
    <button className="way-btns--right" onClick={funcSwitchB1}>B1</button>
    <button className="way-btns--right" onClick={funcSwitchB2}>B2</button>
    <button className="way-btns--right" onClick={funcSwitchC1}>C1</button>
    </div>
    <div className="way-presentation">
      <p className={`way-text--a1 ${showA1Way ? '' : 'way-hidden-text'}`}>
      <br />Lo que necesitas para alcanzar el nivel A1 de inglés: <br /><br />  

      Vocabulario básico:<br /><br />

      Saludos y despedidas (hello, goodbye).
      Expresiones de cortesía (please, thank you).
      Números del 1 al 100.
      Días de la semana, meses del año y estaciones.
      Colores básicos (red, blue, green, etc.).
      Partes del cuerpo humano y vocabulario relacionado con la salud.
      Alimentos y bebidas básicas (apple, bread, water, etc.).
      Materiales y objetos comunes (book, table, chair, etc.).
      Familia y relaciones (mother, father, brother, sister, etc.).<br /><br />
      Gramática elemental:<br /><br />

      Pronombres personales (I, you, he/she/it, we, they).
      Presente simple de los verbos (affirmative, negative, interrogative).
      El verbo "to be" en presente (am, is, are).
      Artículos definidos e indefinidos (a, an, the).
      Plurales regulares e irregulares.
      Adjetivos simples (big, small, happy, etc.).<br /><br />
      Comprensión auditiva básica:<br /><br />

      Seguir instrucciones sencillas (open the door, sit down, etc.).
      Comprender preguntas básicas sobre información personal (What's your name? How old are you? etc.).
      Entender números, fechas y horarios en situaciones simples.<br /><br />
      Expresión oral básica:<br /><br />

      Introducirse a uno mismo (My name is..., I'm from...).
      Realizar preguntas sencillas (What's your name? How are you? etc.).
      Dar respuestas cortas a preguntas simples (Yes, no, I don't know, etc.).
      Utilizar frases básicas para comunicar necesidades y deseos.<br /><br />
      Comprensión de lectura básica:<br /><br />

      Leer y comprender textos cortos y simples como carteles, anuncios y mensajes breves.
      Entender información básica en anuncios de trabajo, menús de restaurantes, horarios de transporte, etc.
      <br /><br />Escritura elemental:<br /><br />

      Escribir frases cortas y simples sobre temas conocidos.
      Completar formularios básicos con información personal.
      Escribir mensajes de correo electrónico cortos y sencillos.
      Para desarrollar estas habilidades, es importante practicar regularmente con materiales diseñados 
      para principiantes, como libros de texto para estudiantes de nivel A1, aplicaciones de aprendizaje 
      de idiomas y recursos en línea. Además, la interacción con hablantes nativos o con otros estudiantes 
      de inglés puede ser muy útil para mejorar tu fluidez y confianza en el idioma.
      </p>
      <p className={`way-text--a2 ${showA2Way ? '' : 'way-hidden-text'}`}>
      <br />Para alcanzar el nivel A2 de inglés, que es el nivel pre-intermedio según el Marco Común 
      Europeo de Referencia para las Lenguas (MCER), necesitas construir sobre las habilidades 
      básicas que has adquirido para el nivel A1 y expandir tu conocimiento y competencia en el 
      idioma. <br /><br />Aquí hay una lista más específica de lo que necesitas para alcanzar el nivel A2:<br /><br />

      Vocabulario ampliado:<br /><br />

      Ampliar el vocabulario en áreas temáticas como el trabajo, el tiempo libre, la educación, 
      los viajes, etc.
      Aprender frases idiomáticas y expresiones comunes.
      Conocer términos más específicos en áreas de interés personal o profesional.<br /><br />
      Gramática intermedia:<br /><br />

      Dominar el uso de tiempos verbales más complejos, como el pasado simple, el presente continuo 
      y el futuro simple.
      Comprender y utilizar correctamente los verbos modales (can, must, should, etc.).
      Aprender estructuras gramaticales más complejas, como las cláusulas condicionales y las 
      comparativas y superlativas.<br /><br />
      Comprensión auditiva mejorada:<br /><br />

      Entender conversaciones cotidianas y discusiones simples sobre temas familiares.
      Comprender instrucciones más detalladas y explicaciones simples en situaciones concretas.
      Expresión oral más fluida:

      Participar en conversaciones sencillas sobre temas familiares, expresando opiniones y deseos.
      Contar anécdotas simples y describir experiencias pasadas.<br />
      Hacer y responder preguntas en conversaciones más complejas.<br /><br />
      Comprensión de lectura más avanzada:<br /><br />

      Leer y comprender textos más largos y detallados, como artículos de periódico cortos, 
      correos electrónicos y mensajes informales.
      Identificar información específica en textos más complejos.<br /><br />
      Escritura más desarrollada:<br /><br />

      Escribir textos más extensos y coherentes, como cartas informales, correos electrónicos
      y mensajes en redes sociales.
      Expresar opiniones y argumentos de manera más clara y estructurada.
      Utilizar un vocabulario más amplio y variado en la escritura.<br />
      Para alcanzar el nivel A2, puedes continuar utilizando recursos de aprendizaje de idiomas 
      diseñados para estudiantes de nivel pre-intermedio, como libros de texto, cursos en línea, 
      aplicaciones móviles y materiales de lectura y audio. Además, practicar regularmente con 
      hablantes nativos o con otros estudiantes de inglés te ayudará a mejorar tu fluidez y 
      confianza en el idioma.  <br />
      </p>
      <p className={`way-text--b1 ${showB1Way ? '' : 'way-hidden-text'}`}>
      <br />
      Para alcanzar el nivel B1 de inglés, que es el nivel intermedio según el Marco Común Europeo 
      de Referencia para las Lenguas (MCER), necesitas consolidar y ampliar tus habilidades 
      lingüísticas en comparación con los niveles anteriores. <br /><br />Aquí hay una descripción más específica
      de lo que necesitas para alcanzar el nivel B1:<br /><br />

      Vocabulario y léxico:<br /><br />

      Ampliar tu vocabulario para incluir términos más específicos y variados en áreas temáticas como 
      trabajo, educación, viajes, salud, tecnología, etc.<br />
      Conocer y entender una variedad más amplia de expresiones idiomáticas y coloquiales.<br />
      Aprender vocabulario relacionado con actividades cotidianas y situaciones prácticas.<br /><br />
      Gramática intermedia avanzada:<br /><br />

      Dominar los tiempos verbales en diversos contextos, incluyendo pasado continuo, futuro continuo, 
      presente perfecto y pasado perfecto.<br />
      Comprender y utilizar correctamente las formas de los verbos modales en contextos más complejos.
      Utilizar estructuras gramaticales más sofisticadas, como las cláusulas relativas y las oraciones 
      condicionales complejas.<br /><br />
      Comprensión auditiva avanzada:<br /><br />

      Entender discursos y conversaciones extensas en diversos temas, incluso cuando incluyen dialectos o 
      acentos regionales.<br />
      Seguir programas de radio, podcasts y entrevistas con relativa facilidad.<br />
      Comprender instrucciones detalladas y discusiones en entornos académicos o profesionales.<br /><br />
      Expresión oral más fluida y sofisticada:<br /><br />

      Participar en debates y conversaciones más complejas sobre una amplia gama de temas.<br />
      Expresar opiniones, argumentos y puntos de vista con claridad y coherencia.<br />
      Hacer presentaciones cortas sobre temas familiares y abstractos.<br /><br />
      Comprensión de lectura avanzada:<br /><br />

      Leer y comprender textos más largos y complejos, como artículos periodísticos, informes y ensayos.
      Identificar matices de significado y tono en textos más sofisticados.<br />
      Extraer información detallada y relevante de textos técnicos y académicos.<br /><br />
      Escritura avanzada:<br /><br />

      Escribir textos bien estructurados y coherentes, como ensayos, informes y reseñas.<br />
      Utilizar una variedad de conectores y marcadores discursivos para mejorar la cohesión y la coherencia 
      del texto.<br />
      Expresar ideas de manera clara y precisa, con un estilo de escritura adecuado al contexto.<br />
      Para alcanzar el nivel B1, es importante practicar regularmente utilizando una variedad de recursos 
      de aprendizaje de idiomas, como libros de texto, cursos en línea, aplicaciones móviles, materiales de 
      lectura y audio, y también buscar oportunidades para interactuar con hablantes nativos o con otros 
      estudiantes de inglés. La práctica constante y la exposición al idioma te ayudarán a mejorar tu 
      fluidez y confianza en inglés.  <br />
      </p>
      <p className={`way-text--b2 ${showB2Way ? '' : 'way-hidden-text'}`}>
        <br />
        Al alcanzar el nivel B2 de inglés, estarás en un nivel intermedio alto, lo que significa 
        que tendrás un dominio sólido del idioma que te permitirá comunicarte con fluidez y comprender 
        una amplia variedad de textos y discursos. <br /><br />Aquí hay una descripción más detallada de lo que 
        necesitas para alcanzar el nivel B2:<br /><br />

        Vocabulario avanzado:<br /><br />

        Tener un vocabulario amplio y variado que incluya términos especializados en áreas como 
        negocios, tecnología, ciencia, cultura, etc.<br />
        Conocer y entender expresiones idiomáticas y coloquiales con facilidad.<br />
        Ser capaz de comprender y utilizar vocabulario técnico en campos específicos de interés.<br /><br />
        Gramática avanzada:<br /><br />

        Dominar los tiempos verbales en diferentes contextos y tiempos complejos como el pasado 
        perfecto continuo, futuro perfecto, condicionales mixtos, entre otros.<br />
        Utilizar estructuras gramaticales complejas con precisión y naturalidad.<br />
        Entender y aplicar reglas gramaticales más avanzadas, como el uso correcto de los gerundios y 
        los infinitivos, así como la voz pasiva.<br /><br />
        Comprensión auditiva avanzada:<br /><br />

        Comprender discursos y debates complejos en una amplia variedad de temas, incluso si incluyen 
        acentos regionales o jerga específica.<br />
        Seguir programas de radio, podcasts, entrevistas y discursos con facilidad y entender los 
        puntos principales y los detalles.<br />
        Entender discursos extensos y complejos en contextos académicos o profesionales.<br /><br />
        Expresión oral fluida y sofisticada:<br /><br />

        Participar activamente en debates y conversaciones sobre temas complejos, defendiendo y 
        justificando puntos de vista con claridad.<br />
        Utilizar un lenguaje preciso y expresivo para expresar opiniones, emociones y puntos de vista.<br />
        Hacer presentaciones largas y detalladas sobre temas especializados.<br /><br />
        Comprensión de lectura avanzada:<br /><br />

        Leer y comprender textos extensos y complejos, como artículos académicos, informes técnicos y 
        literatura contemporánea.<br />
        Identificar matices de significado, tono y estilo en textos escritos de manera sofisticada.<br />
        Extraer información implícita y evaluar críticamente el contenido del texto.<br /><br />
        Escritura avanzada y sofisticada:<br /><br />

        Escribir textos claros, bien estructurados y coherentes, como ensayos argumentativos, informes
        detallados y artículos de opinión.<br />
        Utilizar una amplia gama de vocabulario y estructuras gramaticales para expresar ideas con precisión 
        y estilo.<br />
        Argumentar de manera persuasiva y convincente, apoyando tus puntos de vista con evidencia y ejemplos 
        relevantes.<br />
        Para alcanzar el nivel B2, es fundamental seguir practicando y exponiéndote al idioma a través de una 
        variedad de recursos y actividades, como leer libros y artículos en inglés, ver películas y series, 
        participar en debates y conversaciones, y tomar clases o cursos de inglés avanzado. La práctica 
        regular y la dedicación te ayudarán a mejorar tu nivel de inglés y a alcanzar el nivel B2 con éxito.
        </p>
      <p className={`way-text--c1 ${showC1Way ? '' : 'way-hidden-text'}`}>
      <br />
      Al alcanzar el nivel C1 de inglés, estarás en un nivel avanzado, lo que significa que 
      tendrás un dominio sólido del idioma que te permitirá comunicarte con fluidez y comprender una amplia variedad de textos y discursos complejos. Aquí hay una descripción más detallada de lo que necesitas para alcanzar el nivel C1:
      <br /><br />
      Vocabulario avanzado y especializado:<br /><br />

      Tener un amplio y variado vocabulario que incluya términos especializados en áreas como negocios, tecnología, ciencia, cultura, etc. <br />
      Comprender y utilizar expresiones idiomáticas y coloquiales con naturalidad y precisión.
      Ser capaz de comprender y emplear vocabulario técnico y académico en campos específicos de interés.
      <br /><br />
      Gramática avanzada y precisa:<br /><br />

      Dominar los tiempos verbales en una variedad de contextos y manejar estructuras gramaticales complejas con precisión.
      Utilizar con facilidad tiempos verbales avanzados como el pasado perfecto continuo, futuro perfecto, condicionales mixtos, entre otros.
      Entender y aplicar reglas gramaticales más complejas, como el uso correcto de los condicionales, el discurso reportado y la voz pasiva.
      <br /><br />
      Comprensión auditiva avanzada:<br /><br />

      Comprender discursos y debates complejos en una amplia variedad de temas, incluso si incluyen acentos regionales o jerga específica.
      Seguir programas de radio, podcasts, entrevistas y discursos con facilidad, captando tanto los puntos principales como los detalles.
      Entender discursos extensos y complejos en contextos académicos, profesionales o culturales.
      <br /><br />
      Expresión oral fluida y sofisticada:<br /><br />

      Participar activamente en debates y conversaciones sobre temas complejos, mostrando habilidad para argumentar y debatir con claridad y coherencia.
      <br />Utilizar un lenguaje preciso y expresivo para expresar opiniones, emociones y puntos de vista con sofisticación.
      <br />Hacer presentaciones largas y detalladas sobre temas especializados, manteniendo la atención del público y utilizando recursos visuales de manera efectiva.
      <br /><br />
      Comprensión de lectura avanzada:
      <br /><br />
      Leer y comprender textos extensos y complejos, como artículos académicos, informes técnicos y literatura especializada.
      <br />Identificar matices de significado, tono y estilo en textos escritos de manera sofisticada, así como entender las implicaciones subyacentes.
      <br />Evaluar críticamente el contenido del texto, analizando argumentos y evidencia de manera profunda.
      <br /><br />
      Escritura avanzada y sofisticada:
      <br /><br />
      Escribir textos claros, bien estructurados y coherentes, como ensayos académicos, informes profesionales y artículos de opinión.
      <br />Utilizar una amplia gama de vocabulario y estructuras gramaticales para expresar ideas con precisión, elegancia y estilo.
      Argumentar de manera persuasiva y convincente, respaldando tus puntos de vista con evidencia sólida y ejemplos relevantes.
      Para alcanzar el nivel C1, es fundamental seguir practicando y exponiéndote al idioma a través de una variedad de recursos y actividades, como la lectura de textos complejos, la participación en debates y discusiones, la escritura de textos avanzados y la interacción con hablantes nativos.  <br />La práctica regular y la dedicación te ayudarán a mejorar tu nivel de inglés y a alcanzar el nivel C1 con éxito.
      <br />
      </p>
      <p className='way-text--intro'><br />Para ver lo minimo necesario que debes tener en 
      cada nivel, presiona el botón del nivel que deseas alcanzar.<br /><br />
       </p>
    </div>
  </aside>
  </div>
    <FooterRedes />
  </>
  )
}
