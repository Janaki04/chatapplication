import React, { useState, useMemo } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import ContactInfoDrawer from './Contact';
import SettingsPanel from './SettingsPanel';
import ProfilePanel from './ProfilePanel';

const initialChats = [
  { 
    id: 1, name: 'Pink Panda', time: '9:36', unread: 0, pinned: true, isArchived: false, avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80',
    messages: [
      { id: 101, text: 'Hi 👋, How are ya ?', sender: 'them', time: '0:12' },
      { id: 102, text: 'Hi 👋 Panda, not bad, u ?', sender: 'me', time: '8:15' },
      { id: 103, text: 'Can you send me an abstract image?', sender: 'me', time: '8:17' },
      { id: 104, type: 'image', src: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=600&q=80', sender: 'them', time: '10:35', reaction: '🔥' },
      { id: 105, text: 'Can you send it as file ?', sender: 'me', time: '11:12' },
      { id: 106, type: 'file', fileName: 'Abstract.png', sender: 'them', time: '11:25' },
      { id: 107, text: 'Thnx!', sender: 'me', time: '11:28' }
    ]
  },
  { 
    id: 2, name: 'Dog Hat', time: '9:36', unread: 2, pinned: true, isArchived: false, avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=100&q=80',
    messages: [
      { id: 201, text: "Hey there!", sender: 'me', time: '9:30' },
      { id: 202, text: "It's so quite outside 🤫", sender: 'them', time: '9:36' }
    ]
  },
  { 
    id: 3, name: 'Cute Turtle', time: '9:36', unread: 3, pinned: false, isArchived: false, avatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=100&q=80',
    messages: [{ id: 301, text: "That's It. Goodbye!", sender: 'them', time: '9:36' }]
  },
  { 
    id: 4, name: 'Cool spirit', time: '9:36', unread: 0, pinned: false, isArchived: false, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80',
    messages: [{ id: 401, text: 'Look what I found', sender: 'them', time: '9:36' }]
  },
  { 
    id: 5, name: 'strange cat', time: '9:36', unread: 0, pinned: false, isArchived: true, avatar: 'https://images.unsplash.com/photo-1628157582853-a796fa650a6a?auto=format&fit=crop&w=100&q=80',
    messages: [{ id: 501, text: 'Hi, sorry to bother you..', sender: 'me', time: '9:36' }]
  },
  { 
    id: 6, name: 'Fire Fox', time: '9:36', unread: 0, pinned: false, isArchived: true, avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=100&q=80',
    messages: [{ id: 601, text: 'What does the fox says?', sender: 'them', time: '9:36' }]
  }
];

export default function Dashboard() {
  const [chats, setChats] = useState(initialChats);
  const [activeChatId, setActiveChatId] = useState(1);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [rightPanelOpen, setRightPanelOpen] = useState(false);
  const [messageText, setMessageText] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentView, setCurrentView] = useState('all'); 
  
  // viewMode State values: 'chat' | 'settings' | 'profile'
  const [viewMode, setViewMode] = useState('chat'); 

  // Filters contact items using lookups and dynamic parameters
  const filteredChats = useMemo(() => {
    return chats.filter(chat => {
      const matchesSearch = chat.name.toLowerCase().includes(searchQuery.toLowerCase());
      if (!matchesSearch) return false;

      if (currentView === 'unread') return chat.unread > 0;
      if (currentView === 'archive') return chat.isArchived;
      return !chat.isArchived;
    });
  }, [chats, searchQuery, currentView]);

  const activeChat = useMemo(() => {
    return chats.find(c => c.id === activeChatId) || filteredChats[0] || chats[0];
  }, [chats, activeChatId, filteredChats]);

  const pinnedChats = filteredChats.filter(c => c.pinned);
  const regularChats = filteredChats.filter(c => !c.pinned);

  const handleViewChange = (viewType) => {
    setCurrentView(viewType);
    const viewSpecificChats = chats.filter(chat => {
      if (viewType === 'unread') return chat.unread > 0;
      if (viewType === 'archive') return chat.isArchived;
      return !chat.isArchived;
    });
    if (viewSpecificChats.length > 0) {
      setActiveChatId(viewSpecificChats[0].id);
    }
  };

  const handleSelectChat = (id) => {
    setActiveChatId(id);
    setChats(prev => prev.map(c => c.id === id ? { ...c, unread: 0 } : c));
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!messageText.trim()) return;

    const now = new Date();
    const timeString = `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`;
    const newMsg = { id: Date.now(), text: messageText, sender: 'me', time: timeString };

    setChats(prev => prev.map(c => {
      if (c.id === activeChat.id) {
        return { ...c, messages: [...c.messages, newMsg], time: timeString };
      }
      return c;
    }));
    setMessageText('');
  };

  // Helper template renderer to isolate routing switches cleanly
  const renderMainContent = () => {
    switch (viewMode) {
      case 'settings':
        return <SettingsPanel onBackClick={() => setViewMode('chat')} />;
      
      case 'profile':
        return <ProfilePanel onBackClick={() => setViewMode('chat')} />;
        
      case 'chat':
      default:
        return (
          <>
            {/* Left Side Message Feed Stream Bar Column */}
            <section className="hidden md:flex flex-col w-80 bg-white border-r border-gray-100 flex-shrink-0">
              <div className="p-6 pb-2 flex items-center justify-between">
                {currentView !== 'all' ? (
                  <div className="flex items-center space-x-3">
                    <button onClick={() => handleViewChange('all')} className="p-1 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <h1 className="text-xl font-bold text-gray-800 capitalize">
                      {currentView === 'archive' ? 'Archive' : 'Unread'}
                    </h1>
                  </div>
                ) : (
                  <h1 className="text-xl font-bold text-gray-800">Chats</h1>
                )}
                <button className="p-1.5 text-gray-400 hover:text-gray-600 border border-dashed border-gray-200 rounded-full">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
                </button>
              </div>

              <div className="px-6 py-3">
                <div className="relative flex items-center">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                  </span>
                  <input
                    type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search"
                    className="w-full py-2 pl-9 pr-9 bg-slate-50 border border-transparent rounded-xl text-xs focus:outline-none focus:bg-white focus:border-indigo-100 placeholder-gray-400"
                  />
                  <button 
                    onClick={() => handleViewChange(currentView === 'unread' ? 'all' : 'unread')}
                    className={`absolute right-3 p-1 rounded-md transition-colors ${currentView === 'unread' ? 'text-blue-500' : 'text-gray-400 hover:text-gray-600'}`}
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" /></svg>
                  </button>
                </div>
              </div>

              {currentView === 'all' && (
                <div className="px-6 py-1.5">
                  <button onClick={() => handleViewChange('archive')} className="flex items-center space-x-2 text-xs font-semibold text-gray-400 hover:text-gray-600 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg>
                    <span>Archived</span>
                  </button>
                </div>
              )}

              <div className="flex-1 overflow-y-auto px-3 py-2 space-y-4">
                {currentView !== 'archive' && pinnedChats.length > 0 && (
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 px-3 uppercase tracking-wider mb-2">Pinned</p>
                    <div className="space-y-1">
                      {pinnedChats.map(chat => {
                        const lastMsg = chat.messages[chat.messages.length - 1];
                        const isSelected = chat.id === activeChat.id;
                        return (
                          <div key={chat.id} onClick={() => handleSelectChat(chat.id)} className={`flex items-center justify-between p-3 rounded-2xl cursor-pointer transition-all ${isSelected ? 'bg-blue-500 text-white shadow-md shadow-blue-100' : 'hover:bg-slate-50 text-gray-800'}`}>
                            <div className="flex items-center space-x-3 min-w-0">
                              <img className="w-10 h-10 rounded-full object-cover flex-shrink-0" src={chat.avatar} alt="" />
                              <div className="min-w-0">
                                <p className="text-xs font-bold truncate">{chat.name}</p>
                                <p className={`text-[11px] truncate mt-0.5 ${isSelected ? 'text-blue-100' : 'text-gray-400'}`}>{lastMsg?.type === 'image' ? '📷 Photo' : lastMsg?.type === 'file' ? '📁 File' : lastMsg?.text}</p>
                              </div>
                            </div>
                            <span className="text-[10px] opacity-60 font-medium flex-shrink-0 pl-2">{chat.time}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                <div>
                  <p className="text-[10px] font-bold text-gray-400 px-3 uppercase tracking-wider mb-2">
                    {currentView === 'archive' ? 'Archived Logs' : 'All Chats'}
                  </p>
                  <div className="space-y-1">
                    {regularChats.map(chat => {
                      const lastMsg = chat.messages[chat.messages.length - 1];
                      const isSelected = chat.id === activeChat.id;
                      return (
                        <div key={chat.id} onClick={() => handleSelectChat(chat.id)} className={`flex items-center justify-between p-3 rounded-2xl cursor-pointer transition-all ${isSelected ? 'bg-blue-500 text-white shadow-md shadow-blue-100' : 'hover:bg-slate-50 text-gray-800'}`}>
                          <div className="flex items-center space-x-3 min-w-0">
                            <img className="w-10 h-10 rounded-full object-cover flex-shrink-0" src={chat.avatar} alt="" />
                            <div className="min-w-0">
                              <p className="text-xs font-bold truncate">{chat.name}</p>
                              <p className={`text-[11px] truncate mt-0.5 ${isSelected ? 'text-blue-100' : 'text-gray-400'}`}>{lastMsg?.text || 'No messages yet'}</p>
                            </div>
                          </div>
                          <div className="flex flex-col items-end space-y-1 flex-shrink-0 pl-2">
                            <span className="text-[10px] opacity-60 font-medium">{chat.time}</span>
                            {chat.unread > 0 && (
                              <span className="bg-blue-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full min-w-[16px] text-center">
                                {chat.unread}
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </section>

            {/* Central Chat Workspace Platform Column */}
            <main className="flex flex-col flex-1 bg-[#f8fafc] overflow-hidden">
              <Header 
                activeUser={activeChat} 
                toggleSidebar={() => setSidebarOpen(!sidebarOpen)} 
                onToggleRightPanel={() => setRightPanelOpen(!rightPanelOpen)} 
              />
              
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                <div className="text-center my-2">
                  <span className="text-[11px] font-semibold text-gray-400 tracking-wider uppercase">Today</span>
                </div>

                {activeChat?.messages?.map((msg) => {
                  const isMe = msg.sender === 'me';
                  return (
                    <div key={msg.id} className={`flex flex-col ${isMe ? 'items-end' : 'items-start'}`}>
                      {/* Text Chat Bubbles */}
                      {(!msg.type || msg.type === 'text') && (
                        <div className={`group relative max-w-[70%] p-3 rounded-2xl text-xs font-medium shadow-sm border ${
                          isMe 
                            ? 'bg-blue-500 text-white border-transparent rounded-br-none' 
                            : 'bg-white text-gray-800 border-gray-100 rounded-bl-none'
                        }`}>
                          <p>{msg.text}</p>
                          <span className="block text-[9px] text-right mt-1 opacity-60 font-mono">{msg.time}</span>
                        </div>
                      )}

                      {/* Inline Image Elements */}
                      {msg.type === 'image' && (
                        <div className="relative max-w-[280px] rounded-2xl overflow-hidden shadow-sm border border-gray-100 group">
                          <img src={msg.src} alt="Shared upload" className="w-full object-cover max-h-60" />
                          <div className="absolute bottom-2 right-2 bg-black/40 px-1.5 py-0.5 rounded text-[9px] font-mono text-white">
                            {msg.time}
                          </div>
                          {msg.reaction && (
                            <div className="absolute -bottom-2 left-2 bg-white border border-gray-100 px-1.5 py-0.5 rounded-full text-xs shadow-sm flex items-center space-x-1">
                              <span>{msg.reaction}</span>
                              <span className="text-[10px] font-bold text-gray-400">1</span>
                            </div>
                          )}
                        </div>
                      )}

                      {/* File Card Attachments */}
                      {msg.type === 'file' && (
                        <div className="w-64 bg-white border border-gray-100 rounded-2xl p-3 shadow-sm flex items-center justify-between group">
                          <div className="flex items-center space-x-3 min-w-0">
                            <div className="p-2.5 bg-slate-50 border border-gray-100 text-gray-400 rounded-xl flex-shrink-0">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                            </div>
                            <div className="min-w-0">
                              <p className="text-xs font-semibold text-gray-700 truncate">{msg.fileName}</p>
                              <p className="text-[9px] text-gray-400 mt-0.5 font-mono">{msg.time}</p>
                            </div>
                          </div>
                          <button className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-slate-50 rounded-lg transition-colors flex-shrink-0">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                          </button>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Dynamic Footer Input Area */}
              <footer className="p-4 bg-white border-t border-gray-100 flex items-center">
                <form onSubmit={handleSendMessage} className="flex-1 flex items-center bg-slate-50 border border-gray-100 rounded-2xl px-4 py-1.5 space-x-3">
                  <button type="button" className="text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </button>
                  <input 
                    type="text" 
                    value={messageText} 
                    onChange={(e) => setMessageText(e.target.value)} 
                    placeholder="Write a message ..." 
                    className="flex-1 bg-transparent py-2 text-xs text-gray-700 focus:outline-none placeholder-gray-400" 
                  />
                  <button type="button" className="text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0l-4-4a4 4 0 015.656-5.656l4 4a4 4 0 010 5.656z" />
                    </svg>
                  </button>
                  <button 
                    type="submit" 
                    disabled={!messageText.trim()}
                    className="p-2 bg-blue-500 text-white rounded-xl shadow-md shadow-blue-100 hover:bg-blue-600 disabled:opacity-40 transition-all flex-shrink-0"
                  >
                    <svg className="w-3.5 h-3.5 transform rotate-45 translate-x-[-1px] translate-y-[1px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </form>
              </footer>
            </main>

            {/* Modular Contact Profile Overlay Panel Context Container */}
            <ContactInfoDrawer 
              isOpen={rightPanelOpen} 
              onClose={() => setRightPanelOpen(false)} 
              activeUser={activeChat} 
            />
          </>
        );
    }
  };

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden font-sans antialiased">
      {/* Sidebar Navigation Context Hooks */}
      <Sidebar 
        isOpen={sidebarOpen} 
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)} 
        onSettingsClick={() => setViewMode('settings')} 
        onChatsClick={() => setViewMode('chat')}
        onProfileClick={() => setViewMode('profile')}
        activeMode={viewMode}
      />

      <div className="flex flex-1 overflow-hidden">
        {renderMainContent()}
      </div>
    </div>
  );
}