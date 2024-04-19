import React from 'react';

export default function MenuLateral() {
    return (
        <>
        <div className='container-lateral active'>
            <ul className='ul-lateral'>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/about">About Me</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
            </ul>
        </div>
        </>
    )
}
