
const UserItem = () => {
  return (
    <div className='flex items-center justify-start gap-2 p-2 border rounded-md'>
      <div className="avatar rounded-full min-w-10 min-h-10 bg-gradient-to-tr from-rose-700 via-rose-700 to-rose-300 text-white font-[700] flex items-center justify-center">
        FG
      </div>
      <div className="">
        <p className='text-sm font-bold'>Freda Gbande</p>
        <p className='text-xs text-neutral-500'>gbandef@gmail.com</p>
      </div>
    </div>
  )
}

export default UserItem