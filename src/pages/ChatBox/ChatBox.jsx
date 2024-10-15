import React, { useEffect, useState, useRef } from 'react';
import io from 'socket.io-client';
import { fetchMessages, sendMessage as postMessage } from '../../hooks/axiosChat';
import smoothscroll from 'smoothscroll-polyfill'; // Polyfill for smooth scrolling

smoothscroll.polyfill(); // Ensure smooth scrolling works in all browsers

// Connect to your Socket.io server
const socket = io('https://link-up-shaharul.vercel.app'); // Update to your Socket.io URL

const ChatBox = ({ currentUser }) => {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [loading, setLoading] = useState(true);
  const messageEndRef = useRef(null);

  // Default fallback for currentUser
  const defaultUser = { name: 'Anonymous', avatar: 'https://ui-avatars.com/api/?name=Anonymous' };
  const user = currentUser || defaultUser;

  useEffect(() => {
    const getMessages = async () => {
      try {
        const initialMessages = await fetchMessages();
        setMessages(initialMessages);
        scrollToBottom(); // Scroll to the bottom after messages are loaded
        setLoading(false); // Stop loading after messages are fetched
      } catch (error) {
        console.error('Error fetching messages:', error);
        setLoading(false);
      }
    };

    getMessages();

    // Listen for new messages from other users
    socket.on('newMessage', (message) => {
      // Add the message and scroll to the bottom
      setMessages((prevMessages) => [...prevMessages, message]);
      scrollToBottom(); 
    });

    return () => {
      socket.off('newMessage'); // Clean up the listener
    };
  }, []);

  const scrollToBottom = () => {
    setTimeout(() => {
      if (messageEndRef.current) {
        messageEndRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100); // Add a slight delay to ensure smooth scrolling
  };

  const sendMessage = async () => {
    if (messageInput.trim()) {
      setIsSending(true);
      const message = { sender: user.name, text: messageInput, avatar: user.avatar };

      // Emit the message to the Socket.io server
      socket.emit('sendMessage', message);
      setMessageInput(''); // Clear the input field

      // Add the message to the local state to show it immediately
      setMessages((prevMessages) => [...prevMessages, message]);
      scrollToBottom();

      try {
        await postMessage(message); // Send message to the server
        setTimeout(() => setIsSending(false), 200); // Simulate sending delay
      } catch (error) {
        console.error('Error sending message:', error);
        setIsSending(false);
      }
    }
  };

  const showNotification = (message) => {
    if (Notification.permission === 'granted') {
      new Notification(message.sender, {
        body: message.text,
        icon: message.avatar || 'https://ui-avatars.com/api/?name=ChatUser',
      });
    } else if (Notification.permission !== 'denied') {
      Notification.requestPermission();
    }
  };

  return (
    <div className="chat-box flex flex-col h-full max-w-lg mx-auto shadow-lg rounded-lg border border-gray-300 bg-white">
      {/* Message Loading Skeleton */}
      {loading ? (
        <div className="p-4 text-center text-gray-500">Loading messages...</div>
      ) : (
        <div className="messages flex-grow p-4 space-y-3 overflow-y-auto max-h-80 scroll-smooth">
          {messages.length === 0 ? (
            <div className="text-center text-gray-500">No messages yet.</div>
          ) : (
            messages.map((msg, index) => (
              <div
                key={index}
                className={`flex items-start ${
                  msg.sender === user.name ? 'justify-end' : 'justify-start'
                }`}
              >
                {/* Avatar of the sender */}
                {msg.sender !== user.name && (
                  <div className="avatar w-8 h-8 mr-2">
                    <img
                      className="rounded-full"
                      src={msg.avatar || `https://ui-avatars.com/api/?name=${msg.sender}`}
                      alt={msg.sender}
                    />
                  </div>
                )}
                {/* Message bubble */}
                <div
                  className={`message p-3 rounded-xl ${
                    msg.sender === user.name
                      ? 'bg-blue-500 text-white rounded-br-none'
                      : 'bg-gray-200 text-black rounded-bl-none'
                  } max-w-xs`}
                >
                  <span>{msg.text}</span>
                </div>
                {/* Avatar for the current user */}
                {msg.sender === user.name && (
                  <div className="avatar w-8 h-8 ml-2">
                    <img
                      className="rounded-full"
                      src={user.avatar || `https://ui-avatars.com/api/?name=${user.name}`}
                      alt={user.name}
                    />
                  </div>
                )}
              </div>
            ))
          )}
          <div ref={messageEndRef} /> {/* Auto-scroll target */}
        </div>
      )}

      {/* Input box for typing messages */}
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
          disabled={isSending}
        >
          {isSending ? 'Sending...' : 'Send'}
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
