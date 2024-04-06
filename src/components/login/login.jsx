import React from 'react'
import './loginmodal.css'
import cocologin from '../../img/cocoright.jpg'
import RegisterModal from '../register/registermodal';


export default function Login() {
  function startLogin(event){
    event.preventDefault();
    let user = document.getElementById("login-input--modal").value;
    let pass = document.getElementById("pass-input--modal").value;
    alert("Ingresados")
  
    console.log(user)
    console.log(pass)
  
    if (user === "Moncada" && pass === "bruno2015"){
      document.getElementById("access-parr").innerHTML=`Esperando operación de la nariz ${user}, ${pass}`;
    }
    else if (user === "Angel" && pass === "2024"){
      document.getElementById("access-parr").innerHTML=`Esperando no morir por la grasa ${user}, ${pass}`;
    }
    else if (user === "Ballesteros" && pass === "karbuncol"){
      document.getElementById("access-parr").innerHTML=`Esperando que no se le pudra el dedo ${user}, ${pass}`;
    }
    else {
      document.getElementById("access-parr").innerHTML=`Estas no son las credenciales de acceso  ${user}, ${pass}`;
    }
  }
  
  console.log("esta conectado")
  return (
<>   
<div className="container">
  <div className="modal-login">
    <div className="div-imagen--left">
      <div className="img-left">
        <img className="img-left--dimension" src={cocologin} alt="Logo de Cocoright"/>
      </div> {/* img */}
    </div>
    <div className="form">
    <form onSubmit={startLogin}>
    <div className="top-btns">
        <label className="switchFall">
          <input type="checkbox"/>
          <span className="sliderFall"></span>
        </label>
      </div>
      <h2 className="title-form">Ingreso a la plataforma</h2>
      <div className="inputs-dimension">
        <label className="labels">Usuario: </label>
          <input className="" id="login-input--modal" type="text" placeholder="Ingrese su usuario   °‿‿°"/>
        <label className="labels">Contraseña: </label>
          <input className="" id="pass-input--modal" type="password" placeholder="Ingrese su contraseña  🔒"/>
          <a className="a-register" href="#">Recuperar contraseña</a>  
      </div>
        <div className="btns">
          <button className="btn-subRes btn-subResRight" type="submit"><span className="spanIngreso">Ingresar</span></button>
          <button className="btn-subRes btn-subResLeft" type="reset"><span className="spanIngreso" >Eliminar</span></button>
        </div>  
    </form>
    <div className="btnRedesNuevos">
      <button className="btnWhatsapp">
        <span className="svgContainerWhat">
          <svg
            viewBox="0 0 448 512"
            fill="white"
            height="1.6em"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
            ></path>
          </svg>
        </span>
        <span className="BGWhat"></span>
      </button>
{/* <!-- Boton facebook --> */}
      <button className="btnFacebook">
        <span className="svgContainerFace">
          <svg
            viewBox="0 0 320 512"
            height="1.3em"
            xmlns="http://www.w3.org/2000/svg"
            className="svgIcon"
            fill="white">
            <path
              d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"
            ></path>
          </svg>
        </span>
        <span className="BGFace"></span>
      </button>
{/* <!-- Boton instagram --> */}
      <button className="BtnInstagram">
        <span className="svgContainerInsta">
          <svg fill="white" className="svgIcon" viewBox="0 0 448 512" height="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
        </span>
        <span className="BGInsta"></span>
      </button>
{/* <!-- Boton youtube--> */}
      <button className="btnYoutube">
        <span className="svgContainerYou">
          <svg
            viewBox="0 0 576 512"
            fill="white"
            height="1.6em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"
            ></path>
          </svg>
        </span>
        <span className="BGYou"></span>
      </button>    
      </div> {/*  Botones redes sociales */}
      <div>
      <p id="access-parr">T</p>
      </div>
    </div>         {/* form */}
  </div>   {/* modal login */}
</div> {/* contenedor */}
</>   
  )
}
