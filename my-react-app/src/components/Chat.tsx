import React, { useState } from "react";
import "../styles/Chat.scss";

// Assuming you have the user's profile picture URL
const user = {
  name: "Muhammad Salman",
  profilePicture: "path-to-profile-picture.jpg", // Update this with the actual path
};

const Chat: React.FC = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<{ text: string; time: string }[]>(
    []
  );

  const sendMessage = () => {
    if (message.trim()) {
      const now = new Date();
      const timeString = `${now.getHours()}:${now
        .getMinutes()
        .toString()
        .padStart(2, "0")}`;
      setMessages([...messages, { text: message, time: timeString }]);
      setMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent the default behavior of the Enter key (e.g., form submission)
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
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message"
          onKeyDown={handleKeyPress} // Add this line
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
