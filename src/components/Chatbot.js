import React, { useState, useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent } from './ui/card';
import { MessageCircle, Send, X, Minimize2, Bot, User } from 'lucide-react';
import { toast } from 'sonner';

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState('');
  const messagesEndRef = useRef(null);

  // Generate session ID on component mount
  useEffect(() => {
    setSessionId(`session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`);
  }, []);

  // Auto scroll to bottom when new messages arrive
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Initialize with welcome message
  useEffect(() => {
    if (sessionId && messages.length === 0) {
      setMessages([
        {
          id: 'welcome',
          message: "Hi! I'm Favour, your helpful assistant from SwiftMove & Clean! 👋 I'm here to help you with questions about our moving and cleaning services. How can I assist you today?",
          sender: 'bot',
          timestamp: new Date().toISOString()
        }
      ]);
    }
  }, [sessionId]);

  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage = {
      id: `user_${Date.now()}`,
      message: inputMessage.trim(),
      sender: 'user',
      timestamp: new Date().toISOString()
    };

    // Add user message to chat
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/chat/message`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sessionId: sessionId,
          message: userMessage.message
        }),
      });

      if (response.ok) {
        const botResponse = await response.json();
        setMessages(prev => [...prev, {
          id: botResponse.id,
          message: botResponse.message,
          sender: 'bot',
          timestamp: botResponse.timestamp
        }]);
      } else {
        throw new Error('Failed to get response');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages(prev => [...prev, {
        id: `error_${Date.now()}`,
        message: "I'm sorry, I'm having trouble responding right now. Please call us at (501) 575-5189 for immediate assistance!",
        sender: 'bot',
        timestamp: new Date().toISOString()
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const formatTimestamp = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      timeZone: 'America/New_York'
    });
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setIsMinimized(false);
  };

  const minimizeChat = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-[9999]">
          <Button
            onClick={toggleChat}
            className="bg-sky-blue hover:opacity-90 text-white rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
          >
            <MessageCircle className="h-6 w-6" />
          </Button>
          {/* Notification badge */}
          <div className="absolute -top-1 -right-1 bg-vibrant-green text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
            !
          </div>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-[9999]">
          <Card className={`w-80 shadow-2xl border-0 transition-all duration-300 ${isMinimized ? 'h-16' : 'h-96'}`}>
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-sky-blue to-navy-blue text-white p-4 rounded-t-lg flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="bg-white bg-opacity-20 p-2 rounded-full">
                  <Bot className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-semibold">Favour</h3>
                  <p className="text-xs text-blue-100">SwiftMove & Clean Assistant</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={minimizeChat}
                  className="text-white hover:bg-white hover:bg-opacity-20 p-1 h-8 w-8"
                >
                  <Minimize2 className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleChat}
                  className="text-white hover:bg-white hover:bg-opacity-20 p-1 h-8 w-8"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Chat Content */}
            {!isMinimized && (
              <CardContent className="p-0 h-80 flex flex-col">
                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto p-4 space-y-3">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex items-start space-x-2 ${
                        msg.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                      }`}
                    >
                      <div className={`p-2 rounded-full ${
                        msg.sender === 'user' 
                          ? 'bg-blue-100' 
                          : 'bg-orange-100'
                      }`}>
                        {msg.sender === 'user' ? (
                          <User className="h-3 w-3 text-sky-blue" />
                        ) : (
                          <Bot className="h-3 w-3 text-vibrant-green" />
                        )}
                      </div>
                      <div className={`max-w-[70%] ${msg.sender === 'user' ? 'text-right' : ''}`}>
                        <div
                          className={`p-3 rounded-lg text-sm ${
                            msg.sender === 'user'
                              ? 'bg-sky-blue text-white'
                              : 'bg-light-gray text-gray-800'
                          }`}
                        >
                          {msg.message}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          {formatTimestamp(msg.timestamp)}
                        </div>
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex items-start space-x-2">
                      <div className="bg-orange-100 p-2 rounded-full">
                        <Bot className="h-3 w-3 text-orange-600" />
                      </div>
                      <div className="bg-gray-100 p-3 rounded-lg text-sm text-gray-600">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="border-t p-3">
                  <div className="flex space-x-2">
                    <Input
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Ask about our services..."
                      className="flex-1 text-sm"
                      disabled={isLoading}
                    />
                    <Button
                      onClick={sendMessage}
                      disabled={isLoading || !inputMessage.trim()}
                      className="bg-sky-blue hover:opacity-90 text-white px-3"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="text-xs text-gray-500 mt-2 text-center">
                    Ask about moving, cleaning, pricing, or booking!
                  </div>
                </div>
              </CardContent>
            )}
          </Card>
        </div>
      )}
    </>
  );
};
