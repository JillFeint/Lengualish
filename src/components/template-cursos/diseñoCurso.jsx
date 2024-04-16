import React from 'react';
import crobootsderech from '../../img/crobootsderech.png';
import verboTobe1 from '../../img/diseño-curso/verbo-tobe-1.jpg';
import verbpTobe2 from '../../img/diseño-curso/verbo-tobe-2.jpg';
import verboTobe3 from '../../img/diseño-curso/verbo-tobe-3.jpg';

export default function DiseñoCurso() {
    return (
        <>
        <div className='head-diseñoCurso'>
            <div className='head-diseñoCurso-left'>
                <h2>Verbo To Be</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse placeat a libero dolorum
                iure, saepe qui veniam dicta, laborum provident minus magnam? Similique rem consequatur alias
                ex, expedita iste. Architecto?</p>
            </div>
            <div className='head-diseñoCurso-right'>
                <img src={crobootsderech} />
            </div>
        </div>
        <div className='section-diseñoCurso'>
            <div className='section-diseñoCurso-left'>
                <img src={verboTobe1} />
            </div>
            <div className='section-diseñoCurso-center'>
                <img src={verbpTobe2} />
            </div>
            <div className='section-diseñoCurso-right'>
                <img src={verboTobe3} />
            </div>
        </div>
        <div className='section2-diseñoCurso'>
            <div className='div-diseñoCurso'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptates ad amet
                reprehenderit veniam aperiam eos distinctio nobis voluptate eligendi excepturi esse non !</p>
            </div>
        </div>
        </>
    )
    }
