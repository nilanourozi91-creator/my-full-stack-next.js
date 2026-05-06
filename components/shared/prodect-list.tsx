'use client'

import React from 'react'
import ProdeactCard from './products/prodeactCard'

function ProdectList({list,title}:{list:any[],title?:string}) {
  return (
    <div className='my-10'>
      <h2 className='h2-bold mb-4'>{title || "New Arrivals"}</h2>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {list.map((item:any) => (
          <ProdeactCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default ProdectList