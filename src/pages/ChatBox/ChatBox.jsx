import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { fetchMessages, sendMessage as postMessage } from '../../hooks/axiosChat';

const socket = io('https://link-up-shaharul.vercel.app'); 

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');

  useEffect(() => {
    const getMessages = async () => {
      const initialMessages = await fetchMessages(); 
      setMessages(initialMessages);
    };

    getMessages();

    // Listen for incoming messages from the server
    socket.on('newMessage', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    // Clean up the listener on component unmount
    return () => {
      socket.off('newMessage');
    };
  }, []);

  const sendMessage = async () => {
    if (messageInput.trim()) {
      const message = { sender: 'User', text: messageInput }; 
      socket.emit('sendMessage', message); 
      setMessageInput('');

      try {
        await postMessage(message); 
      } catch (error) {
        console.error('Error sending message:', error);
      }
    }
  };

  return (
    <div className="chat-box flex flex-col h-full max-w-lg mx-auto shadow-lg rounded-lg border border-gray-300 bg-white">
      <div className="messages flex-grow p-4 space-y-3 overflow-y-auto max-h-80">
        {messages.map((msg, index) => (
          <div key={index} className={`flex items-start ${msg.sender === 'User' ? 'justify-end' : 'justify-start'}`}>
            {msg.sender !== 'User' && (
              <div className="avatar w-8 h-8 mr-2">
                <img
                  className="rounded-full"
                  src={`https://ui-avatars.com/api/?name=${msg.sender}`}
                  alt={msg.sender}
                />
              </div>
            )}
            <div
              className={`message p-3 rounded-xl ${
                msg.sender === 'User'
                  ? 'bg-blue-500 text-white rounded-br-none'
                  : 'bg-gray-200 text-black rounded-bl-none'
              } max-w-xs`}
            >
              <span>{msg.text}</span>
            </div>
            {msg.sender === 'User' && (
              <div className="avatar w-8 h-8 ml-2">
                <img
                  className="rounded-full"
                  src={`https://ui-avatars.com/api/?name=${msg.sender}`}
                  alt={msg.sender}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Sticky input box */}
      <div className="input-box p-3 border-t border-gray-300 flex items-center">
        <input
          type="text"
          className="flex-grow p-2 border border-gray-300 rounded-full focus:outline-none focus:ring focus:ring-blue-300"
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
          onKeyPress={(e) => (e.key === 'Enter' ? sendMessage() : null)}
          placeholder="Type a message..."
        />
        <button
          className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-200"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
