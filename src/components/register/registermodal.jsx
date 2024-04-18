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
        <div className="register-title-principal">
          <h2 className="title-form">Registro a la plataforma</h2>
        </div>
        <div className="inputs-dimension-register">
          <div className="register-input-group">
            <input required="" type="text" name="text" autocomplete="off" className="register-input-new register-user-fucion" id="name-input--modal-send"/>
            <label className="register-user-label register-user-fucion">Nombre</label>
          </div>
          <div className="register-input-group">
            <input required="" type="text" name="text" autocomplete="off" className="register-input-new register-user-fucion" id="last-input--modal-send"/>
            <label className="register-user-label register-user-fucion">Apellido</label>
          </div>
          <div className="register-input-group">
            <input required="" type="text" name="text" autocomplete="off" className="register-input-new register-user-fucion" id="login-input--modal--send"/>
            <label className="register-user-label register-user-fucion">Nombre de usuario</label>
          </div>
            {/* <label className="labels-register" for="">Nombres </label>
              <input className="input-left" id="name-input--modal-send" type="text" placeholder="Ingrese sus nombres °‿‿°"/>
            <label className="labels-register" for="">Apellidos </label>
              <input className="input-left" id="last-input--modal-send" type="text" placeholder="Ingrese sus apellidos"/>
            <label className="labels-register" for="">Usuario </label>
              <input className="input-left" id="login-input--modal--send" type="text" placeholder="Ingrese su usuario °‿‿°"/> */}
            </div>
            <div className="btns-register">
              <button className="btn-subRes btn-subResRight" type="submit"><span>Ingresar</span></button>
              <button className="btn-subRes btn-subResLeft" type="reset"><span>Eliminar</span></button> 
            </div>
      </div> {/* <!-- place-left --> */}
      <div className="place-right">
          <div className="inputs-dimension-registerR">
          <div className="register-input-group">
            <input required="" type="text" name="text" autocomplete="off" className="register-input-new register-user-fucion" id="pass-input--modal-send"/>
            <label className="register-user-label register-user-fucion">Contraseña</label>
          </div>
          <div className="register-input-group">
            <input required="" type="text" name="text" autocomplete="off" className="register-input-new register-user-fucion" id="mail-input--modal-send"/>
            <label className="register-user-label register-user-fucion">Correo</label>
          </div>
          <div className="register-input-group">
            <input required="" type="text" name="text" autocomplete="off" className="register-input-new register-user-fucion" id="city-input--modal-send"/>
            <label className="register-user-label register-user-fucion">Ciudad</label>
          </div>
          {/* <label className="labels-register" for="">Contraseña </label>
            <input className="input-right" id="pass-input--modal-send" type="password" placeholder="Ingrese su contraseña  🔒"/>
          <label className="labels-register" for="">Correo </label>
            <input className="input-right" id="mail-input--modal-send" type="text" placeholder="Ingrese su correo  °‿‿°"/>
          <label className="labels-register" for="">Ciudad </label>
            <input className="input-right" id="city-input--modal-send" type="text" placeholder="Ingrese su ciudad °‿‿°"/> */}
        </div>{/* <!-- <p id="access-parr">T</p> --> */}
      </div> {/* <!-- place-right --> */}
    </form>
  </div>{/* <!-- modal login --> */}
</div> {/* <!-- contenedor --> */}
</>
  )
}
