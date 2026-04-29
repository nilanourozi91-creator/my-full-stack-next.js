import { Card, CardContent, CardHeader } from '@/components/ui/card'
import React from 'react'

function ProdeactCard({carddata}:{carddata:any}) {
  return (
    <div>
      <Card>
        <CardHeader></CardHeader>
        <CardContent>
          {
            <h1>{carddata.id}</h1>
          }
        </CardContent>
      </Card>
    </div>
  )
}

export default ProdeactCard
