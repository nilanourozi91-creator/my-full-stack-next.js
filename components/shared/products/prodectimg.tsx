'use client'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import React, { useState } from 'react'

function ProdectImg({images}:{images:any[]}) {
    const [index,setindex]=useState<any>(0)
  return (
    <div className='w-full '>
       <div>
         <Image className='w-full object-cover h-[50vh] rounded-sm'
           src={`http://localhost:8000/storage/${images[index].img_url}`}
           height={500}
           width={500}
           alt={`${images[index]}product`}              
           unoptimized
            ></Image>
       </div>
       <div className='flex-between gap-1.5 pt-3 w-full '>
            <Image className={cn('rounded-md border-2 h-40 w-40',index===0? 'border-gray-400':'')} src={`http://localhost:8000/storage/${images[0].img_url}`} onClick={()=>setindex(0)} height={100} width={100} alt={`${images[index]}product`} unoptimized></Image>
            <Image className={cn('rounded-md border-2 h-40 w-40',index===1? 'border-gray-400':'')} src={`http://localhost:8000/storage/${images[1].img_url}`} onClick={()=>setindex(1)} height={100} width={100} alt={`${images[index]}product`} unoptimized></Image>
       </div>
    </div>
   
  )
}

export default ProdectImg
