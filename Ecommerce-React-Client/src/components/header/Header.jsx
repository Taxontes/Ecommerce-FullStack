import React from 'react'
import './header.css'
import { IconMenu } from '../../icons/Icons'

export const Header = () => {
    return (
        <>
            <header className='header'>
                <div className="menu container">
                    <a href="#" className='logo'>Stylify</a>
                    <input type="checkbox" id='menu' />
                    <label htmlFor="menu">
                       <IconMenu/> 
                    </label>
                    <nav className='navbar'>
                        <ul>
                            <li><a href="#">Inicio</a></li>
                            <li><a href="#">Servicios</a></li>
                            <li><a href="#">Productos</a></li>
                            <li><a href="#">Contácto</a></li>
                        </ul>
                    </nav>
                <div>
                    <ul>
                        <li className='submenu'>
                            <img src="/images/car.svg" alt="" id='img-carrito' />
                            <div id='carrito' className="carrito">
                                <table id='lista-carrito'>
                                    <thead>
                                        <tr>
                                            <th>Imagen</th>
                                            <th>Nombre</th>
                                            <th>Precio</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <a
                                                        href="#" id='vaciar-carrito' className='btn-2'>
                                                        Vaciar carrito
                                                    </a>
                                                </td>
                                            </tr> 
                                    </tbody>
                                </table>
                            </div>
                        </li>
                    </ul>
                </div>
                </div>
            <section className='header-content container'>
                <header className='header-img'>
                    <img src="/images/right.png" alt="" />
                </header>
                <article className='header-txt'>
                    <h1>Ofertas especiales</h1>
                    <p>Estrena nuestros mejores productos</p>
                    <a href="#" className='btn-1'>Información</a>
                </article>
            </section>
            </header>

        </>
    )
}
