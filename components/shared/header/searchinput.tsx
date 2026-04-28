'use client'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'

function SearchInput() {
    const [value,setvalue]=useState('');
  return (
    <div className='w-full'>
      <Input defaultValue={value} onChange={(e)=>setvalue(e.target.value)} placeholder='SearchProdect'/>
    </div>
  )
}

export default SearchInput
