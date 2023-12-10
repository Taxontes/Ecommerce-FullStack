import React from 'react'
import { IconMenu } from '../../icons/Icons'
import { NavLink } from 'react-router-dom'
import './header.css'

export const Header = () => {
    return (
        <>
            <header className='header'>
                <div className="menu container">
                    <a href="#" className='logo'>Stylify</a>
                    <input type="checkbox" id='menu' />
                    <label htmlFor="menu">
                        <IconMenu />
                    </label>
                    <nav className='navbar'>
                        <ul>
                            <li><NavLink to={'/'}>Inicio</NavLink></li>
                            <li><NavLink to={'/dashboard'}>Servicios</NavLink></li>
                            <li><NavLink to={'/productos'}>Productos</NavLink></li>
                            <li><NavLink to={'/contacto'}>Contácto</NavLink></li>
                        </ul>
                    </nav>
                  
                    <div hidden>
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
                <nav className='navbar'>
                    <ul>
                            <li><NavLink to={'/login'}>Iniciar sesión</NavLink></li>
                      
                    </ul>
                </nav>
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
