import React, { useEffect, useRef } from 'react';
import crobootsderech from '../../img/crobootsderech.png';
import cocoright from '../../img/cocoright.jpg'
import logoboots from '../../img/logoboots.png'

export default function Carrusel() {
    const carouselRef = useRef(null);
    const wrapperRef = useRef(null);
    
    useEffect(() => {
        const carousel = carouselRef.current;
        const firstCardWidth = carousel ? carousel.querySelector(".card").offsetWidth : 0;
        let isDragging = false;
        let startX;
        let startScrollLeft;

        const onDragStart = (e) => {
        isDragging = true;
        startX = e.pageX - carousel.offsetLeft;
        startScrollLeft = carousel.scrollLeft;
        };
    
        const onDragMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startX) * 2; //scroll-fast
        carousel.scrollLeft = startScrollLeft - walk;
        };

        const onDragEnd = () => {
        isDragging = false;
        };

        carousel.addEventListener('mousedown', onDragStart);
        carousel.addEventListener('mousemove', onDragMove);
        window.addEventListener('mouseup', onDragEnd);

      // Limpiar listeners para evitar leaks de memoria
        return () => {
        carousel.removeEventListener('mousedown', onDragStart);
        carousel.removeEventListener('mousemove', onDragMove);
        window.removeEventListener('mouseup', onDragEnd);
        };
    }, []);

    const scrollCarousel = (direction) => {
        const { current: carousel } = carouselRef;
        if (!carousel) return;

        const scrollAmount = direction === 'left' ? -carousel.offsetWidth / 3 : carousel.offsetWidth / 3;
        carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    };

    return (
        <>
        <div className="body-carrusel">
            <div className='wrapper' ref={wrapperRef}>
                <ul className="carousel" ref={carouselRef}>
                    <li className="card">
                        <div className="card-img"><img src={cocoright} draggable="false"/></div>
                        <h2>Blanche Pearson</h2>
                        <span>Sales Manager</span>
                    </li>
                    <li className="card">
                        <div className="card-img"><img src={crobootsderech} draggable="false"/></div>
                        <h2>Blanche Pearson</h2>
                        <span>Sales Manager</span>
                    </li>
                    <li className="card">
                        <div className="card-img"><img src={logoboots} draggable="false"/></div>
                        <h2>Blanche Pearson</h2>
                        <span>Sales Manager</span>
                    </li>
                    <li className="card">
                        <div className="card-img"><img src={crobootsderech} draggable="false"/></div>
                        <h2>Blanche Pearson</h2>
                        <span>Sales Manager</span>
                    </li>
                    <li className="card">
                        <div className="card-img"><img src={cocoright} draggable="false"/></div>
                        <h2>Blanche Pearson</h2>
                        <span>Sales Manager</span>
                    </li>
                    <li className="card">
                        <div className="card-img"><img src={logoboots} draggable="false"/></div>
                        <h2>Blanche Pearson</h2>
                        <span>Sales Manager</span>
                    </li>
                </ul>
                <i id="left" className="fa-solid fa-angle-left" onClick={() => scrollCarousel('left')}></i>
                <i id="right" className="fa-solid fa-angle-right" onClick={() => scrollCarousel('right')}></i>
            </div>
            </div>
        </>
    );
}





