// client/src/components/Chat.tsx
import React, { useState, useEffect } from "react";
import { useSocket } from "../context/socketContext";
import "../styles/Chat.scss";
import { useLocation } from "react-router-dom";
import {
  FaBold,
  FaItalic,
  FaLink,
  FaListUl,
  FaListOl,
  FaCode,
  FaPlus,
  FaSmile,
  FaVideo,
  FaMicrophone,
  FaPenSquare,
  FaPaperPlane,
} from "react-icons/fa";

const user = {
  name: "Muhammad Salman",
  profilePicture: "../assets/hello.png", // Update this with the actual path
};

const Chat: React.FC = () => {
  const socket = useSocket();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<{ text: string; time: string }[]>(
    []
  );
  const location = useLocation();

  useEffect(() => {
    if (socket) {
      socket.on("receiveMessage", (message: { text: string; time: string }) => {
        console.log("Message received:", message); // Log received messages
        setMessages((prevMessages) => [...prevMessages, message]);
      });
    }

    return () => {
      if (socket) {
        socket.off("receiveMessage");
      }
    };
  }, [socket]);
  useEffect(() => {
    setMessages([]);
  }, [location]);

  const sendMessage = () => {
    if (message.trim() && socket) {
      const now = new Date();
      const timeString = `${now.getHours()}:${now
        .getMinutes()
        .toString()
        .padStart(2, "0")}`;
      const newMessage = { text: message, time: timeString };
      console.log("Sending message:", newMessage); // Log messages being sent
      socket.emit("sendMessage", newMessage);
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="chat">
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className="message">
            <img
              src={user.profilePicture}
              alt={user.name}
              className="profile-picture"
            />
            <div className="message-content">
              <div className="message-header">
                <span className="user-name">{user.name}</span>
                <span className="message-time">{msg.time}</span>
              </div>
              <div className="message-text">{msg.text}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="input-area">
        <div className="toolbar">
          <FaBold />
          <FaItalic />
          <FaLink />
          <FaListUl />
          <FaListOl />
          <FaCode />
        </div>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message Log Rocket Updates"
          onKeyDown={handleKeyPress}
        />
        <div className="input-icons">
          <FaPlus />
          <FaSmile />
          <FaVideo />
          <FaMicrophone />
          <FaPenSquare />
        </div>
        <button onClick={sendMessage}>
          <FaPaperPlane />
        </button>
      </div>
    </div>
  );
};

export default Chat;
