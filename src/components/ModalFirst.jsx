import React from 'react'
import referee from '/src/assets/referee.png'

export const ModalFirst = ({ onClose }) => {
  return (
    <div className="flex items-center justify-center w-full h-full z-50 fixed">
      <div className='relative bg-[#8b2622] rounded-md p-6 pb-0 grid grid-cols-2 max-w-[1000px]'>
        
      
        <button 
          onClick={onClose} 
          className='absolute top-0 right-0 mt-4 mr-4 bg-transparent text-white font-bold text-2xl leading-none hover:text-gray-400'
        >
          &times; {/* Entidad HTML para "X" */}
        </button>

        <div className='flex justify-center items-center'> 
          <img src={referee} alt="Referee" className='h-auto w-full'/> 
        </div>
        
        <div className=''>
          <p className='text-white text-6xl font-bold mb-12'>¡ATENCIÓN!</p>
          <p className='font-semibold text-xl text-white'>Este sitio web ha sido desarrollado por mi (Pau Melià) con fines educativos y opera gracias a una API gratuita. Para evitar superar el límite de solicitudes permitidas por minuto, te solicitamos amablemente evitar recargar la página innecesariamente. Esta web obviamente no es oficial.</p>
          <button onClick={onClose} className='mt-4 bg-[#0b1121] text-white font-bold py-2 px-4 rounded transition-all hover:scale-105'>Entendido</button>

        </div>
      </div>
    </div>
  )
}

    
   
  

