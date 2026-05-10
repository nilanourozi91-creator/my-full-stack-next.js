import ProdectList from '@/components/shared/prodect-list';
import { GetAllProdect } from '@/lib/actions/prodect.action'
import React from 'react'

 async function ProdectPage() {
   const data= await GetAllProdect();
  return (
    <div>
      <ProdectList list={data.data} />
    </div>
  )
}

export default ProdectPage
