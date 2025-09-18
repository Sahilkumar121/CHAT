import assets from "../assets/assets";

export default function ChatPanel({ selectedUser, setSelectedUser }) {

    return (
        <div>
            <div className={`bg-[#8185B2]/5 rounded-2xl flex justify-center items-center ${selectedUser ? 'hidden' : 'h-full'}`}>
                <div className="chat-panel flex flex-col items-center gap-10">
                    <img src={assets.logo_icon} alt="chat-logo-icon" className="w-25" />
                    <p className="text-white font-semibold text-3xl">Chat anytime, anywhere</p>
                </div>
            </div>
            <div className={`flex flex-col ${selectedUser ? 'h-full' : 'hidden'}`}>
                {/* top panel for selected user detail */}
                <div className="top-panel flex justify-between items-center p-5">
                    {/*user profile pic and name */}
                    <div className="flex justify-center items-center gap-5">
                        <img src={assets.profile_martin} alt="profile-pic" className="w-12 rounded-full" />
                        <p className="text-gray-400 font-semibold text-2xl">Alison Martin</p>
                    </div>
                    {/* help icon  */}
                    <div className="help-icon">
                        <img src={assets.help_icon} alt="help" className="w-6 cursor-pointer" />
                    </div>
                </div>

                <hr className="border-gray-400 w-[90%] mx-auto" />

                {/* middle panel for chat */}
                <div className="middle-panel flex-1">
                    
                </div>

                {/* bottom panel to write chat, image icon to send image and send button to send chat*/}
                <div className="bottom-panel flex justify-between items-center px-5 py-3 text-white gap-10">
                    <div className="write-send-container flex bg-[#8185B2]/10 w-full h-13 rounded-full">
                        {/* input field to write chat  */}
                        <input type="text" placeholder="Send a message" className="border-none focus:outline-none ml-5" />
                    </div>
                    {/* send button */}
                    <img src={assets.send_button} alt="send-button" className="w-9 cursor-pointer" />
                </div>
            </div>
        </div>

    )
}
