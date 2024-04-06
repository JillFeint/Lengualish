import React from 'react';
import './registermodal.css';

export default function RegisterModal() {
  return (
<>
    <div class="container">
  <div class="modal-login">
    <form class="form-format" action="" onsubmit="startLogin(event)">
      <div class="place-left">
        <div class="inputs-dimension-register">
          <h2 class="title-form">Registro a la plataforma</h2>
            <label class="labels-register" for="">Nombres </label>
              <input class="input-left" id="name-input--modal-send" type="text" placeholder="Ingrese sus nombres °‿‿°"/>
            <label class="labels-register" for="">Apellidos </label>
              <input class="input-left" id="last-input--modal-send" type="text" placeholder="Ingrese sus apellidos"/>
            <label class="labels-register" for="">Usuario </label>
              <input class="input-left" id="login-input--modal--send" type="text" placeholder="Ingrese su usuario °‿‿°"/>
            </div>
            <div class="btns-register">
              <button class="btn-subRes btn-subResRight" type="submit"><span>Ingresar</span></button>
              <button class="btn-subRes btn-subResLeft" type="reset"><span>Eliminar</span></button> 
            </div>
      </div> {/* <!-- place-left --> */}
      <div class="place-right">
          <div class="inputs-dimension-registerR">
        <h2 class="title-form-righ">Ingreso a la plataforma</h2>
          <label class="labels-register" for="">Contraseña </label>
            <input class="input-right" id="pass-input--modal-send" type="password" placeholder="Ingrese su contraseña  🔒"/>
          <label class="labels-register" for="">Correo </label>
            <input class="input-right" id="mail-input--modal-send" type="text" placeholder="Ingrese su correo  °‿‿°"/>
          <label class="labels-register" for="">Ciudad </label>
            <input class="input-right" id="city-input--modal-send" type="text" placeholder="Ingrese su ciudad °‿‿°"/>
        </div>{/* <!-- <p id="access-parr">T</p> --> */}
      </div> {/* <!-- place-right --> */}
    </form>
  </div>{/* <!-- modal login --> */}
</div> {/* <!-- contenedor --> */}
</>
  )
}
