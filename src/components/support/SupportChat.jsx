import React, { useState } from 'react';
import { 
  MessageSquare, Send, Phone, VideoCamera, Paperclip, Image, SmilePlus 
} from 'lucide-react';
import { 
  Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger 
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const SupportChat = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'system',
      content: 'Welcome to PaidWithPay Support! How can we help you today?',
      timestamp: new Date(),
    },
    {
      id: 2,
      type: 'agent',
      sender: 'Support Agent',
      content: "Hi there! I'm here to assist you with any questions about our escrow service.",
      timestamp: new Date(),
      avatar: '/api/placeholder/32/32',
    },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const sendMessage = () => {
    if (!newMessage.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: newMessage,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setNewMessage('');

    // Simulate agent response
    setTimeout(() => {
      const agentMessage = {
        id: Date.now(),
        type: 'agent',
        sender: 'Support Agent',
        content: "Thanks for your message. I'll help you with that right away.",
        timestamp: new Date(),
        avatar: '/api/placeholder/32/32',
      };
      setMessages((prev) => [...prev, agentMessage]);
    }, 1000);
  };

  const MessageBubble = ({ message }) => {
    const isUser = message.type === 'user';
    const isSystem = message.type === 'system';

    if (isSystem) {
      return (
        <div className="flex justify-center my-4">
          <div className="bg-gray-100 rounded-full px-4 py-2 text-sm text-gray-600">
            {message.content}
          </div>
        </div>
      );
    }

    return (
      <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
        <div className={`flex items-start max-w-[70%] ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
          {!isUser && (
            <Avatar className="w-8 h-8 mr-2">
              <AvatarImage src={message.avatar} alt="Agent Avatar" />
              <AvatarFallback>SA</AvatarFallback>
            </Avatar>
          )}
          <div>
            {!isUser && (
              <span className="text-xs text-gray-500 ml-2">{message.sender}</span>
            )}
            <div
              className={`rounded-lg p-3 ${
                isUser ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-900'
              }`}
            >
              {message.content}
            </div>
            <span className="text-xs text-gray-500 ml-2">
              {message.timestamp.toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <MessageSquare className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[400px] sm:w-[540px] p-0">
        <div className="flex flex-col h-full">
          <SheetHeader className="p-4 border-b">
            <SheetTitle>Support Chat</SheetTitle>
          </SheetHeader>

          <Tabs defaultValue="chat" className="flex-1 flex flex-col">
            <TabsList className="px-4 py-2 border-b">
              <TabsTrigger value="chat">Chat</TabsTrigger>
              <TabsTrigger value="calls">Calls</TabsTrigger>
              <TabsTrigger value="docs">Help Docs</TabsTrigger>
            </TabsList>

            <TabsContent value="chat" className="flex-1 flex flex-col mt-0">
              <ScrollArea className="flex-1 p-4">
                {messages.map((message) => (
                  <MessageBubble key={message.id} message={message} />
                ))}
              </ScrollArea>

              <div className="p-4 border-t">
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="icon">
                    <Paperclip className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Image className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <SmilePlus className="h-5 w-5" />
                  </Button>
                  <Input
                    placeholder="Type your message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                    className="flex-1"
                  />
                  <Button onClick={sendMessage}>
                    <Send className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="calls" className="flex-1 p-4">
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <Phone className="h-5 w-5 text-green-500" />
                    <div>
                      <h4 className="font-medium">Voice Support</h4>
                      <p className="text-sm text-gray-500">24/7 phone support</p>
                    </div>
                  </div>
                  <Button>Call Now</Button>
                </div>

                <div className="flex justify-between items-center p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <VideoCamera className="h-5 w-5 text-blue-500" />
                    <div>
                      <h4 className="font-medium">Video Call</h4>
                      <p className="text-sm text-gray-500">Schedule a video call</p>
                    </div>
                  </div>
                  <Button variant="outline">Schedule</Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="docs" className="flex-1 p-4">
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium mb-2">Quick Help Topics</h3>
                  <ul className="space-y-2">
                    <li>
                      <Button variant="link" className="p-0 h-auto">
                        How does escrow protection work?
                      </Button>
                    </li>
                    <li>
                      <Button variant="link" className="p-0 h-auto">
                        Payment release process
                      </Button>
                    </li>
                    <li>
                      <Button variant="link" className="p-0 h-auto">
                        Dispute resolution guide
                      </Button>
                    </li>
                    <li>
                      <Button variant="link" className="p-0 h-auto">
                        Security features
                      </Button>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SupportChat;
