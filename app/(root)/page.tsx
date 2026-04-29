

import React from 'react'
import ProdectList from '@/components/shared/prodect-list'
function Mine() {
  const list=[
   {
     id:1,
    name:'somsoung-12',
   },
    {
     id:2,
    name:'somsoung-30',
   },
    {
     id:3,
    name:'somsumng-10',
   },
    {
     id:4,
    name:'samsoung-11',
   },
    {
     id:5,
    name:'samsoung-13',
   },
    {
     id:6,
    name:'samsoung-15',
   },
  ]
  return (
    <div>
      <ProdectList list={list} title="new arrivalls"/>
    </div>
  )
}

export default Mine
