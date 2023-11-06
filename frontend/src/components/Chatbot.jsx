import React, { useState, useRef, useEffect } from 'react';
import { AiOutlineSend, AiOutlineClose } from 'react-icons/ai';
import { IoIosChatbubbles } from 'react-icons/io';
import logo from '../assets/unclogo.png';

const Chatbot = () => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [messages, setMessages] = useState([
    // Include the default welcome message when the component initializes
    { text: "👋🏾 Hi, how can we help you today?", type: 'bot' }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const chatboxRef = useRef(null);
  const Filter = require('bad-words');
  const profanityFilter = new Filter();
  let lastMessageTime = 0; // Declare the variable

  const handleToggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen);
  };

  const handleInputChange = (event) => {
    setInputMessage(event.target.value);
  };
const handleSendMessage = () => {
      const userMessage = { text: inputMessage, type: 'user' };
      setMessages([...messages, userMessage]);
      setInputMessage('');
      const now = Date.now();
      if (now - lastMessageTime < 60000) {
        // Too many messages sent in a minute
        return;
      }
      lastMessageTime = now;
      if (!inputMessage || inputMessage.length > 1000) {
        // Message is empty or too long, reject it
        return;
      }
      const filteredMessage = profanityFilter.clean(inputMessage);
      if(filteredMessage!==inputMessage){
          return;
      }


    
      // Make an API request to send the user message and get the chatbot response
      fetch('/api/chatbot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: inputMessage }),
      })
        .then((response) => response.json())
        .then((data) => {
          const botResponse = { text: data.response, type: 'bot' };
          setMessages((prevMessages) => [...prevMessages, botResponse]);
        })
        .catch((error) => {
          console.error('Error sending message to chatbot:', error);
        });
    };
  const handleSendFakeMessage = () => {
    const fakeuserMessage = { text: inputMessage, type: 'user' };
    setMessages([...messages, fakeuserMessage]);
    setInputMessage('');
  
  
    // Simulate a bot response
    const botResponse = { text: 'This is a simulated response from the chatbot.', type: 'bot' };
    setMessages((prevMessages) => [...prevMessages, botResponse]);
  };
  

  useEffect(() => {
    if (isChatbotOpen) {
      chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
    }
  }, [isChatbotOpen, messages]);

  return (
    
    <div className="fixed bottom-4 right-4 z-50">
      {/* Open chatbot button*/}
      <div
        className={`button bg-[var(--brown)] drop-shadow-xl rounded-md p-2 ${isChatbotOpen ? 'hidden' : ''}`}
        onClick={handleToggleChatbot}
      >
        <IoIosChatbubbles size={35} color="white" />
      </div>
      {isChatbotOpen && (
        
        <div className="chatbot bg-white rounded-lg shadow-xl fixed bottom-20 right-4 w-96 h-[500px]">
          {/* Top bar. Chatbot Name, image, and active status */}



           {/* Top bar. Chatbot Name, image, and active status */}
           <div className='flex w-full items-center p-2 rounded-t-lg bg-[var(--gold)] text-white'>
            <div className='relative'>
            <img src={logo} alt="Chatbot" className="w-10 h-10 mr-2" />
            <div className="absolute bg-green-500 w-4 h-4 right-2 bottom-0 rounded-full border-white border-2"></div>
              </div>
              UNC_LUL</div>
              

              
              <div className='pl-2 pr-2 pb-4 w-full h-full'>
                {/* Message log between user and chatbot.*/}
          <div className="chatbox bg-white h-4/5 overflow-y-auto" ref={chatboxRef}>
            
            {messages.map((message, index) => (
              <div key={index} className={`message p-2 my-2 ${message.type === 'user' ? '' : ''}`}>
                {message.type === 'bot' && (
                  <div className="flex items-center">
                    <img src={logo} alt="Chatbot" className="w-8 h-8 mr-2" />
                    <div className="bg-[var(--brown)] rounded-lg break-words text-white p-2 mb-2 max-w-[80%] text-left">
                      {message.text}
                    </div>
                  </div>
                
                )}
                {message.type === 'user' && (
                  <div className="flex justify-end">
                    
                  <div className="p-2 mb-2 bg-gray-200 rounded-lg break-words text-black max-w-[80%]">
                    {message.text}
                  </div>
                </div>
                )}
              </div>
            ))}
          </div>

       {/* Bottom Section wih input box and submit button*/}
            <div className='w-full flex relative bottom-0 pt-2'>
          
            <input
              type="text"
              placeholder="Type a message..."
              value={inputMessage}
              onChange={handleInputChange}
              className="pl-4 w-4/5"
            />
            
              <AiOutlineSend size={28} className='w-1/5 justify-end' color="black" onClick={handleSendMessage}/>
          
        
            </div>


          
         </div>
        {/* Close chatbot button*/}
            <div className="close-button fixed bottom-4 right-4 drop-shadow-xl">
            <div className='button bg-[var(--brown)] rounded-md p-2'>
              <AiOutlineClose size={35} color="white" onClick={handleToggleChatbot} />
            </div>
          </div>


        </div>
      )}
    </div>
  );
};

export default Chatbot;
