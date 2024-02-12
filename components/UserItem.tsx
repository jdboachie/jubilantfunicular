import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


const UserItem = () => {
  return (
    <div className='flex items-center justify-start gap-2 rounded-md'>
      <Avatar >
        <AvatarImage
          src={`https://avatar.vercel.sh/kofiasante`}
          alt="user avatar"
          width={1000}
          height={1000}
          className="avatar rounded-full w-10 h-10 text-white font-[700] flex items-center justify-center"
        />
        <AvatarFallback>LC</AvatarFallback>
      </Avatar>
      <div className="">
        <p className='text-sm font-semibold'>Kofi Asante</p>
        <p className='text-xs text-neutral-500'>kasante233@gmail.com</p>
      </div>
    </div>
  )
}

export default UserItem