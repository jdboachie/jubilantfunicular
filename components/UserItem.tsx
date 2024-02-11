import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


const UserItem = () => {
  return (
    <div className='flex items-center justify-start gap-2 p-2 border dark:border-neutral-800 rounded-md bg-white dark:bg-black'>
      <Avatar >
        <AvatarImage
          src={`https://avatar.vercel.sh/fredagbande`}
          alt="user avatar"
          width={1000}
          height={1000}
          className="avatar rounded-full w-10 h-10 text-white font-[700] flex items-center justify-center"
        />
        <AvatarFallback>FG</AvatarFallback>
      </Avatar>
      <div className="">
        <p className='text-sm font-semibold'>Freda Gbande</p>
        <p className='text-xs text-neutral-500'>gbandef@gmail.com</p>
      </div>
    </div>
  )
}

export default UserItem