import React from 'react'

import pedri from  '/src/assets/pedri.png'
import vini from  '/src/assets/vini.png'
import fc24 from  '/src/assets/logos/fc24.webp'
import microsoft from  '/src/assets/logos/microsoft.png'

export const Hero = () => {
  return (
    <section className=' bg-[#f0f0f0] h-96   overflow-hidden grid  gap-3 grid-cols-1 xl:grid-cols-3 lg:px-40 '>
      <div className=' lg:flex hidden lg:justify-center lg:items-center'>
      <img src={fc24} alt="" className=' h-20 lg:h-26 grayscale-[50%] hover:grayscale-0 hover:scale-110' />
      <img src={microsoft} alt="" className=' h-20 lg:h-26 grayscale-[50%] hover:grayscale-0 hover:scale-110' />
      <img src={microsoft} alt="" className=' h-20 lg:h-26 grayscale-[50%] hover:grayscale-0 hover:scale-110' />
      <img src={microsoft} alt="" className=' h-20 lg:h-26 grayscale-[50%] hover:grayscale-0 hover:scale-110' />
      </div>
     
      <div className=' flex justify-center lg:items-center lg:justify-center items-end'>
      <img src={pedri} alt="" className='  h-72 lg:h-96 grayscale-[50%] hover:grayscale-0 hover:scale-110' />
        <img src={vini} alt="" className='  h-72 lg:h-96 grayscale-[50%] hover:grayscale-0 hover:scale-110' />
    

      </div>
      <div className='lg:flex hidden lg:justify-center lg:items-center'>
      <img src={fc24} alt="" className=' h-20 lg:h-26 grayscale-[50%] hover:grayscale-0 hover:scale-110' />
      <img src={fc24} alt="" className=' h-20 lg:h-26 grayscale-[50%] hover:grayscale-0 hover:scale-110' />
      </div>
     
       
        
    </section>
    
  )
}
