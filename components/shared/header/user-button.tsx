
 import { Button } from '@/components/ui/button'
 import Link from 'next/link'
 import { UserIcon } from 'lucide-react'
  import React from 'react'
  
  function userbtn() {
    return (
      <div>  
      <Button asChild>
        <Link href="/sign-in">
          <UserIcon /> Sign In
        </Link>
      </Button>
      </div>
    )
  }
  
  export default userbtn
  

