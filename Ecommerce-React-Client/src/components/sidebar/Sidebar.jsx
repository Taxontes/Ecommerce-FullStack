import React from 'react'
import './sidebar.css'
import { NavLink } from 'react-router-dom'
import { FaUser } from "react-icons/fa";
import { GiClothes } from "react-icons/gi";
import { MdSpaceDashboard } from "react-icons/md";
import { FaShuttleVan } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";

export const Sidebar = () => {
    return (
        <>
            <section className='sidebar'>
                <nav className='nav-sidebar'>
                    <ul>
                        <li>
                            <a href="#" className='logo-sidebar'>STYLIFY</a>
                           <span className='nav-iten-main'></span>
                        </li>
                        <li className='enlaces-sidebar'>
                            <a href="#" className='enlace-sidebar'>
                                <i className="icono-sidebar"><MdSpaceDashboard /></i>
                                <span className='nav-iten'>Dasboard</span>
                            </a>
                        </li>
                        <li className='enlaces-sidebar'>
                            <a href="#" className='enlace-sidebar'>
                                <i className="icono-sidebar"><GiClothes /></i>
                                <span className='nav-iten'>Productos</span>
                            </a>
                        </li>
                        <li className='enlaces-sidebar'>
                            <a href="#" className='enlace-sidebar'>
                                <i className="icono-sidebar"><FaUser /></i>
                                <span className='nav-iten'>Clientes</span>
                            </a>
                        </li>
                        <li className='enlaces-sidebar'>
                            <a href="#" className='enlace-sidebar'>
                                <i className="icono-sidebar"><FaShuttleVan /></i>
                                <span className='nav-iten'>Pedidos</span>
                            </a>
                        </li>
                        <li className='enlaces-sidebar'>
                            <a href="#" className='enlace-sidebar'>
                                <i className="icono-sidebar"><FaShuttleVan /></i>
                                <span className='nav-iten'>Pedidos</span>
                            </a>
                        </li>
                        <div className='enlace-salir'>
                            <li className='enlaces-sidebar'>
                                <NavLink to={'/'} className='enlace-sidebar'>
                                    <i className="icono-sidebar"><IoIosLogOut /></i>
                                    <span className='nav-iten'>Salir</span>
                                </NavLink>
                            </li>

                        </div>
                   
                    </ul>  
                </nav>
           </section>
        </>
    )
}
