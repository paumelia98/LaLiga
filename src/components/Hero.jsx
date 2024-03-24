import React from 'react'

import pedri from  '/src/assets/pedri.webp'
import vini from  '/src/assets/vini.webp'
import fc24 from  '/src/assets/sponsors/fc24.webp'
import microsoft from  '/src/assets/sponsors/microsoft.webp'
import sanmiguel from  '/src/assets/sponsors/sanmiguel.webp'
export const Hero = () => {
  return (
    <section className=' bg-[#f0f0f0] h-96   overflow-hidden grid  gap-3 grid-cols-1 xl:grid-cols-3 lg:px-40 '>
      <div className=' lg:flex hidden lg:justify-center lg:items-center'>
      <img src={fc24} alt="" className=' h-20 lg:h-26 grayscale-[50%] hover:grayscale-0 hover:scale-110' loading="lazy" />
      <img src={microsoft} alt="" className=' h-20 lg:h-26 grayscale-[50%] hover:grayscale-0 hover:scale-110' loading="lazy" />
      
      </div>
     
      <div className=' flex justify-center lg:items-center lg:justify-center items-end'>
      <img src={pedri} alt="" className='  h-72 lg:h-96 grayscale-[50%] hover:grayscale-0 hover:scale-110' loading="lazy" />
        <img src={vini} alt="" className='  h-72 lg:h-96 grayscale-[50%] hover:grayscale-0 hover:scale-110' loading="lazy" />
    

      </div>
      <div className='lg:flex hidden lg:justify-center lg:items-center'>
      <img src={sanmiguel} alt="" className=' h-20 lg:h-26 grayscale-[50%] hover:grayscale-0 hover:scale-110' loading="lazy" />
      <img src={fc24} alt="" className=' h-20 lg:h-26 grayscale-[50%] hover:grayscale-0 hover:scale-110' loading="lazy" />
      </div>
     
       
        
    </section>
    
  )
}
