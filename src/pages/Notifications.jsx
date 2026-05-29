import React from 'react';

export default function Notifications({ onBack, notifications, onCheckboxChange }) {
  return (
    <div className="flex flex-col flex-1 animate-in fade-in duration-150">
      
      <div className="p-6 pb-4 flex items-center space-x-4">
        <button 
          onClick={onBack} 
          className="p-1 text-gray-800 hover:bg-gray-200/50 rounded-lg transition-all"
          aria-label="Back to settings root menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-xl font-bold text-gray-900 tracking-tight">Notifications</h1>
      </div>

      <div className="flex-1 overflow-y-auto px-6 mt-4 space-y-5">
        
        <div className="flex flex-col pb-4 border-b border-gray-200/60">
          <div className="flex items-start justify-between">
            <div className="flex flex-col pr-4">
              <span className="text-sm font-bold text-gray-700">Notifications</span>
              <span className="text-[11px] text-gray-400 font-medium mt-0.5">Show notifications for new messages</span>
            </div>
            <input 
              type="checkbox" 
              checked={notifications.messages}
              onChange={() => onCheckboxChange('messages')}
              className="w-4 h-4 mt-0.5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer accent-blue-500"
            />
          </div>
        </div>

        <div className="flex flex-col pb-4 border-b border-gray-200/60">
          <div className="flex items-start justify-between">
            <div className="flex flex-col pr-4">
              <span className="text-sm font-bold text-gray-700">Show Previews</span>
            </div>
            <input 
              type="checkbox" 
              checked={notifications.previews}
              onChange={() => onCheckboxChange('previews')}
              className="w-4 h-4 mt-0.5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer accent-blue-500"
            />
          </div>
        </div>

        <div className="flex flex-col pb-4 border-b border-gray-200/60">
          <div className="flex items-start justify-between">
            <div className="flex flex-col pr-4">
              <span className="text-sm font-bold text-gray-700">Show Reaction Notifications</span>
            </div>
            <input 
              type="checkbox" 
              checked={notifications.reactions}
              onChange={() => onCheckboxChange('reactions')}
              className="w-4 h-4 mt-0.5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer accent-blue-500"
            />
          </div>
        </div>

        <div className="flex flex-col pb-4 border-b border-gray-200/60">
          <div className="flex items-start justify-between">
            <div className="flex flex-col pr-4">
              <span className="text-sm font-bold text-gray-700">Incoming call ringtone</span>
            </div>
            <input 
              type="checkbox" 
              checked={notifications.ringtone}
              onChange={() => onCheckboxChange('ringtone')}
              className="w-4 h-4 mt-0.5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer accent-blue-500"
            />
          </div>
        </div>

        <div className="flex flex-col pb-4">
          <div className="flex items-start justify-between">
            <div className="flex flex-col pr-4">
              <span className="text-sm font-bold text-gray-700">Sounds</span>
              <span className="text-[11px] text-gray-400 font-medium mt-0.5">Play sounds for incoming messages</span>
            </div>
            <input 
              type="checkbox" 
              checked={notifications.sounds}
              onChange={() => onCheckboxChange('sounds')}
              className="w-4 h-4 mt-0.5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer accent-blue-500"
            />
          </div>
        </div>

      </div>
    </div>
  );
}