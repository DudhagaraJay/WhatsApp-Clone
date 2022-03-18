import React from 'react'
import Chatcontainer from './Chatcontainer'
import Sidebar from './Sidebar'
import "./ChatPage.css";
const ChatPage = ({currentUser, signOut}) => {
  return (
    <div className="chatpage">
      {/* sidebar */}
      <div className="chatpage-container">
        <Sidebar currentUser={currentUser} signOut={signOut} />
        {/* chatcontainer */}
        <Chatcontainer currentUser={currentUser} />
      </div>
    </div>
  )
}

export default ChatPage