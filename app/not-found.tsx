import { Button } from '@/components/ui/button'
import { APP_NAME } from '@/constants'
import Image from 'next/image'
import React from 'react'

function notfound() {
  return (
    <div className='w-full min-h-screen flex justify-center items-center'>
      <div className=' shadow-md border py-4 px-8 flex flex-col items-center space-y-3.5 rounded-md h'>
          <Image src="/images/logo.png" className=' rounded-md'  alt={APP_NAME} height={100} width={100}></Image>
          <p className='text-red-500 font-medium text-base '>Not-found</p>
          <p className=''>the page you are looking are not found</p>
          <Button variant={"default"}>Go To Home</Button>
      </div>
    </div>
  ) 
}

export default notfound
