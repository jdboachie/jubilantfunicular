import UserItem from "./UserItem"

const Sidebar = () => {
  return (
    <div className='flex flex-col w-[300px] min-w-[300px] p-4 min-h-screen border-r'>
      <div className="">
        <UserItem />
      </div>
      <div className="grow">
        Menu
      </div>
      <div className="">
        Settings/Notifications
      </div>
    </div>
  )
}

export default Sidebar