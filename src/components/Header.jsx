import React from 'react';

export default function Header({ activeUser, toggleSidebar, onToggleRightPanel, onAudioCall, onVideoCall }) {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-100 flex-shrink-0">
      <div className="flex items-center space-x-3">
        <button onClick={toggleSidebar} className="p-1 mr-2 text-gray-500 rounded-lg lg:hidden hover:bg-gray-100">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <div className="relative">
          <img
            className="w-10 h-10 rounded-full object-cover"
            src={activeUser?.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80'}
            alt={`${activeUser?.name || 'User'} Avatar`}
          />
          <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-400 ring-2 ring-white" />
        </div>
        <div>
          <h2 className="text-sm font-semibold text-gray-800">{activeUser?.name || 'Select a chat'}</h2>
          <p className="text-xs text-gray-400">Online</p>
        </div>
      </div>

      <div className="flex items-center space-x-4 text-gray-500">
        {/* Video Call Button -> Wired up to open the video interface */}
        <button 
          onClick={onVideoCall}
          className="p-2 hover:bg-indigo-50 text-gray-500 hover:text-indigo-600 rounded-lg transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        </button>
        
        {/* Audio Call Phone Button -> Updated prop name to avoid confusion */}
        <button 
          onClick={onAudioCall} 
          className="p-2 hover:bg-indigo-50 text-gray-500 hover:text-indigo-600 rounded-lg transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </button>
        {/* Info Drawer Toggle */}
        <button 
          onClick={onToggleRightPanel} 
          className="p-2 hover:bg-gray-50 rounded-lg transition-colors text-gray-500 hover:text-indigo-600 focus:outline-none"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </header>
  );
}