import React, { useState, useMemo } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import ContactInfoDrawer from './Contact';
import SettingsPanel from './SettingsPanel';
import ProfilePanel from './ProfilePanel';
import Callbutton from './Callbutton';
import CallModal from './CallModal';

const INITIAL_CHATS = [
  { 
    id: 1, 
    name: 'Pink Panda', 
    time: '9:36', 
    unread: 0, 
    pinned: true, 
    isArchived: false, 
    isGroup: false, 
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80',
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
    id: 2, 
    name: 'Dog Hat', 
    time: '9:36', 
    unread: 2, 
    pinned: true, 
    isArchived: false, 
    isGroup: false, 
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=100&q=80',
    messages: [
      { id: 201, text: "Hey there!", sender: 'me', time: '9:30' },
      { id: 202, text: "It's so quiet outside 🤫", sender: 'them', time: '9:36' }
    ]
  },
  {
    id: 5, 
    name: 'Animal Kingdom', 
    time: '9:36', 
    unread: 0, 
    pinned: true, 
    isArchived: false, 
    isGroup: true, 
    subtext: 'Pink Panda, Turtle, 212 others', 
    avatar: 'https://images.unsplash.com/photo-1531804055935-76f44d7c3621?auto=format&fit=crop&w=100&q=80',
    messages: [
      { id: 501, text: 'Welcome to the group chat! 🐾', sender: 'them', time: '0:12' },
      { id: 502, text: 'Hey teams, check out the project updates.', sender: 'them', time: '8:15' },
      { id: 503, text: 'Everything looks great!', sender: 'me', time: '9:36' }
    ]
  },
  { 
    id: 3, 
    name: 'Cute Turtle', 
    time: '9:36', 
    unread: 0, 
    pinned: false, 
    isArchived: true, 
    isGroup: false, 
    avatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=100&q=80',
    messages: [{ id: 301, text: "That's It. Goodbye!", sender: 'them', time: '9:36' }]
  },
  { 
    id: 4, 
    name: 'Cool spirit', 
    time: '9:36', 
    unread: 5, 
    pinned: false, 
    isArchived: false, 
    isGroup: false, 
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80',
    messages: [{ id: 401, text: 'Look what I found', sender: 'them', time: '9:36' }]
  },
  { 
    id: 6, 
    name: 'Lazy Sloth', 
    time: 'Yesterday', 
    unread: 0, 
    pinned: false, 
    isArchived: true, 
    isGroup: false, 
    avatar: 'https://images.unsplash.com/photo-1537151625747-7af8703a7bc9?auto=format&fit=crop&w=100&q=80',
    messages: [{ id: 601, text: 'Catch you later...', sender: 'them', time: '18:22' }]
  }
];

