import ProdectList from '@/components/shared/prodect-list';
import FormReview from '@/components/shared/products/formreview';
import ProdectPrice from '@/components/shared/products/prodect-price';
import ProdectImg from '@/components/shared/products/prodectimg';
import ReviewCard from '@/components/shared/products/reviewCard';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { GetAllProdect, GetSingleProdect } from '@/lib/actions/prodect.action';
import Image from 'next/image';
import React from 'react'

 async function Singleprodect({params}:{params:Promise<{id:number}>}) {
   const {id}=await params;
   const list =await GetSingleProdect(id);
   const prodects= await GetAllProdect();
  return (
    <div>
      <section>
        <div className='w-full grid grid-cols-1  p-4 md:grid-cols-5 gap-4'>
          <div className='col-span-2 md:max-w-full'>
            <ProdectImg images={list.imgall}/>
          </div>
          <div className='col-span-2 grid gap-y-10  pt-4 pl-12 h-fit'>
            <span className='text-muted-foreground text-sm'>{list.name}</span>
            <div className='flex flex-col md:gap-y-8 gap-y-4'>
            <h1 className='text-2xl font-bold'>{list.name}</h1>
              <div className='bg-green-400 p-3 rounded-full w-fit text-white'>
                <ProdectPrice price={list.price}></ProdectPrice>
              </div>
            </div>
            <p>40.42k<span className='font-semibold'>reviews</span></p>
            <div className='flex flex-col gap-4'>
              <span className='font-semibold'>Descriptions</span>
            <p>{list.prodect_d.description}</p>
            </div>
          </div>
          <div className='col-span-1'>
            {/* order */}
            <Card className='px-4'>
              <CardHeader></CardHeader>
              <CardContent className='w-full flex flex-col gap-3'>
                  <div className='flex justify-between'>
                      <div>Price</div>
                      <div>
                        <ProdectPrice price={list.price}></ProdectPrice>
                      </div>
                  </div>
                   <div className='flex justify-between'>
                      <div>states</div>
                      <div>
                        {list.stock>0?(<Badge variant="outline">Avelible</Badge>):(<Badge variant="destructive">Unavelible</Badge>)}
                      </div>
                  </div>
                  {list.stock>0 &&(
                    <div className='flex-center w-full'>
                         <Button>Add To Cart</Button>
                    </div>
                  )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <div className='grid grid-cols-1 md:grid-cols-2 w-full pt-10 gap-x-10'>
         <ReviewCard/>
         <FormReview/>
        </div>  
    </div>
  )
}

export default Singleprodect
