'use client'
import Image from 'next/image'
import { Slider } from 'radix-ui'
import React from 'react'

function Hero() {
  return (
    <div className='w-full wrpper'>
      <Slider>
        <div>
            <Image alt='banner-imege' height={100} width={1000} src='../public/images/logo.png'></Image>
        </div>
      </Slider>
    </div>
    //npm install react-slick --seve
    // npm install slick-carasol

  )
}

export default Hero
