import React from 'react'
import { Skeleton } from './ui/skeleton';

const TicketCardskeleton = () => {
  return (
    <div className="border space-y-5 p-5 rounded">
      <div className='flex items-center gap-3'>
      <Skeleton className="h-16 w-16 rounded-xl" />
      <div className="space-y-2 w-[800px]">
        <Skeleton className="p-2  rounded-full" />
        <Skeleton className="p-2 rounded-full" />
      </div>

      </div>
      <div className='flex items-center gap-3'>
      <Skeleton className="h-16 w-16 rounded-xl" />
      <div className="space-y-2 w-[1200px]">
        <Skeleton className="p-2  rounded-full" />
        <Skeleton className="p-2 rounded-full" />
      </div>

      </div>
    </div>
  );
}

export default TicketCardskeleton
