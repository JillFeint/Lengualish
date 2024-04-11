import React from 'react'
import cocologin from '../../img/cocoright.jpg'

export default function Perfil() {
    return (
        <>
        <section className='section-perfil'>
            <h2>Perfil</h2>
            <div className='container-perfil'>
                <div className='perfil-main-left'>
                    <img src={cocologin} />
                    <button className="learn-more">
                        <span className="circle" aria-hidden="true">
                            <span className="icon arrow"></span>
                        </span>
                        <span className="button-text">Editar Perfil</span>
                    </button>
                    <h4>nivel de ingles</h4>
                </div>
                <div className='perfil-main-center'>
                    <div className='div-perfil-main-center'>
                        <h3 className='h3-perfil-center-1'>Username</h3>
                        <h3 className='h3-perfil-center-2'>mail</h3>
                        <h3 className='h3-perfil-center-3'>phone</h3>
                        <h3 className='h3-perfil-center-4'>achievements</h3>
                    </div>
                </div>
                <div className='perfil-main-right'>
                    <div className='div-perfil-main-right'>
                    <button className="cta cta-1">
                        <span className="hover-underline-animation">Privacidad</span>
                        <svg id="arrow-horizontal" xmlns="http://www.w3.org/2000/svg" width="30" height="10" viewBox="0 0 46 16">
                            <path id="Path_10" data-name="Path 10" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" transform="translate(30)"></path>
                        </svg>
                    </button>
                    <button className="cta cta-2">
                        <span className="hover-underline-animation">Notificaciones</span>
                        <svg id="arrow-horizontal" xmlns="http://www.w3.org/2000/svg" width="30" height="10" viewBox="0 0 46 16">
                            <path id="Path_10" data-name="Path 10" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" transform="translate(30)"></path>
                        </svg>
                    </button>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
