import React from 'react'
import './ofertas.css'

export const Ofertas = () => {
  return (
      <>
          <section className='ofert container'>
              <article className='ofert-1'>
                  <div className='ofert-img'>
                      <img src="/images/f1.png" alt="" />
                  </div>
                  <div className="ofert-txt">
                      <h3>Producto 1</h3>
                      <a href="#" className='btn-2'>Información</a>
                  </div>
                  
              </article>
              <article className='ofert-1'>
                  <div className='ofert-img'>
                      <img src="/images/f2.png" alt="" />
                  </div>
                  <div className="ofert-txt">
                      <h3>Producto 2</h3>
                      <a href="#" className='btn-2'>Información</a>
                  </div>
                  
              </article>
              <article className='ofert-1'>
                  <div className='ofert-img'>
                      <img src="/images/f3.png" alt="" />
                  </div>
                  <div className="ofert-txt">
                      <h3>Producto 3</h3>
                      <a href="#" className='btn-2'>Información</a>
                  </div>
                  
              </article>
          </section>
      </>
  )
}
