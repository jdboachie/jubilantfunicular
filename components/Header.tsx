'use client'

import * as React from 'react'
import { CommandDialogDemo } from './CommandSearch'
import { Button } from '@/components/ui/button'
import { BellIcon } from '@radix-ui/react-icons'
import { ModeToggle } from './ThemeModeToggle'

const Header = () => {
  return (
    <div
    className='w-full flex justify-between gap-4 p-4 border-b dark:border-b-neutral-800'
    >
      <div className="">

      </div>
      <div className="flex items-center justify-center gap-2">
        <div className="p-2">
          <CommandDialogDemo />
        </div>
        <Button variant="outline" size="icon">
          <BellIcon className="h-4 w-4" />
        </Button>
        <ModeToggle />
      </div>
    </div>
  )
}

export default Header
