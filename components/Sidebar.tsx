'use client'

import {
  UserIcon,
  TrashIcon,
  InboxIcon,
  HomeIcon,
  BellIcon,
  Cog8ToothIcon,
  LockClosedIcon,
  RectangleGroupIcon,
  ChatBubbleBottomCenterTextIcon
} from "@heroicons/react/24/outline"
import UserItem from "./UserItem"
import * as React from 'react'
import { Calendar } from "./ui/calendar"
import Link from 'next/link'
import { buttonVariants } from "./ui/button"
import { cn } from "@/lib/utils"


const Sidebar = () => {

  const [date, setDate] = React.useState<Date | undefined>(new Date())

  const links = [
    { title: "Home", label: "", icon: HomeIcon, variant: "default" },
    { title: "Dashboard", label: "9", icon: RectangleGroupIcon, variant: "ghost" },
    { title: "Settings", label: "", icon: Cog8ToothIcon, variant: "ghost" },
    { title: "Users", label: "", icon: UserIcon, variant: "ghost" },
    { title: "Logout", label: "", icon: TrashIcon, variant: "ghost" },
  ]

  return (
    <div className='flex flex-col w-[300px] min-w-[300px] gap-0 h-full border-r dark:border-r-neutral-800'>
      <div className="flex flex-col grow p-4 gap-1 border-b dark:border-b-neutral-800">
      {links.map((link: any, index: any) => (
          <Link
          key={index}
          href="#"
          className={cn(
            buttonVariants({ variant: link.variant, size: "sm" }),
            link.variant === "default" &&
            "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white",
            "justify-start"
          )}
        >
          <link.icon className="mr-2 h-4 w-4" />
          {link.title}
          {link.label && (
            <span
              className={cn(
                "ml-auto",
                link.variant === "secondary" &&
                "text-black dark:text-white"
              )}
            >
              {link.label}
            </span>
          )}
        </Link>
        )
        )}
      </div>
      <div className="p-4">
        <Calendar/>
      </div>
    </div>
  )
}

export default Sidebar