import React from 'react'
import logo from '/src/assets/laliga.svg'



export const Navbar = () => {
  return (
    <>
    <nav className='flex items-center justify-center p-4 bg-[#ffffff] gap-5'>
             
            <a className=' text-black font-bold md:inline lg:text-base text-xs' href="#directo">EN DIRECTO</a>
            <a className=' text-black font-bold   hidden md:inline lg:text-base' href="#tabla">CLASIFICACIÓN</a>
            <img className='h-12 lg:mx-16 mx-1 ' src={logo}  alt="LaLiga logo" />
            <a className=' text-black font-bold   md:inline lg:text-base text-xs' href="#videos">RESÚMENES</a>
            <a className=' text-black font-bold  hidden md:inline lg:text-base' href="#resultados">RESULTADOS</a>
            
        

    </nav>
    
   
    </>
  )
}
