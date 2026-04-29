import React from 'react'
import ProdeactCard from './products/prodeactCard'
function ProdectList({list,title}:{list:any,title:any}) {
  return (
    <div className='my-10'>
      {list.map((list:any)=>(
            <ProdeactCard  carddata={list}/> 
      ))};
     
    </div>
  )
}

export default ProdectList
