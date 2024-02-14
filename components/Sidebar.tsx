'use client'

import * as React from 'react'
import Link from 'next/link'
import { cn } from "@/lib/utils"
import { ArrowUpRightIcon } from '@heroicons/react/24/outline'
import {
  HomeIcon,
  RectangleGroupIcon,
  Cog8ToothIcon,
  DocumentIcon,
} from '@heroicons/react/24/outline'
import { usePathname } from 'next/navigation'


const Sidebar = () => {

  const links = [
    {icon: HomeIcon, title: "Home", link: "/"},
    {icon: RectangleGroupIcon, title: "Dashboard", link: "/dashboard"},
    {icon: Cog8ToothIcon, title: "Settings", link: "/settings"},
    {icon: DocumentIcon, title: "Files", link: "/files"},
  ]

  const pathname = usePathname()
  console.log(pathname)

  return (
  <div className='lg:fixed hidden pb-20 h-fit min-h-full overflow-y-auto p-2 lg:flex flex-col w-[300px] min-w-[300px] gap-0 bg-white dark:bg-black border-r dark:border-r-neutral-800'>
    <div className="flex flex-col grow gap-0.5 text-neutral-500">
      {links.map((link, key) => (
        <Link
          key={key}
          href={link.link}
          className={cn(`flex hover:text-black hover:bg-neutral-100 rounded-md px-2 py-1`, pathname==link.link && 'bg-neutral-50 text-black dark:text-neutral-100 dark:border-neutral-800 dark:bg-neutral-800')}>
          <link.icon className='w-9 h-9 p-2' />
          <div className="p-2.5 pl-0 text-xs">{link.title}</div>
        </Link>
      ))}
    </div>
    <div className="p-4 text-xs">
      In development by <Link href="https://read.cv/judeboachie" className="text-blue-500">Jude Boachie</Link>
    </div>
  </div>
  )
}

export default Sidebar