'use client'
import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
    <div className=''>
      <div>
        <Image alt='banner-photo' src="/images/banner-1.jpg" height={200} width={200}></Image>
      </div>
      <div>
        <Image alt='banner-photo' src="/images/banner-2.jpg" height={200} width={200}></Image>
      </div>
    </div>
  )
}

export default Hero
