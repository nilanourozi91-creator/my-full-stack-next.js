import React from 'react'
import { FormatDistanceFn, formatDistanceToNow } from 'date-fns'
import { Star } from 'lucide-react';
function ReviewCard() {
  const Allcomment=[
    {
      comment:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt earum reiciendis nulla eveniet rerum fugiat, nemo nobis sed eaque possimus sint natus optio consectetur quidem doloribus facere! Earum, dolorum magni.',
      id:1,
      user_name:'samir ',
       email:'ali@exmple.com',
      rating:10,
      create_at:'2026-01-13 4:11:01'
    },
    {
      comment:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt earum reiciendis nulla eveniet rerum fugiat, nemo nobis sed eaque possimus sint natus optio consectetur quidem doloribus facere! Earum, dolorum magni.',
      id:1,
      user_name:'mohamad',
       email:'mohamad@exmple.com',
      rating:10,
      create_at:'2026-05-15 8:5:02'
    },
    {
      comment:'Are, adipisicing elit. Incidunt earumnobis sed eaque possimus sint natus optio consectetur quidem doloribus facere! Earum, dolorum magni.',
      id:1,
      email:'reza@exmple.com',
      user_name:'Ali Reza',
      rating:10,
      create_at:'2026-05-14 10:34:02'
    },
  ]
  // const date=Date();
  // const datetime='2026-05-15 12:57:05'
  return (
    <div className=' grid gap-y-7'>
      {Allcomment.map((x:any, index:number)=>(
        <div key={index} className='flex gap-y-7  justify-between w-full p-4 border rounded-md'>
        <div className='flex flex-col space-y-4 text-sm flex-1 '>
          <span className=''>
         <span className='p-2 px-3 leading-0 bg-gray-300 w-fit text-white rounded-full'>
            {x.user_name.slice(0,1).toUpperCase()}
          </span><span></span>
          {x.user_name}
         </span>
         <span className='text-xs text-muted-foreground'>
          {x.email}
         </span>
         <p className='my-2 text-base border-l pl-2 '>{x.comment}</p>
        </div>
        <div className='flex flex-col gap-y-1.5 justify-between items-end '>
          <span className='flex-start'>{Array.from({length:5},(_,i)=>(
            <span key={i}><Star className='text-yellow-400'/></span>
          ))}</span>
          <span className='text-sm text-muted-foreground'>{formatDistanceToNow(x.create_at,{addSuffix:true})}</span>
        </div>
        </div>
      ))}
    </div>
  )
}

export default ReviewCard
