'use client'

import * as React from 'react'
import { Calendar } from "./ui/calendar"
import Link from 'next/link'
import { cn } from "@/lib/utils"


const Sidebar = () => {

  const links = [
    { title: "Upcoming Events", link: "#"},
    { title: "News", link: "#"},
  ]

  return (
    <div className='fixed pb-20 h-fit min-h-full overflow-y-auto z-50 py-4 flex flex-col w-[300px] min-w-[300px] gap-0 bg-white dark:bg-black border-r dark:border-r-neutral-800'>
      <div className="flex p-2 border dark:border-neutral-800 rounded-md hover:border-black dark:hover:border-white mx-auto">
        <Calendar />
      </div>
      <div className="flex flex-col grow p-4 text-neutral-500">
        {links.map((link, key) => (
          <Link href={link.link} key={key} className={cn`p-2 hover:text-blue-600 dark:hover:bg-neutral-800 rounded-md hover:border-black dark:hover:border-white`}>
            {link.title} <span className="ml-2">&#8599;</span>
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