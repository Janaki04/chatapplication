import React, { useState } from 'react';
import logo from "../assets/Budgie.png"

export default function Sidebar({ 
  isOpen, 
  toggleSidebar, 
  onSettingsClick, 
  onChatsClick, 
  onCallsClick,
  onGroupsClick,   
  onProfileClick, 
  activeMode 
}) {
  const [isToggled, setIsToggled] = useState(true);

  const handleSelect = (callback) => {
    if (callback) callback();
    if (isOpen && window.innerWidth < 768) {
      toggleSidebar();
    }
  };

  return (
    <>
      {isOpen && (
        <div 
          onClick={toggleSidebar}
          className="fixed inset-0 z-30 bg-black/20 backdrop-blur-xs md:hidden"
        />
      )}

      <div className="hidden md:block w-20 h-screen shrink-0" />

      <aside
        className={`fixed inset-y-0 left-0 z-40 w-20 h-screen bg-[#f0f4f9] border-r border-gray-200/40 flex flex-col items-center py-6 transform transition-transform duration-300 ease-in-out md:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="mb-6 flex flex-col items-center justify-center">
          <div className="w-12 h-12 bg-[#b4c4ff] rounded-[18px] flex items-center justify-center shadow-xs select-none transition-transform hover:scale-105 duration-200">
            <img src={logo} alt="Logo" className="w-7 h-7 object-contain" />
          </div>
        </div>

        <nav className="flex flex-col items-center w-full space-y-3 px-2">
          <button
            onClick={() => handleSelect(onChatsClick)}
            className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200 ${
              activeMode === 'chat' ? 'bg-[#5393ff] text-white shadow-xs' : 'text-gray-600 hover:bg-gray-200/60'
            }`}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill={activeMode === 'chat' ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2.2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </button>

          <button 
            onClick={() => handleSelect(onGroupsClick)}
            className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200 ${
              activeMode === 'group' ? 'bg-[#5393ff] text-white shadow-xs' : 'text-gray-600 hover:bg-gray-200/60'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.2">
              <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </button>

          <button 
            onClick={() => handleSelect(onCallsClick)}
            className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200 ${
              activeMode === 'calls' ? 'bg-[#5393ff] text-white shadow-xs' : 'text-gray-600 hover:bg-gray-200/60'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 .6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </button>

          <div className="w-8 border-b border-gray-200/70 pt-1" />

          <button
            onClick={() => handleSelect(onSettingsClick)}
            className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200 ${
              activeMode === 'settings' ? 'bg-[#5393ff] text-white shadow-xs' : 'text-gray-600 hover:bg-gray-200/60'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.2">
              <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </button>
        </nav>

        <div className="mt-auto flex flex-col items-center w-full space-y-5">
          <div className="h-6 flex items-center justify-center">
            <button 
              onClick={() => setIsToggled(!isToggled)}
              className={`w-10 h-5 rounded-full p-0.5 transition-colors duration-200 ease-in-out focus:outline-none ${
                isToggled ? 'bg-[#5393ff]' : 'bg-gray-300'
              }`}
            >
              <div className={`bg-white w-4 h-4 rounded-full shadow-xs transform transition-transform duration-200 ease-in-out ${
                isToggled ? 'translate-x-5' : 'translate-x-0'
              }`} />
            </button>
          </div>

          <button 
            onClick={() => handleSelect(onProfileClick)}
            className="relative cursor-pointer group focus:outline-none select-none rounded-full p-0.5"
          >
            <img
              className={`w-10 h-10 rounded-full object-cover transition-all duration-200 group-hover:brightness-95 ${
                activeMode === 'profile' ? 'ring-2 ring-[#5393ff] ring-offset-2' : 'border border-gray-200'
              }`}
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80"
              alt="User Profile"
            />
          </button>
        </div>
      </aside>
    </>
  );
}