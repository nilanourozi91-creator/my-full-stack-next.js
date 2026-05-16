'use client'

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import ProdectPrice from './prodect-price'

function ProdeactCard({ list }: { list: any }) {
  return (
    <Card className="group overflow-hidden rounded-2xl border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* img-all*/}
      <CardHeader className="p-0 relative bg-cover object-cover">

        <Link href={`prodect/${list.id}`}>
          <div className="relative w-full h-[40vh]  object-cover overflow-hidden">
            <Image
              src={`http://localhost:8000/storage/${list.imgall[0].img_url}`}
              alt="product"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              unoptimized
            />
          </div>
        </Link>

        {/* stock-be */}
        <span
          className={`absolute top-3 left-3 text-xs px-2 py-1 rounded-full text-white ${
            list.stock > 0 ? 'bg-green-500' : 'bg-red-500'
          }`}
        >
          {list.stock > 0 ? 'In Stock' : 'Out of Stock'}
        </span>
      </CardHeader>

      {/* CONTENT */}
      <CardContent className="p-4 space-y-2">
        
        {/* BRAND */}
        <p className="text-xs text-gray-500 uppercase tracking-wide">
          {list.prodect_d.brand}
        </p>

        {/* NAME */}
        <h3 className="text-sm font-semibold line-clamp-2">
          {list.name}
        </h3>

        {/* PRICE + STOCK */}
        <div className="flex items-center justify-between pt-2">
          <ProdectPrice price={list.price.toString()} />

          <span className="text-xs text-gray-500">
            {list.stock} pcs
          </span>
        </div>

      </CardContent>
    </Card>
  )
}

export default ProdeactCard