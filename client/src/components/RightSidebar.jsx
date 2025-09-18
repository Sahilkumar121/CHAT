
import assets from '../assets/assets';

export default function RightSideBar({ selectedUser, setSelectedUser }) {

  return selectedUser ? (
    <div className='bg-[#8185B2]/10 flex flex-col' >

      {/* top part */}
      <div className="top-part border-b border-b-white p-5">
        <div className='user-preview text-white font-semibold flex flex-col items-center justify-center gap-2'>
          <img src={assets.profile_martin} alt="profile-pic" className='w-23 rounded-full'/>
          <p className='text-3xl'>Alison Martin</p>
        </div>
        <div className='user-bio mt-2'>
          <p className='text-gray-400 text-md'>
            Hi everyone, nice to meet you
          </p>
        </div>
      </div>

      {/* middle part */}
      <div className="middle-part text-white px-2 py-3 flex-1">
        Media
      </div>
      <div className='last-part p-3'>
        <div className='text-white font-bold text-[20px] p-3 text-center rounded-full bg-linear-to-r from-[#a67df4] to-[#7b4beb] cursor-pointer'>
          Logout
        </div>
      </div>
    </div>
  ) : ''
}
