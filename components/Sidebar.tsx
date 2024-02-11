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


import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"


const Sidebar = () => {

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
    <div className='flex flex-col w-[22%] min-w-[22%] p-4 gap-4 min-h-screen border-r dark:border-r-neutral-800'>
      <UserItem />
      <div className="grow">
        <Command className="border dark:border-neutral-800">
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
        </Command>
      </div>
      <div className="">
        Settings/Notifications
      </div>
    </div>
  )
}

export default Sidebar