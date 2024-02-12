'use client'

import {
  UserIcon,
  InboxIcon,
  CreditCardIcon,
  BellIcon,
  CogIcon,
  LockClosedIcon,
  ChatBubbleBottomCenterTextIcon
} from "@heroicons/react/24/outline"
import UserItem from "./UserItem"
import * as React from 'react'
import { Calendar } from "./ui/calendar"


const Sidebar = () => {

  const [date, setDate] = React.useState<Date | undefined>(new Date())

  const menuList = [
    {
      group: "General",
      items: [
        {
          link: "/",
          icon: <UserIcon />,
          text: "Profile"
        },
        {
          link: "/",
          icon: <InboxIcon />,
          text: "Inbox"
        },
        {
          link: "/",
          icon: <CreditCardIcon />,
          text: "Billing"
        },
        {
          link: "/",
          icon: <BellIcon />,
          text: "Notifications"
        },
      ]
    },
    {
      group: "Settings",
      items: [
        {
          link: "/",
          icon: <CogIcon />,
          text: "General settings"
        },
        {
          link: "/",
          icon: <LockClosedIcon />,
          text: "Privacy"
        },
        {
          link: "/",
          icon: <ChatBubbleBottomCenterTextIcon />,
          text: "Logs"
        },
      ]
    }
  ]

  return (
    <div className='flex flex-col w-fit min-w-[285px] gap-0 min-h-screen border-r dark:border-r-neutral-800'>
      <div className="px-4 py-3 border-b dark:border-b-neutral-800">
        <UserItem />
      </div>
      <div className="flex grow p-4 border-b dark:border-b-neutral-800">
        {/* <Command className="border dark:border-neutral-800">
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            {menuList.map((menu: any, key: number) => (
              <>
              <CommandGroup
                key={key}
                heading={menu.group}
                >
                {menu.items.map((option: any, optionKey: any) => (
                  <CommandItem key={optionKey} className="flex gap-2 cursor-pointer">
                    <div className="h-4 w-4">{option.icon}</div>
                    <span>{option.text}</span>
                  </CommandItem>
                ))}
              </CommandGroup>
              </>
            ))}
          </CommandList>
        </Command> */}
        <Calendar
          mode="default"
          // selected={date}
          today={date}
          // onSelect={setDate}
          />
      </div>
      <div className="p-4">
        Settings/Notifications
      </div>
    </div>
  )
}

export default Sidebar