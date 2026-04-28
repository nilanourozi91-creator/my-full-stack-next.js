import { Button } from "@/components/ui/button"
import { getprodect } from "@/lib/actions/prodect.action"
import Hero from "@/components/her";

export default async function Page() {
    const pro= await getprodect();
  return (
    <div>
         <Hero/>
    </div>
  )
}
