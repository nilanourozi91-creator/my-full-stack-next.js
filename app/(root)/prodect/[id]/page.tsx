import Image from 'next/image'
import { GetSingleProdect } from '@/lib/actions/prodect.action'

// type Props = {
//   params: {
//     id: any
//   }
// }

export default async function ProductDetailsPage({params}:{params:Promise<{id:any}>}) {
  const product = await GetSingleProdect((await params).id);

  const mainImage = product?.imgall?.[1]?.img_url

 return(
  <section>
    <div className='flex justify-between items-center gap-6 md:grid md:grid-cols-5'>
      <div className=' col-span-2'>
           <Image
            src={`http://localhost:8000/storage/${mainImage}`}
            alt={product?.name || "product"}
            // fill
            width={500}
            height={500}
            className="h-40 w-44 "
            unoptimized
          />
      </div>
      <div className='col-span-2'>
        <div className='flex flex-col gap-6'>
           <p>{product.prodect_d.brand} {product.prodect_d.addcatagorys}</p>
           <h1 className='h3-bold'>{product.name}</h1>
           <p>{product.stock}</p>
        </div>
      </div>
      <div className='col-span-1'></div>
    </div>
  </section>
 )
}