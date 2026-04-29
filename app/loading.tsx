import Image from 'next/image'
import React from 'react'

function Loading() {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <Image width={100} height={100} src="/loader.gif" alt='please with........'></Image>
    </div>
  )
}

export default Loading
