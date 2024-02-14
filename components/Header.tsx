'use client'

import {
  HomeIcon,
  RectangleGroupIcon,
  Cog8ToothIcon,
  DocumentIcon,
  DocumentTextIcon,
  BellIcon,
  UserCircleIcon,
  CreditCardIcon,
  TableCellsIcon,
  ArrowLeftStartOnRectangleIcon as Logout
} from '@heroicons/react/24/outline'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from 'next/link'
import * as React from 'react'
import UserItem from './UserItem'
import { Input } from './ui/input'
import { Button } from '@/components/ui/button'
import { ModeToggle } from './ThemeModeToggle'
import { CommandDialogDemo } from './CommandSearch'
import { ChatBubbleLeftEllipsisIcon } from '@heroicons/react/24/outline'


const Header = () => {
  const links = [
    { title: "Home", link: "/", label: "", icon: HomeIcon},
    { title: "Dashboard", link: "/dashboard", label: "9", icon: RectangleGroupIcon},
    { title: "Settings", link: "/settings", label: "", icon: Cog8ToothIcon},
    { title: "Messages", link: "/messages", label: "", icon: ChatBubbleLeftEllipsisIcon},
    { title: "Private Files", link: "/files", label: "", icon: DocumentIcon},
  ]

  return (
    <div
    className='z-50 h-[70px] w-full fixed bg-white dark:bg-black flex justify-between gap-4 border-b dark:border-b-neutral-800'
    >
      <div className="border-r flex dark:border-r-neutral-800 p-1 w-[300px] min-w-[300px]">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <UserItem />
          </DropdownMenuTrigger>
          <DropdownMenuContent className='min-w-[290px] m-1'>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <UserCircleIcon className='w-4 h-4 mr-2' />
              Profile
              </DropdownMenuItem>
            <DropdownMenuItem>
              <CreditCardIcon className='w-4 h-4 mr-2' />
              Billing
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <TableCellsIcon className='w-4 h-4 mr-2' />
              Grades
            </DropdownMenuItem>
            <DropdownMenuItem>
              <DocumentTextIcon className='w-4 h-4 mr-2' />
              Registration
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Logout className='w-4 h-4 mr-2' />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="p-4 flex w-full justify-between">
        <p className="text-neutral-500 p-1">VCLASS</p>
        <div className="flex items-center justify-center gap-2">
          <div className="flex">
            {/* <CommandDialogDemo /> */}
            <Input type='search' placeholder='Search vclass...' className='dark:border-neutral-800 dark:bg-neutral-950 shadow-none focus:scale-105 transition-transform' />
          </div>
          <Button variant="outline" size="icon" className='relative'>
            <BellIcon className="h-4 w-4" />
              <span className="absolute h-2.5 w-2.5 animate-ping bg-green-500 rounded-full -top-1 -right-1"></span>
              <span className="absolute h-2.5 w-2.5 bg-green-500 rounded-full -top-1 -right-1"></span>
            </Button>
          <ModeToggle />
        </div>
      </div>
    </div>
  )
}

export default Header
