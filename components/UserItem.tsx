'use client';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronUpDownIcon } from "@heroicons/react/24/outline"
import * as React from 'react'
import router from 'next/router'


const UserItem = () => {
  return (
    <div
      onClick={() => router.push('/account')}
      className='tapbounce flex w-full text-start min-w-[290px] items-center justify-start p-2.5 pr-4 gap-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800'>
      <Avatar >
        <AvatarImage
          src={`https://avatar.vercel.sh/jb`}
          alt="user avatar"
          width={1000}
          height={1000}
          className="avatar rounded-full w-10 h-10 text-white font-[700] flex items-center justify-center"
        />
        <AvatarFallback>JB</AvatarFallback>
      </Avatar>
      <div className="grow">
        <p className='text-sm font-semibold'>Jude Boachie</p>
        <p className='text-xs text-neutral-500'>judeboachiekwame@gmail.com</p>
      </div>
      <ChevronUpDownIcon className='h-4 w-4' />
    </div>
  )
}

export default UserItem