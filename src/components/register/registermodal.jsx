import React from 'react';
import './registermodal.css';

export default function RegisterModal() {
  function regiStartLogin(event){
    event.preventDefault();
    alert("Ingresados")
  }
  return (
<>
<div className="container">
  <div className="modal-login">
    <form className="form-format" onSubmit={regiStartLogin}>
      <div className="place-left">
        <div className="inputs-dimension-register">
          <h2 className="title-form">Registro a la plataforma</h2>
            <label className="labels-register" for="">Nombres </label>
              <input className="input-left" id="name-input--modal-send" type="text" placeholder="Ingrese sus nombres °‿‿°"/>
            <label className="labels-register" for="">Apellidos </label>
              <input className="input-left" id="last-input--modal-send" type="text" placeholder="Ingrese sus apellidos"/>
            <label className="labels-register" for="">Usuario </label>
              <input className="input-left" id="login-input--modal--send" type="text" placeholder="Ingrese su usuario °‿‿°"/>
            </div>
            <div className="btns-register">
              <button className="btn-subRes btn-subResRight" type="submit"><span>Ingresar</span></button>
              <button className="btn-subRes btn-subResLeft" type="reset"><span>Eliminar</span></button> 
            </div>
      </div> {/* <!-- place-left --> */}
      <div className="place-right">
          <div className="inputs-dimension-registerR">
        <h2 className="title-form-righ">Ingreso a la plataforma</h2>
          <label className="labels-register" for="">Contraseña </label>
            <input className="input-right" id="pass-input--modal-send" type="password" placeholder="Ingrese su contraseña  🔒"/>
          <label className="labels-register" for="">Correo </label>
            <input className="input-right" id="mail-input--modal-send" type="text" placeholder="Ingrese su correo  °‿‿°"/>
          <label className="labels-register" for="">Ciudad </label>
            <input className="input-right" id="city-input--modal-send" type="text" placeholder="Ingrese su ciudad °‿‿°"/>
        </div>{/* <!-- <p id="access-parr">T</p> --> */}
      </div> {/* <!-- place-right --> */}
    </form>
  </div>{/* <!-- modal login --> */}
</div> {/* <!-- contenedor --> */}
</>
  )
}
