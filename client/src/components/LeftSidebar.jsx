import assets from "../assets/assets"
import { userDummyData } from "../assets/assets"

export default function LeftSidebar({ selectedUser, setSelectedUser }) {

  return (
    <div className={`bg-[#8185B2]/10 h-full overflow-y-scroll text-white rounded-r-xl ${selectedUser ? 'max-md:hidden' : ''}`}>
      <div className="pb-5">
        <div className="flex justify-between items-center px-5 mb-5 mt-5">
          <img src={assets.logo} alt="logo-img" className="max-w-40" />
          <div className="relative py-2 group">
            <img src={assets.menu_icon} alt="menu-icon" className="max-h-5 cursor-pointer" />
            <div className="absolute top-full right-0 z-20 border border-gray-600 p-5 w-32 bg-[#282142] rounded-md hidden group-hover:block">
              <p className="cursor-pointer text-sm">Edit Profile</p>
              <hr className="my-2 border-t border-gray-500" />
              <p className="cursor-pointer text-sm">LogOut</p>
            </div>
          </div>
        </div>

        <div className="search-bar-div px-5">
          <div className="search-bar border border-gray-500 rounded-full flex justify-start items-center pl-5 py-2">
            <img src={assets.search_icon} alt="search icon" className="max-w-5 cursor-pointer" />
            <input type="text" placeholder="Search user" className="text-white border-none focus:outline-none ml-5" />
          </div>
        </div>

        <div className="user-list p-5 flex flex-col gap-2 cursor-pointer">
          {userDummyData.map((user, index) => (
            <div onClick={() => setSelectedUser(true)} key={index} className={`user-preview w-full h-15 flex gap-4 items-center  p-2  ${selectedUser?._id === user._id && 'bg-[#282142]/10'}`}>
              <img src={user ? user.profilePic : assets.avatar_icon} alt="user-pic" className="w-12 rounded-full " />
              <div className="relative user-detail w-full">
                <div className="user-name font-semibold text-lg">
                  {user.fullName}
                </div>
                <div className="user-status text-sm text-gray-400">
                  {
                    index < 3
                      ? <span className="text-green-400">Online</span>
                      : <span>Offline</span>
                  }
                </div>
                {
                  index > 2 && <p className="absolute top-0 right-1 bg-violet-500 text-xs h-5 w-5 flex justify-center items-center rounded-full">{index}</p>
                }
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}
