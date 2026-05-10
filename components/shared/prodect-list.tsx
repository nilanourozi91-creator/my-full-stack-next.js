'use client'

import React from 'react'
import Link from 'next/link'
import ProdeactCard from './products/prodeactCard'
import { Button } from '../ui/button'

type Props = {
  list: any[]
  currentPage: number
  lastPage: number
  title?: string
}

function ProdectList({
  list,
  currentPage,
  lastPage,
  title,
}: Props) {
  return (
    <div className='my-10'>
      <h2 className='h2-bold mb-4'>
        {title || 'New Arrivals'}
      </h2>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {list.map((item: any) => (
          <ProdeactCard
            key={item.id}
            item={item}
          />
        ))}
      </div>

      {/* PAGINATION */}
      <div className='flex justify-center items-center gap-4 py-10'>
        <Link href={`?page=${currentPage - 1}`}>
          <Button disabled={currentPage === 1}>
            Prev
          </Button>
        </Link>

        <span className='font-semibold'>
          {currentPage} / {lastPage}
        </span>

        <Link href={`?page=${currentPage + 1}`}>
          <Button disabled={currentPage === lastPage}>
            Next
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default ProdectList