const CALL_LOGS = [
  { id: 1, name: 'Dog Hat', time: 'May 26, 2:45 PM', type: 'incoming', missed: false, avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=100&q=80' },
  { id: 2, name: 'Pink Panda', time: 'May 25, 11:20 AM', type: 'outgoing', missed: false, avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80' },
  { id: 3, name: 'Cute Turtle', time: 'May 24, 6:12 PM', type: 'incoming', missed: true, avatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=100&q=80' }
];

export default function Dashboard() {
  const [chats, setChats] = useState(INITIAL_CHATS);
  const [activeChatId, setActiveChatId] = useState(1);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [messageText, setMessageText] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentView, setCurrentView] = useState('all'); 
  const [viewMode, setViewMode] = useState('chat'); 
  const [activeCallType, setActiveCallType] = useState(null);
  const [mobileShowChatCanvas, setMobileShowChatCanvas] = useState(false);
  const [contactDrawerOpen, setContactDrawerOpen] = useState(false);

  const filteredChats = useMemo(() => {
    const query = searchQuery.toLowerCase();
    return chats.filter(chat => {
      const matchesSearch = chat.name.toLowerCase().includes(query);
      if (!matchesSearch) return false;

      if (viewMode === 'group') return chat.isGroup;
      if (currentView === 'unread') return chat.unread > 0 && !chat.isGroup && !chat.isArchived;
      if (currentView === 'archive') return chat.isArchived && !chat.isGroup;
      
      return !chat.isArchived && !chat.isGroup;
    });
  }, [chats, searchQuery, currentView, viewMode]);

  const activeChat = useMemo(() => {
    return chats.find(c => c.id === activeChatId) || filteredChats[0] || chats[0];
  }, [chats, activeChatId, filteredChats]);

  const { pinnedChats, regularChats } = useMemo(() => {
    return {
      pinnedChats: filteredChats.filter(c => c.pinned),
      regularChats: filteredChats.filter(c => !c.pinned)
    };
  }, [filteredChats]);

  const handleViewModeChange = (mode) => {
    setViewMode(mode);
    setSearchQuery('');
    setCurrentView('all'); 
    setMobileShowChatCanvas(false); 
    const targets = chats.filter(c => mode === 'group' ? c.isGroup : !c.isGroup);
    if (targets.length > 0) setActiveChatId(targets[0].id);
  };

  const handleSelectChat = (id) => {
    setActiveChatId(id);
    setChats(prev => prev.map(c => c.id === id ? { ...c, unread: 0 } : c));
    setMobileShowChatCanvas(true); 
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!messageText.trim()) return;

    const now = new Date();
    const timeString = `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`;
    const newMsg = { id: Date.now(), text: messageText, sender: 'me', time: timeString };

    setChats(prev => prev.map(c => 
      c.id === activeChat.id ? { ...c, messages: [...c.messages, newMsg], time: timeString } : c
    ));
    setMessageText('');
  };

  const renderMobileMenuButton = () => (
    <button 
      onClick={() => setSidebarOpen(true)} 
      className="p-2 bg-slate-100 rounded-full md:hidden text-gray-600 focus:outline-none transition-colors"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  );

  const renderFilterTabs = () => (
    <div className="flex space-x-1.5 px-6 pb-2">
      {['all', 'unread', 'archive'].map((tab) => (
        <button
          key={tab}
          onClick={() => setCurrentView(tab)}
          className={`px-4 py-1.5 rounded-xl text-xs font-semibold capitalize transition-all focus:outline-none ${
            currentView === tab 
              ? 'bg-[#5393ff] text-white shadow-sm' 
              : 'text-gray-500 hover:bg-slate-100'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );

  const renderChatCanvas = () => (
    <main className={`flex flex-col flex-1 bg-[#f8fafc] h-full w-full overflow-hidden transition-all ${
      mobileShowChatCanvas 
        ? 'fixed inset-0 z-40 flex' 
        : 'hidden md:relative md:flex md:z-10'
    }`}>
      <Header 
        activeUser={activeChat}
        onAudioCall={() => setActiveCallType('audio')} 
        onVideoCall={() => setActiveCallType('video')}
        onToggleRightPanel={() => setContactDrawerOpen(prev => !prev)} 
        toggleSidebar={() => setSidebarOpen(true)} 
        isMobileCanvas={mobileShowChatCanvas}
        onMobileBack={() => setMobileShowChatCanvas(false)}
      />
      
      <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4">
        {activeChat?.messages?.map((msg) => {
          const isMe = msg.sender === 'me';
          return (
            <div key={msg.id} className={`flex flex-col ${isMe ? 'items-end' : 'items-start'}`}>
              {(!msg.type || msg.type === 'text') && (
                <div className={`group relative max-w-[85%] md:max-w-[70%] p-3 rounded-2xl text-xs font-medium shadow-sm border ${
                  isMe ? 'bg-blue-500 text-white border-transparent rounded-br-none' : 'bg-white text-gray-800 border-gray-100 rounded-bl-none'
                }`}>
                  <p>{msg.text}</p>
                  <span className="block text-[9px] text-right mt-1 opacity-60 font-mono">{msg.time}</span>
                </div>
              )}

              {msg.type === 'image' && (
                <div className="relative max-w-[280px] rounded-2xl overflow-hidden shadow-sm border border-gray-100 group">
                  <img src={msg.src} alt="Shared upload" className="w-full object-cover max-h-60" />
                  <div className="absolute bottom-2 right-2 bg-black/40 px-1.5 py-0.5 rounded text-[9px] font-mono text-white">
                    {msg.time}
                  </div>
                </div>
              )}

              {msg.type === 'file' && (
                <div className="w-64 bg-white border border-gray-100 rounded-2xl p-3 shadow-sm flex items-center justify-between group">
                  <div className="flex items-center space-x-3 min-w-0">
                    <div className="p-2.5 bg-slate-50 border border-gray-100 text-gray-400 rounded-xl flex-shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-gray-700 truncate">{msg.fileName}</p>
                      <p className="text-[9px] text-gray-400 mt-0.5 font-mono">{msg.time}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <footer className="p-4 bg-white border-t border-gray-100 flex items-center pb-safe">
        <form onSubmit={handleSendMessage} className="flex-1 flex items-center bg-slate-50 border border-gray-100 rounded-2xl px-4 py-1.5 space-x-3">
          <input 
            type="text" 
            value={messageText} 
            onChange={(e) => setMessageText(e.target.value)} 
            placeholder="Write a message ..." 
            className="flex-1 bg-transparent py-2 text-xs text-gray-700 focus:outline-none placeholder-gray-400" 
          />
          <button type="submit" disabled={!messageText.trim()} className="p-2 bg-blue-500 text-white rounded-xl">
            <svg className="w-3.5 h-3.5 transform rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
          </button>
        </form>
      </footer>
    </main>
  );

  const renderCallsView = () => (
    <div className="flex flex-1 h-full w-full relative">
      <section className={`flex flex-col w-full md:w-80 bg-white border-r border-gray-100 flex-shrink-0 h-full ${
        mobileShowChatCanvas ? 'hidden md:flex' : 'flex'
      }`}>
        <div className="p-6 pb-2 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Calls</h1>
          {renderMobileMenuButton()}
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-3 space-y-2">
          <p className="text-[11px] font-bold text-gray-500/80 px-2 uppercase tracking-wider mb-2">Recent Logs</p>
          {CALL_LOGS.map(log => (
            <div 
              key={log.id} 
              onClick={() => setActiveCallType('audio')} 
              className="flex items-center justify-between p-3.5 rounded-[22px] bg-white border border-gray-100/10 hover:bg-slate-50 text-gray-800 cursor-pointer transition-all"
            >
              <div className="flex items-center space-x-3.5 min-w-0">
                <img className="w-12 h-12 rounded-full object-cover flex-shrink-0" src={log.avatar} alt="" />
                <div className="min-w-0">
                  <p className={`text-sm font-bold truncate tracking-tight ${log.missed ? 'text-red-500' : 'text-gray-800'}`}>{log.name}</p>
                  <div className="flex items-center space-x-1 mt-0.5">
                    {log.type === 'incoming' ? (
                      <svg className={`w-3 h-3 ${log.missed ? 'text-red-400' : 'text-green-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    ) : (
                      <svg className="w-3 h-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" /></svg>
                    )}
                    <p className="text-xs text-gray-400 truncate font-medium">{log.time}</p>
                  </div>
                </div>
              </div>
              <button className="p-2 bg-blue-50 text-blue-500 rounded-full hover:bg-blue-100 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </section>

      <main className="hidden md:flex flex-1 bg-[#f8fafc] flex-col items-center justify-center p-6 text-center">
        <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-500 mb-4 shadow-sm">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </div>
        <h3 className="text-sm font-bold text-gray-700">No Active Call Session</h3>
      </main>
    </div>
  );

  const renderGroupsView = () => (
    <div className="flex flex-1 h-full w-full relative">
      <section className={`flex flex-col w-full md:w-80 bg-white border-r border-gray-100 flex-shrink-0 h-full ${
        mobileShowChatCanvas ? 'hidden md:flex' : 'flex'
      }`}>
        <div className="p-6 pb-2 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Groups</h1>
          {renderMobileMenuButton()}
        </div>

        <div className="px-6 py-3">
          <div className="relative flex items-center">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-500">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </span>
            <input
              type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search Groups"
              className="w-full py-3 pl-10 pr-4 bg-[#f0f4f9]/80 border border-transparent rounded-2xl text-sm font-semibold text-gray-700 focus:outline-none placeholder-blue-400/70"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-3 space-y-4">
          {pinnedChats.length > 0 && (
            <div>
              <p className="text-[11px] font-bold text-gray-500/80 px-2 uppercase tracking-wider mb-2">Pinned Groups</p>
              <div className="space-y-2">
                {pinnedChats.map(chat => {
                  const isSelected = chat.id === activeChat.id;
                  return (
                    <div key={chat.id} onClick={() => handleSelectChat(chat.id)} className={`flex items-center justify-between p-3.5 rounded-[22px] cursor-pointer transition-all ${isSelected ? 'bg-[#5393ff] text-white shadow-md' : 'bg-white hover:bg-slate-50 text-gray-800'}`}>
                      <div className="flex items-center space-x-3.5 min-w-0">
                        <img className="w-12 h-12 rounded-full object-cover flex-shrink-0" src={chat.avatar} alt="" />
                        <div className="min-w-0">
                          <p className="text-sm font-bold truncate tracking-tight">{chat.name}</p>
                          <p className={`text-xs truncate mt-0.5 font-medium ${isSelected ? 'text-blue-50' : 'text-gray-400'}`}>{chat.subtext || 'Active group conversation'}</p>
                        </div>
                      </div>
                      <span className="text-xs opacity-70 font-medium pl-2">{chat.time}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {regularChats.length > 0 && (
            <div>
              <p className="text-[11px] font-bold text-gray-500/80 px-2 uppercase tracking-wider mb-2">All Groups</p>
              <div className="space-y-2">
                {regularChats.map(chat => {
                  const isSelected = chat.id === activeChat.id;
                  return (
                    <div key={chat.id} onClick={() => handleSelectChat(chat.id)} className={`flex items-center justify-between p-3.5 rounded-[22px] cursor-pointer transition-all ${isSelected ? 'bg-[#5393ff] text-white shadow-md' : 'bg-white hover:bg-slate-50 text-gray-800 border border-gray-100/10'}`}>
                      <div className="flex items-center space-x-3.5 min-w-0">
                        <img className="w-12 h-12 rounded-full object-cover flex-shrink-0" src={chat.avatar} alt="" />
                        <div className="min-w-0">
                          <p className="text-sm font-bold truncate tracking-tight">{chat.name}</p>
                          <p className="text-xs truncate text-gray-400 font-medium">{chat.subtext || 'No recent log data'}</p>
                        </div>
                      </div>
                      <span className="text-xs opacity-70 font-medium pl-2">{chat.time}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </section>
      {renderChatCanvas()}
    </div>
  );

  const renderChatView = () => (
    <div className="flex flex-1 h-full w-full relative">
      <section className={`flex flex-col w-full md:w-80 bg-white border-r border-gray-100 flex-shrink-0 h-full ${
        mobileShowChatCanvas ? 'hidden md:flex' : 'flex'
      }`}>
        <div className="p-6 pb-2 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Chats</h1>
          {renderMobileMenuButton()}
        </div>

        <div className="px-6 py-3">
          <div className="relative flex items-center">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-500">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </span>
            <input
              type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search"
              className="w-full py-3 pl-10 pr-4 bg-[#f0f4f9]/80 border border-transparent rounded-2xl text-sm font-semibold text-gray-700 focus:outline-none placeholder-blue-400/70"
            />
          </div>
        </div>

        {renderFilterTabs()}

        <div className="flex-1 overflow-y-auto px-4 py-3 space-y-4">
          {pinnedChats.length > 0 && (
            <div>
              <p className="text-[11px] font-bold text-gray-500/80 px-2 uppercase tracking-wider mb-2">Pinned Chats</p>
              <div className="space-y-2">
                {pinnedChats.map(chat => {
                  const lastMsg = chat.messages[chat.messages.length - 1];
                  const isSelected = chat.id === activeChat.id;
                  return (
                    <div key={chat.id} onClick={() => handleSelectChat(chat.id)} className={`flex items-center justify-between p-3.5 rounded-[22px] cursor-pointer transition-all ${isSelected ? 'bg-[#5393ff] text-white shadow-md' : 'bg-white hover:bg-slate-50 text-gray-800'}`}>
                      <div className="flex items-center space-x-3.5 min-w-0">
                        <img className="w-12 h-12 rounded-full object-cover flex-shrink-0" src={chat.avatar} alt="" />
                        <div className="min-w-0">
                          <p className="text-sm font-bold truncate tracking-tight">{chat.name}</p>
                          <p className={`text-xs truncate mt-0.5 font-medium ${isSelected ? 'text-blue-50' : 'text-gray-400'}`}>{lastMsg?.type === 'image' ? '📷 Photo' : lastMsg?.type === 'file' ? '📁 File' : lastMsg?.text}</p>
                        </div>
                      </div>
                      <span className="text-xs opacity-70 font-medium pl-2">{chat.time}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {regularChats.length > 0 && (
            <div>
              <p className="text-[11px] font-bold text-gray-500/80 px-2 uppercase tracking-wider mb-2">All Chats</p>
              <div className="space-y-2">
                {regularChats.map(chat => {
                  const lastMsg = chat.messages[chat.messages.length - 1];
                  const isSelected = chat.id === activeChat.id;
                  return (
                    <div key={chat.id} onClick={() => handleSelectChat(chat.id)} className={`flex items-center justify-between p-3.5 rounded-[22px] cursor-pointer transition-all ${isSelected ? 'bg-[#5393ff] text-white shadow-md' : 'bg-white hover:bg-slate-50 text-gray-800'}`}>
                      <div className="flex items-center space-x-3.5 min-w-0">
                        <img className="w-12 h-12 rounded-full object-cover flex-shrink-0" src={chat.avatar} alt="" />
                        <div className="min-w-0">
                          <p className="text-sm font-bold truncate tracking-tight">{chat.name}</p>
                          <p className="text-xs truncate text-gray-400 font-medium">{lastMsg?.text || 'Hello there...'}</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end space-y-1.5 flex-shrink-0 pl-2">
                        <span className="text-xs opacity-70 font-medium">{chat.time}</span>
                        {chat.unread > 0 && (
                          <span className="bg-[#5393ff] text-white text-[10px] font-bold px-2 py-0.5 rounded-full min-w-[18px] text-center shadow-sm">
                            {chat.unread}
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {pinnedChats.length === 0 && regularChats.length === 0 && (
            <div className="text-center py-12 text-xs text-gray-400 italic">
              No chats found matching this filter view.
            </div>
          )}
        </div>
      </section>
      {renderChatCanvas()}
    </div>
  );

  const renderMainContent = () => {
    switch (viewMode) {
      case 'settings': return <SettingsPanel onBackClick={() => handleViewModeChange('chat')} />;
      case 'profile': return <ProfilePanel onBackClick={() => handleViewModeChange('chat')} />;
      case 'group': return renderGroupsView();
      case 'calls': return renderCallsView(); 
      case 'chat':
      default: return renderChatView();
    }
  };

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden font-sans antialiased relative w-full select-none">
      <div className="relative z-30 flex-shrink-0"> 
        <Sidebar 
          isOpen={sidebarOpen} 
          toggleSidebar={() => setSidebarOpen(!sidebarOpen)} 
          onSettingsClick={() => handleViewModeChange('settings')} 
          onChatsClick={() => handleViewModeChange('chat')}
          onCallsClick={() => handleViewModeChange('calls')} 
          onGroupsClick={() => handleViewModeChange('group')}
          onProfileClick={() => handleViewModeChange('profile')} 
          activeMode={viewMode}
        />
      </div>

      <div className="flex flex-1 overflow-hidden h-full w-full relative z-10">
        {renderMainContent()}
      </div>

      {activeCallType === 'audio' && <Callbutton onClose={() => setActiveCallType(null)} />}
      {activeCallType === 'video' && <CallModal type="video" onClose={() => setActiveCallType(null)} />}

     {contactDrawerOpen && (
  <ContactInfoDrawer 
    isOpen={contactDrawerOpen} 
    onClose={() => setContactDrawerOpen(false)} 
    activeUser={activeChat} 
  />
)}
    </div>
  );
}