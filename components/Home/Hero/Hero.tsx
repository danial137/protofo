import { BaseInfo } from '@/Data/data'
import React from 'react'

const Hero = () => {
  return (
      <div className='w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#0f0715] overflow-hidden relative'>
          <div className='flex justify-center flex-col w-4/5 h-full mx-auto '>
              <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-12 '>
                  {/* content */}
                  <div>
                      <h1 className='text-2xl md:text-3xl lg:text-4xl text-gray-300 font-semibold'>I am {BaseInfo.name}
                          
                      </h1>
                      <h1 className='text-bg text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold md:leading-[3.5rem] xl:leading-[4rem] text-white'>{BaseInfo.position }</h1>
                  </div>
                  {/* image content */}
                  <div></div>
          </div>
          </div>
    </div>
  )
}

export default Hero