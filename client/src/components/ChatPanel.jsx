import assets from "../assets/assets";

export default function ChatPanel({ selectedUser, setSelectedUser }) {

    return (
        // <div className="bg-[#8185B2]/5 rounded-2xl flex justify-center items-center">
        //   <div className="chat-panel flex flex-col items-center gap-10">
        //     <img src={assets.logo_icon} alt="chat-logo-icon" className="w-25" />
        //     <p className="text-white font-semibold text-3xl">Chat anytime, anywhere</p>
        //   </div>
        // </div>
        <div className="flex flex-col">
            <div className="top-panel flex justify-between items-center p-5">
                <div className="user-profile-pic flex justify-center items-center gap-5">
                    <img src={assets.profile_martin} alt="profile-pic" className="w-12 rounded-full"/>
                    <p className="text-gray-400 font-semibold text-2xl">Alison Martin</p>
                </div>
                <div className="help-icon">
                    <img src={assets.help_icon} alt="help" className="w-6 cursor-pointer"/>
                </div>
            </div>
            <hr className="border-gray-400 w-[90%] mx-auto"/>
            <div className="middle-panel flex-1">
                <p className="text-white text-5xl">
                    Middle panel
                </p>
            </div>
            <div className="bottom-panel flex justify-between items-center px-5 py-3 text-white gap-10">
                <div className="write-send-container flex bg-[#8185B2]/10 w-full h-13 rounded-full">
                    <input type="text" placeholder="Send a message" className="border-none focus:outline-none ml-5"/>
                </div>
                <img src={assets.send_button} alt="send-button" className="w-9"/>
            </div>
        </div>
    )
}
