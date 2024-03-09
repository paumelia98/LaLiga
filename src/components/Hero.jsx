import React from 'react'

import pedri from  '/src/assets/pedri.png'
import vini from  '/src/assets/vini.png'

export const Hero = () => {
  return (
    <section className='hero h-96 flex justify-center overflow-hidden'>

        <img src={pedri} alt="" className=' h-96 grayscale-[50%] hover:grayscale-0 hover:scale-110' />
        <img src={vini} alt="" className=' h-96 grayscale-[50%] hover:grayscale-0 hover:scale-110' />
        
    </section>
  )
}
