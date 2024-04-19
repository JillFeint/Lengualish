  import React from 'react'

  export default function Footer() {
    return (
      <>
      <div className="divBolitasFfb400">
          <div className="divFondoOne">
            <div className="divBolitasOne"></div>
          </div>
          <div className="divFondoTwo">
            <div className="divBolitasTwo"></div>
          </div>
          <div className="divFondoThree">
            <div className="divBolitasThree">
              {/* <img class="imgFooter" src={imgfooter} alt="" /> */}
            </div>
          </div>
          <div className="divFondoFour">
            <div className="divBolitasFour"></div>
          </div>
          <div className="divFondoFive">
            <div className="divBolitasFive"></div>
          </div>
        </div>
      <footer className="ending">
        <div className='container-footer'>
        <div className="footer-box-cero"></div>
        <div className='footer-box-one'>
          <h2 className='titleFooter titleFooterOne' >Lengualish</h2>
          <h5 className='titleInfoLengulish'>Bienvenido a Lengualish, 
          tu plataforma gratuita para aprender inglés. <br /><br />Nuestro objetivo 
          es proporcionar recursos de calidad que te ayuden a mejorar 
          tus habilidades en inglés de manera accesible 
          y divertida. </h5>
          {/* <div className='title-leng'>
            <h3 className='titleFooter'>Contactanos</h3>
            <button className='button-footer'>Contacto</button>
          </div> */}
          {/* <div className='copy-h'>
            <h4 className='titleFooter titleEndCopy '>Colombia </h4>
            <h6>&copy; 2024 Something all right reserved</h6>
          </div> */}
        </div>
        <div className='footer-box-two'>
          <h2 className='titleFooter'>Media</h2>
          <div className='title-media'>
            <h5>Online</h5>
            <h5>Print</h5>
            <h5>Alternative Ads</h5>
          </div>
        </div>
        <div className='footer-box-three'>
          <h2 className='titleFooter'>Tecnologia</h2>
          <div className='title-tec'>
            <h5>Hardware</h5>
            <h5>Software </h5>
            <h5>Digital</h5>
            <h5>Automatizacion</h5>
            <h5>Inteligencia Artificial</h5>
          </div>
        </div>
        <div className='footer-box-four'>
          <h2 className='titleFooter'>Legal</h2>
          <div className='title-legal'>
            <h5>Privacy Police</h5>
            <h5>Term of Use</h5>
            <h5>Sitemap</h5>
          </div>
          <div className='end-h6'>
            <h6 className='titleEndCopy'>&copy;Compas Del Codigo</h6>
            <h6>Privacy Police -- Term of Use </h6>
          </div>
        </div>
        <div className="footer-box-five"></div>
        </div>
    </footer>
    </>
    )
  }