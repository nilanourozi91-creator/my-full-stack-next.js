import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Toaster } from "@/components/ui/sonner";
import { Textarea } from "@/components/ui/textarea";
import { updatepro } from "@/lib/action/product.action";
import { useActionState, useState } from "react";

export default function update({prodact}:{prodact:any}) {
 const[data,action]=useActionState(updatepro,{message:''});
    return(
       <div>
        {data && data.message && <Toaster className=""/>}
        
           <form  action={action} className="flex flex-col gap-2">
      <div className="grid gap-1 grid-cols-2">
        <Input defaultValue={prodact.name} type="text" name="name" placeholder="Product Name" />
        <Input defaultValue={prodact.slug} type="text" name="slug" placeholder="Product slug" />
      </div>
      <div className="grid gap-1 grid-cols-2">
        <Input defaultValue={prodact.price} type="text" name="price" placeholder="Product Price" />
        <Input defaultValue={prodact.stock} type="number" name="stock" placeholder="Product Stock" />
      </div>
      <div className="grid gap-1 grid-cols-2">
        <Select name="category" defaultValue={prodact.category}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="clothes">Clothes</SelectItem>
            <SelectItem value="cosmic items">Cosmic Items</SelectItem>
            <SelectItem value="toilet items">Toilet Items</SelectItem>
            <SelectItem value="shoes">Shoes</SelectItem>
          </SelectContent>
        </Select>
        <Select name="isFeatured">
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select Feature"></SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="true">Featured</SelectItem>
            <SelectItem value="false">Not Featured</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-2 gap-1">
        <div className="w-full flex flex-col gap-2">
          <Input name="brand" type="text" placeholder="Product brand" />
          <div className="flex justify-between gap-2 flex-wrap">
            <Input type="file" name="image1" accept="image/*" />
            <Input type="file" name="image2" accept="image/*" />
          </div>
        </div>
        <div>
          <Textarea name="description" className="w-full h-full resize-none" />
        </div>
      </div>
      <div>
        <Button className="w-full" type="submit" variant="default">
          update
        </Button>
      </div>
    </form>
       </div>
    )
};