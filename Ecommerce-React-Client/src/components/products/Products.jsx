import React from 'react'
import './products.css'

export const Products = () => {
    return (
        <>
            <main className='products container' id='lista-1'>
                <h2>Productos destacados</h2>
                <section className='products-content'>
                    <article className='product'>
                        <img src="/images/1.png" alt="" />
                        <div className='product-txt'>
                            <h3>Titulo</h3>
                            <p>descripcion</p>
                            <p className='precio'>precio</p>
                            <a href="#" className='btn-2'>Agregar carrito</a>
                        </div>
                    </article>
                    <article className='product'>
                        <img src="/images/2.png" alt="" />
                        <div className='product-txt'>
                            <h3>Titulo</h3>
                            <p>descripcion</p>
                            <p className='precio'>precio</p>
                            <a href="#" className='btn-2'>Agregar carrito</a>
                        </div>
                    </article>
                    <article className='product'>
                        <img src="/images/3.png" alt="" />
                        <div className='product-txt'>
                            <h3>Titulo</h3>
                            <p>descripcion</p>
                            <p className='precio'>precio</p>
                            <a href="#" className='btn-2'>Agregar carrito</a>
                        </div>
                    </article>
                    <article className='product'>
                        <img src="/images/4.png" alt="" />
                        <div className='product-txt'>
                            <h3>Titulo</h3>
                            <p>descripcion</p>
                            <p className='precio'>precio</p>
                            <a href="#" className='btn-2'>Agregar carrito</a>
                        </div>
                    </article>
                    <article className='product'>
                        <img src="/images/5.png" alt="" />
                        <div className='product-txt'>
                            <h3>Titulo</h3>
                            <p>descripcion</p>
                            <p className='precio'>precio</p>
                            <a href="#" className='btn-2'>Agregar carrito</a>
                        </div>
                    </article>
                    <article className='product'>
                        <img src="/images/6.png" alt="" />
                        <div className='product-txt'>
                            <h3>Titulo</h3>
                            <p>descripcion</p>
                            <p className='precio'>precio</p>
                            <a href="#" className='btn-2'>Agregar carrito</a>
                        </div>
                    </article>

                </section>
            </main>


        </>
    )
}
