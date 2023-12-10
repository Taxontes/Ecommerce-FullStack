import React from 'react'
import './login.css'

export const Login = () => {
    return (
        <>
            <main className='login'>
                <section className='info'>
                    <p className='txt-1'>Gracias por visitarnos</p>
                    <h2>Bienvenido de nuevo</h2>
                    <hr />

                    <p className='txt-2'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore adipisci harum dolores provident! Eaque, voluptatem. Illo quis, enim molestias repellat harum adipisci mollitia soluta sunt id voluptatibus, corporis dolore. Voluptate!
                    </p>

                </section>
                <section className='formulario' >
                    <form action="">
                        <h1 className='titulo-login'>Iniciar sesión</h1>
                        <section className='inputs'>
                           
                            <input className='inputUsuario' type="text" placeholder='Usuario' />

                            <input className='inputContraseña' type="password" placeholder='Contraseña' />
                        </section>
                        <section className='remember-password'>
                            <label htmlFor="">¿Recordar contraseña?</label>
                            <input type="checkbox" />

                        </section>
                        <section className='boton-formulario'>
                            <a className='boton-aceptar'>Aceptar</a>
                        </section>
                        <section className='enlace-contraseña'>
                            <a href="#" className='enlace'>¿Has olvidado la contraseña?</a>
                            <a href="#" className='enlace'>Aún no tengo cuenta <span className='palabra-clave'>Registrarme</span></a>
                        </section>
                    </form>
                </section>
            </main>

        </>
    )
}
