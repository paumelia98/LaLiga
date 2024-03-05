import React from 'react'
import logo from '/src/assets/laliga.svg'

import pedri from  '/src/assets/pedri.png'
import vini from  '/src/assets/vini.png'
import doub from  '/src/assets/doub.png'
import gerard from  '/src/assets/gerard.png'
import iago from  '/src/assets/iago.png'
export const Navbar = () => {
  return (
    <>
    <nav className='flex items-center justify-center p-4 bg-[#110404] gap-5'>
             
            <a className=' text-white font-bold hidden md:inline text-base' href="">EQUIPOS</a>
            <a className=' text-white font-bold   hidden md:inline text-base' href="">CLASIFICACIÓN</a>
            <img className='h-12 mx-16' src={logo}  alt="LaLiga logo" />
            <a className=' text-white font-bold  hidden md:inline text-base' href="">JUGADORES</a>
            <a className=' text-white font-bold  hidden md:inline text-base' href="">NOTICIAS</a>
        

    </nav>
    
    <section className='hero h-96 flex justify-center overflow-hidden'>

        <img src={pedri} alt="" className=' h-96 grayscale hover:grayscale-0 hover:scale-110' />
        <img src={vini} alt="" className=' h-96 grayscale hover:grayscale-0 hover:scale-110' />
        <img src={gerard} alt="" className=' h-96 grayscale hover:grayscale-0 hover:scale-110' />
        <img src={doub} alt="" className=' h-96 grayscale hover:grayscale-0 hover:scale-110' />
      
        <img src={iago} alt="" className=' h-96 grayscale hover:grayscale-0 hover:scale-110' />
    </section>
    </>
  )
}
