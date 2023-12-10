import React from 'react'
import './registro.css'
import { NavLink } from 'react-router-dom'

export const Registro = () => {
  return (
    <main className='contenedor-Login'>
      <section className='login'>
        <section className='info'>
          <p className='txt-1'> <span className='palabra-clave'>Gracias</span> por visitarnos</p>
          <h2>Bienvenid@ a  <span className='palabra-clave'>STYLIFY</span></h2>
          <hr />

          <p className='txt-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore adipisci harum dolores provident! Eaque, voluptatem. Illo quis, enim molestias repellat harum adipisci mollitia soluta sunt id voluptatibus, corporis dolore. Voluptate!
          </p>

        </section>
        <section className='formulario' >
          <form action="">
            <h1 className='titulo-login'>Crear cuenta</h1>
            <section className='inputs'>

              <input className='inputUsuario' type="text" placeholder='Usuario' />

              <input className='inputContraseña' type="password" placeholder='Email' />
              <input className='inputContraseña' type="password" placeholder='Contraseña' />
              <input className='inputContraseña' type="password" placeholder='Repetir contraseña' />
            </section>
           
            <section className='boton-formulario'>
              <a className='boton-aceptar'>Registrarme</a>
            </section>
            <section className='enlace-contraseña'>
              <NavLink to={'/login'} className='enlace'>Ya tengo cuenta <span className='palabra-clave'>Iniciar sesión</span></NavLink>
            </section>
            <section className="back-button">
              <NavLink to={'/login'} className='enlace'>Seguir comprando</NavLink>
            </section>
          </form>
        </section>
      </section>

    </main>
  )
}
