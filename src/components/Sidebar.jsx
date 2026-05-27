// src/components/Sidebar.jsx
import React, { useState } from 'react';

// Added onProfileClick to the incoming destructured props below:
export default function Sidebar({ isOpen, toggleSidebar, onSettingsClick, onChatsClick, onProfileClick, activeMode }) {
  // Local state for the toggle switch component shown in the screenshot
  const [isToggled, setIsToggled] = useState(true);

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-40 w-20 bg-[#f0f4f9] border-r border-gray-200/40 flex flex-col items-center py-7 justify-between transform transition-transform duration-300 ease-in-out md:translate-x-0 md:static ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      {/* ... keeping the entire top logo & navigation sections exactly the same ... */}
      <div className="flex flex-col items-center w-full space-y-10">
        <div className="w-14 h-14 bg-[#b4c4ff] rounded-[22px] flex items-center justify-center shadow-sm select-none">
          {/* SVG Parrot Asset */}
          <svg className="w-9 h-9 animate-pulse duration-1000" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M36 12C36 12 34 8 31 8C28 8 27 11 27 11L31 14L36 12Z" fill="#eab308" />
            <path d="M37 18C41 18 42 20 41 22C40 23 37 23 37 23V18Z" fill="#eab308" />
            <path d="M26 14C26 14 31 11 36 14C41 17 40 24 39 28C38 32 36 39 36 39L29 33L26 23V14Z" fill="#06b6d4" />
            <path d="M26 20C29 18 34 16 36 21C38 26 34 32 30 35C26 38 25 33 25 33L26 20Z" fill="#eab308" />
            <path d="M29 33C29 33 26 42 23 48C21 52 24 53 25 50C27 46 32 38 32 38L29 33Z" fill="#22c55e" />
            <circle cx="34" cy="17" r="1.5" fill="#1e293b" />
          </svg>
        </div>

        <nav className="flex flex-col items-center w-full space-y-7 px-2">
          <button
            onClick={onChatsClick}
            className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all ${
              activeMode === 'chat' ? 'bg-[#5393ff] text-white' : 'text-gray-700'
            }`}
          >
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill={activeMode === 'chat' ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </button>

          <button className="w-12 h-12 text-gray-800"><svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg></button>
          <button className="w-12 h-12 text-gray-800"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 .6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg></button>
          <div className="w-11 border-b border-gray-300/70 pt-1" />

          <button
            onClick={onSettingsClick}
            className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
              activeMode === 'settings' ? 'bg-blue-100/60 text-blue-600' : 'text-gray-800'
            }`}
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </button>
        </nav>
      </div>

      {/* Bottom Section: Setting Switch Toggle Widget & Profile Node */}
      <div className="flex flex-col items-center w-full space-y-6">
        <button 
          onClick={() => setIsToggled(!isToggled)}
          className={`w-12 h-6 rounded-full p-0.5 transition-colors duration-200 ease-in-out focus:outline-none ${
            isToggled ? 'bg-[#5393ff]' : 'bg-gray-300'
          }`}
        >
          <div className={`bg-white w-5 h-5 rounded-full shadow-sm transform transition-transform duration-200 ease-in-out ${
            isToggled ? 'translate-x-6' : 'translate-x-0'
          }`} />
        </button>

        {/* Global User Session Identity Avatar */}
        <button 
          onClick={onProfileClick}
          className="relative cursor-pointer group focus:outline-none select-none rounded-full"
        >
          <img
            className={`w-12 h-12 rounded-full object-cover transition-all duration-200 group-hover:scale-105 ${
              activeMode === 'profile' ? 'ring-2 ring-blue-500 ring-offset-2' : ''
            }`}
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80"
            alt="User Profile"
          />
        </button>
      </div>
    </aside>
  );
}