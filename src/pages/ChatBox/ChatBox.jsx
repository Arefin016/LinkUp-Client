import React, { useState, useEffect, useRef } from 'react';
import './ChatBox.css'; // Ensure you have the CSS for styling

const ChatBox = () => {
  
  const [messages, setMessages] = useState(() => {
    const savedMessages = localStorage.getItem('chatMessages');
    return savedMessages ? JSON.parse(savedMessages) : [];
  });

  const [messageInput, setMessageInput] = useState('');
  const messageEndRef = useRef(null);

  
  const sendMessage = () => {
    if (messageInput.trim() !== '') {
      const newMessage = {
        text: messageInput,
        sender: 'You',
        timestamp: new Date().toLocaleTimeString(),
      };

      const updatedMessages = [...messages, newMessage];

      
      setMessages(updatedMessages);
      localStorage.setItem('chatMessages', JSON.stringify(updatedMessages));

           setMessageInput('');

      
      scrollToBottom();
    }
  };

  // Scroll to the bottom of the message list
  const scrollToBottom = () => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    scrollToBottom(); 
  }, [messages]);

  // Function to simulate receiving a message
  const receiveMessage = () => {
    const newMessage = {
      text: "Hello! This is a simulated response.",
      sender: 'Friend',
      timestamp: new Date().toLocaleTimeString(),
    };

    const updatedMessages = [...messages, newMessage];

    // Save the new message to state and localStorage
    setMessages(updatedMessages);
    localStorage.setItem('chatMessages', JSON.stringify(updatedMessages));

    scrollToBottom();
  };

  return (
    <div className="chatbox-container">
      {/* Chat header */}
      <div className="chatbox-header">
        <h2>Chat with Friend</h2>
        <button onClick={receiveMessage} className="receive-btn">Simulate Response</button>
      </div>

      {/* Message list */}
      <div className="message-list">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender === 'You' ? 'sent' : 'received'}`}>
            <span className="message-sender">{msg.sender}</span>
            <p className="message-text">{msg.text}</p>
            <span className="message-timestamp">{msg.timestamp}</span>
          </div>
        ))}
        {/* Scroll target */}
        <div ref={messageEndRef} />
      </div>

      {/* Message input */}
      <div className="message-input-container">
        <input
          type="text"
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
          placeholder="Type a message..."
          className="message-input"
          onKeyPress={(e) => (e.key === 'Enter' ? sendMessage() : null)}
        />
        <button onClick={sendMessage} className="send-btn">Send</button>
      </div>
    </div>
  );
};

export default ChatBox;
