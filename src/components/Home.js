
import React from 'react'
import "./Home.css";
import Sidebar from "./Sidebar";
 const Home = ({ currentUser, signOut }) => {
  return (
    <div className="home">
            <div className="home-container">
                {/* sidebar */}
                <Sidebar currentUser={currentUser} signOut={signOut} /> 
              
                {/* a container width whatsapp logo */}
                <div className="home-bg">
                  <img src="./WhatsAppbg.png"  alt='' />
                  </div>
            </div>
        </div>
  )
}
export default Home;