

import React from 'react'
import ProdectList from '@/components/shared/prodect-list'
import MySlider from '@/components/shared/slick'
import { GetAllProdect } from '@/lib/actions/prodect.action'
export default async function Mine() {
      const list = await GetAllProdect()
  return (
    <div>
      <MySlider/>
        <ProdectList list={list} title="New Arrivals" />
    </div>
  )
}

