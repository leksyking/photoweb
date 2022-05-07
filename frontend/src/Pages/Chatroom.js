import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import '../styles/Chatroom.css';


function Chatroom() {
    return (
        <ChatEngine
            height= "100vh"
            projectID = "d81bfeda-c6d1-4d84-9496-5c5a3fc7a7be"
            userName= "kingjamesegun"
            userSecret= ""
        />
    )
}

export default Chatroom

