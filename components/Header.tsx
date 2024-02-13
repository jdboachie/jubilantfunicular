'use client'

import * as React from 'react'
import { CommandDialogDemo } from './CommandSearch'
import { Button } from '@/components/ui/button'
import { ModeToggle } from './ThemeModeToggle'
import { ChatBubbleLeftEllipsisIcon } from '@heroicons/react/24/outline'
import UserItem from './UserItem'


const Header = () => {
  return (
    <div
    className='z-50 w-full fixed bg-white dark:bg-neutral-900 flex justify-between gap-4 border-b dark:border-b-neutral-800'
    >
      <div className="border-r dark:border-r-neutral-800 p-4 w-[300px] min-w-[300px]">
        <UserItem />
      </div>
      <div className="p-4 flex w-full justify-between">
        <div className="p-2 font-bold font-mono text-neutral-500">
          JuFu
        </div>
        <div className="flex items-center justify-center gap-2">
          <div className="px-2">
            <CommandDialogDemo />
          </div>
          <Button variant="outline" size="icon">
            <ChatBubbleLeftEllipsisIcon className="h-4 w-4" />
          </Button>
          <ModeToggle />
        </div>

      </div>
    </div>
  )
}

export default Header
