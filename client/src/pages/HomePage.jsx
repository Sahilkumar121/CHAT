import { useState } from 'react'
import ChatPanel from '../components/ChatPanel'
import LeftSidebar from '../components/LeftSidebar'
import RightSidebar from '../components/RightSidebar'



export default function HomePage() {


  const [selectedUser, setSelectedUser] = useState(false);

  console.log(selectedUser);
  return (
    <div className="border w-full h-screen sm:px-[15%] sm:py-[5%]">
      <div className={`border-2 border-gray-500 rounded-2xl overflow-hidden h-[100%] relative backdrop-blur-xl grid grid-cols-1 ${selectedUser ? 'grid-cols-3' : 'grid-cols-2'}`}>
        <LeftSidebar />
        <ChatPanel />
        <RightSidebar />
      </div>
    </div>
  )
}
