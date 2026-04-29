import { Button } from '@/components/ui/button'
import { APP_NAME } from '@/constants'
import Image from 'next/image'
import React from 'react'

function notfound() {
  return (
    <div className='w-full min-h-screen flex justify-center items-center'>
      <div className=' shadow-md border'>
          <Image src="/images/logo.png" className=' rounded-md' alt={APP_NAME} height={100} width={100}></Image>
          <h1 className='text-'>Not-found</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni debitis corporis, distinct</p>
          <Button className='bg-black text-white h-fit w-fit'>go to home</Button>
      </div>
    </div>
  )
}

export default notfound
