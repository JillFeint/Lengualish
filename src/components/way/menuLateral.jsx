import React from 'react';

export default function MenuLateral({show}) {
    return (
        <>
        <div className={show ? 'container-lateral active' : 'container-lateral'}>
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
