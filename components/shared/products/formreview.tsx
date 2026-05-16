
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select } from '@/components/ui/select'
import { Table, TableBody, TableFooter, TableHeader, TableRow } from '@/components/ui/table'
import { cn } from '@/lib/utils'
import { Form } from 'lucide-react'
import React from 'react'

function FormReview() {
  return (
      <div className='flex justify-center p-5  border rounded-md  w-full'>
        <form action="" className='w-full flex flex-col gap-y-7'>
          <h1 className='text-gray-600 text-xl pb-5 text-center'>Add Your Own Comment</h1>
          <Label className='flex flex-col items-start'>
            Your Name
            <Input placeholder='Name'  className='h-10'/>
          </Label>
          <Label className='flex flex-col items-start'>
            Your Email
            <Input placeholder='Email' className='h-10'/>
          </Label>
          <Label className='flex flex-col items-start'>
            Your Rate
             <select name="" id=""
              
                   data-slot="input"
                   className={cn(
                     "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
                     "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
                     "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
                     
                   )}
                  
             >

              <option value="">⭐⭐⭐⭐⭐</option>
              <option value="">⭐⭐⭐⭐</option>
              <option value="">⭐⭐⭐</option>
              <option value="">⭐⭐</option>
              <option value="">⭐</option>
             </select>
          </Label>
          <Label className='flex flex-col items-start w-full'>
            Your Comment
            <textarea name="" id=""
             className={cn(
                     "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-24 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
                     "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
                     "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
                     
                   )}
            placeholder='Comment'></textarea>
          </Label>
          <Button variant={'outline'}>Sand</Button>
        </form>
      </div>
  )
}

export default FormReview
