import React from 'react'
import logo from '/src/assets/laliga.svg'



export const Navbar = () => {
  return (
    <>
    <nav className='flex items-center justify-center p-4 bg-[#ffffff] gap-5'>
             
            <a className=' text-black font-bold hidden md:inline text-base' href="">EN DIRECTO</a>
            <a className=' text-black font-bold   hidden md:inline text-base' href="">CLASIFICACIÓN</a>
            <img className='h-12 mx-16 ' src={logo}  alt="LaLiga logo" />
            <a className=' text-black font-bold  hidden md:inline text-base' href="">RESULTADOS</a>
            <a className=' text-black font-bold  hidden md:inline text-base' href="">PATROCINADORES</a>
        

    </nav>
    
   
    </>
  )
}
