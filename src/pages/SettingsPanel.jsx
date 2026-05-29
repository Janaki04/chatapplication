import React, { useState } from 'react';
import Notifications from './Notifications';
import Privacy from './Privacy'; 
import Security from './Security';
import Help from './Help';
import RequestAccountInfo from './RequestAccountInfo';
import Wallpaper from './privacy/Wallpaper';
import NewCov from '../components/NewCov';

export default function SettingsPanel({ onBackClick }) {
  const [activeOption, setActiveOption] = useState(null);
  
  const [isThemeModalOpen, setIsThemeModalOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('Light'); 
  const [tempSelectedTheme, setTempSelectedTheme] = useState('Light');

  const [notifications, setNotifications] = useState({
    messages: true,
    previews: true,
    reactions: false,
    ringtone: false,
    sounds: true,
  });

  const handleCheckboxChange = (key) => {
    setNotifications((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleThemeApply = () => {
    setCurrentTheme(tempSelectedTheme);
    setIsThemeModalOpen(false);
  };

  const settingsOptions = [
    { id: 'notifications', label: 'Notifications', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    )},
    { id: 'privacy', label: 'Privacy', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    )},
    { id: 'security', label: 'Security', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
      </svg>
    )},
    { id: 'theme', label: 'Theme', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3v1m0 16v1m9-9h-1M4 9H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M14 12a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )},
    { id: 'wallpaper', label: 'Chat Wallpaper', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )},
    { id: 'accountInfo', label: 'Request Account Info', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )},
    { id: 'help', label: 'Help', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )}
  ];

  

  const handleOptionClick = (id) => {
    if (id === 'theme') {
      setTempSelectedTheme(currentTheme);
      setIsThemeModalOpen(true);
    } else {
      setActiveOption(id);
    }
  };

  const renderLeftPanelContent = () => {
    switch (activeOption) {
      case 'notifications':
        return (
          <Notifications 
            onBack={() => setActiveOption(null)} 
            notifications={notifications}
            onCheckboxChange={handleCheckboxChange}
          />
        );
      case 'privacy':
        return Privacy ? <Privacy onBack={() => setActiveOption(null)} /> : null;
      case 'security':
        return <Security onBack={() => setActiveOption(null)} />;
      case 'help':
        return <Help onBack={() => setActiveOption(null)} />;
      case 'accountInfo':
        return <RequestAccountInfo onBack={() => setActiveOption(null)} />;
        case 'wallpaper':
  return (
    <div className="absolute inset-0 z-10 bg-white flex flex-col w-full">
      <Wallpaper onBack={() => setActiveOption(null)} />
    </div>
  );
      default:
        return (
          <div className="flex flex-col flex-1 animate-in fade-in duration-150">
            <div className="p-6 pb-4 flex items-center space-x-4">
              <button 
                onClick={onBackClick} 
                className="p-1 text-gray-800 hover:bg-gray-200/50 rounded-lg transition-all"
                aria-label="Back to chats"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Settings</h1>
            </div>

            <div className="px-6 py-4 flex items-center space-x-4 mb-4">
              <img 
                className="w-14 h-14 rounded-full object-cover shadow-sm border border-gray-100"
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80" 
                alt="Shreyansh shah" 
              />
              <div className="min-w-0">
                <h2 className="text-sm font-bold text-gray-800 truncate">Shreyansh shah</h2>
                <p className="text-[11px] text-gray-400 font-medium truncate mt-0.5">Exploring</p>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto px-4 space-y-0.5">
              {settingsOptions.map((option) => (
                <div key={option.id} className="group">
                  <button
                    onClick={() => handleOptionClick(option.id)}
                    className="w-full flex items-center space-x-4 px-4 py-3.5 rounded-xl text-left font-medium text-xs text-gray-500 hover:text-gray-800 hover:bg-slate-200/40 transition-all"
                  >
                    <span className="text-gray-400 group-hover:text-gray-600">
                      {option.icon}
                    </span>
                    <span className="flex-1 tracking-wide font-semibold">{option.label}</span>
                  </button>
                  <div className="mx-4 border-b border-gray-200/50 last:border-0" />
                </div>
              ))}
            </div>
          </div>
        );
    }
  };

  return (
    <div className="relative flex flex-1 h-full bg-white overflow-hidden">
      
      <section className={`w-full md:w-80 bg-[#f8fafc] border-r border-gray-100 flex flex-col flex-shrink-0 ${
        activeOption ? 'flex' : 'flex md:flex'
      }`}>
        {renderLeftPanelContent()}
      </section>

      <main className="flex-1 hidden md:flex flex-col bg-white overflow-hidden">
     <NewCov/>
      </main>
      {isThemeModalOpen && (
        <div 
          className="absolute inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-[0.5px] p-4 animate-in fade-in duration-200"
          onClick={() => setIsThemeModalOpen(false)}
        >
          <div 
            className="bg-white w-full max-w-[360px] md:max-w-[400px] rounded-2xl shadow-2xl border border-gray-100 flex flex-col p-5 md:p-6 space-y-5 animate-in zoom-in-95 duration-200 select-none"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Title */}
            <h2 className="text-xs md:text-sm font-bold text-gray-900 tracking-wide">
              Choose Theme
            </h2>

            <div className="space-y-3.5">
              {[
                { id: 'Light', label: 'Light' },
                { id: 'Dark', label: 'Dark' },
                { id: 'System Default', label: 'System Default' }
              ].map((theme) => {
                const isSelected = tempSelectedTheme === theme.id;
                return (
                  <div 
                    key={theme.id}
                    onClick={() => setTempSelectedTheme(theme.id)}
                    className="flex items-center space-x-3.5 cursor-pointer py-1.5 px-1 rounded-lg hover:bg-gray-50/50 transition-all group"
                  >
                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all ${
                      isSelected ? 'border-blue-500 bg-white' : 'border-gray-300 group-hover:border-gray-400'
                    }`}>
                      {isSelected && (
                        <div className="w-2 h-2 rounded-full bg-blue-500" />
                      )}
                    </div>
                    <span className="text-xs font-semibold text-gray-700 group-hover:text-gray-900 transition-colors">
                      {theme.label}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center justify-end space-x-2 pt-1">
              <button
                onClick={() => setIsThemeModalOpen(false)}
                className="px-4 py-2 text-xs font-bold text-blue-500 hover:bg-blue-50/60 rounded-xl transition-all"
              >
                Cancel
              </button>
              <button
                onClick={handleThemeApply}
                className="px-5 py-2 text-xs font-bold text-white bg-blue-500 hover:bg-blue-600 rounded-xl shadow-sm hover:shadow active:scale-[0.98] transition-all"
              >
                Apply
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}



const INITIAL_CHATS = [
  { 
    id: 1, name: 'Pink Panda', time: '9:36', unread: 0, pinned: true, isArchived: false, isGroup: false, avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80',
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
    id: 2, name: 'Dog Hat', time: '9:36', unread: 2, pinned: true, isArchived: false, isGroup: false, avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=100&q=80',
    messages: [
      { id: 201, text: "Hey there!", sender: 'me', time: '9:30' },
      { id: 202, text: "It's so quite outside 🤫", sender: 'them', time: '9:36' }
    ]
  },
  {
    id: 5, name: 'Animal Kingdom', time: '9:36', unread: 0, pinned: true, isArchived: false, isGroup: true, subtext: 'Pink Panda, Turtle, 212 others', avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=100&q=80',
    messages: [
      { id: 501, text: 'Hi 👋, How are ya ?', sender: 'them', time: '0:12' },
      { id: 502, text: 'Hi 👋 Panda, not bad, u ?', sender: 'me', time: '8:15' },
      { id: 503, text: 'Can you send me an abstract image?', sender: 'me', time: '8:17' },
      { id: 504, type: 'image', src: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=600&q=80', sender: 'them', time: '10:35' },
      { id: 505, text: 'Can you send it as file ?', sender: 'me', time: '11:12' },
      { id: 506, type: 'file', fileName: 'Abstract.png', sender: 'them', time: '11:25' },
      { id: 507, text: 'Thnx!', sender: 'me', time: '11:28' }
    ]
  },
  { 
    id: 3, name: 'Cute Turtle', time: '9:36', unread: 3, pinned: false, isArchived: false, isGroup: false, avatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=100&q=80',
    messages: [{ id: 301, text: "That's It. Goodbye!", sender: 'them', time: '9:36' }]
  },
  { 
    id: 4, name: 'Cool spirit', time: '9:36', unread: 0, pinned: false, isArchived: false, isGroup: false, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80',
    messages: [{ id: 401, text: 'Look what I found', sender: 'them', time: '9:36' }]
  }
];

const CALL_LOGS = [
  { id: 1, name: 'Dog Hat', time: 'May 26, 2:45 PM', type: 'incoming', missed: false, avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=100&q=80' },
  { id: 2, name: 'Pink Panda', time: 'May 25, 11:20 AM', type: 'outgoing', missed: false, avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80' },
  { id: 3, name: 'Cute Turtle', time: 'May 24, 6:12 PM', type: 'incoming', missed: true, avatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=100&q=80' }
];